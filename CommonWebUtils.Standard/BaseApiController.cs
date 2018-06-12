using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CommonWebUtils {

    public class BaseApiController : Controller {

        protected IActionResult ExecuteRequest(Action executeRequestDelegate) {
            IActionResult result = null;
            try {
                executeRequestDelegate.Invoke();
                result = new OkResult();
            } catch (Exception ex) {
                result = StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            return result;
        }
        protected async Task<IActionResult> ExecuteRequestAsync(Func<Task> executeRequestDelegate) {
            IActionResult result = null;
            try {
                await executeRequestDelegate.Invoke();
                result = new OkResult();
            } catch (Exception ex) {
                result = StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            return result;
        }

        protected IActionResult ExecuteRequest<T>(Func<T> executeRequestDelegate) where T : new() {
            IActionResult result = null;
            try {
                T data = executeRequestDelegate.Invoke();
                result = new OkObjectResult(data);
            } catch (Exception ex) {
                result = StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            return result;
        }

        protected async Task<IActionResult> ExecuteRequestAsync<T>(Func<Task<T>> executeRequestDelegate) where T : new() {
            IActionResult result = null;
            try {
                T data = await executeRequestDelegate.Invoke();
                result = new OkObjectResult(data);
            } catch (Exception ex) {
                result = StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
            return result;
        }
    }

}
