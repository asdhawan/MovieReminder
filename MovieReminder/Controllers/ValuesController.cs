using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MREntities.Models;

namespace MovieReminder.Controllers {
  [Route("api/[controller]")]
  public class ValuesController : Controller {
    private readonly IConfiguration configuration;
    private readonly movieminderContext dbContext;
    public ValuesController(IConfiguration configuration, movieminderContext dbContext) {
      this.configuration = configuration;
      this.dbContext = dbContext;
    }

    // GET api/values
    [HttpGet]
    public IEnumerable<string> Get() {
      List<string> list = new List<string>();
      list.AddRange(dbContext.Movie.Select(x => x.Name));
      return list;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id) {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value) {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value) {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id) {
    }
  }
}
