using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Threading.Tasks;
using TMDbLib.Client;
using TMDbLib.Objects.Movies;
using TMDbLib.Objects.Search;

namespace MovieReminder.Controllers {
  [Route("api/[controller]")]
  public class MovieDbController : Controller {
    private readonly IConfiguration configuration;
    private readonly TMDbClient tmdbClient;
    public MovieDbController(IConfiguration configuration) {
      this.configuration = configuration;
      var configSection = configuration.GetSection("MovieDbSettings");
      tmdbClient = new TMDbClient(configSection["ApiKey"]);
    }

    // GET api/movies
    [HttpGet]
    public async Task<IEnumerable<SearchMovie>> GetAsync() {
      var moviesResult = await tmdbClient.GetMovieNowPlayingListAsync();
      return moviesResult.Results;
    }

    // GET api/movies/5
    [HttpGet("{id}")]
    public async Task<Movie> GetAsync(int id) {
      return await tmdbClient.GetMovieAsync(id);
    }

    // GET api/movies/5
    [HttpGet("search")]
    public async Task<IEnumerable<SearchMovie>> GetByNameAsync([FromQuery]string partialName) {
      var moviesResult = await tmdbClient.SearchMovieAsync(partialName);
      return moviesResult.Results;
    }
  }
}
