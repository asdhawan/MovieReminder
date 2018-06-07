using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MovieReminderEntities.Model;
using System.Collections.Generic;
using System.Linq;

namespace MovieReminder.Controllers {
  [Route("api/[controller]")]
  public class MoviesController : Controller {
    private readonly IConfiguration configuration;
    private readonly movieminderContext dbContext;
    public MoviesController(IConfiguration configuration, movieminderContext dbContext) {
      this.configuration = configuration;
      this.dbContext = dbContext;
    }

    // GET api/movies
    [HttpGet]
    public IEnumerable<Movie> Get() {
      return dbContext.Movie.Select(x => x).ToList();
    }

    // GET api/movies/5
    [HttpGet("{id}")]
    public Movie Get(int id) {
      return dbContext.Movie.FirstOrDefault(x => x.MovieId == id);
    }

    // POST api/movies
    [HttpPost]
    public Movie Post([FromBody]Movie value) {
      dbContext.Movie.Add(value);
      dbContext.SaveChanges();
      return value;
    }

    // PUT api/movies/5
    [HttpPut("{id}")]
    public Movie Put(int id, [FromBody]Movie value) {
      var movie = dbContext.Movie.FirstOrDefault(x => x.MovieId == id);
      if (movie != null) {
        dbContext.Movie.Attach(value);
        dbContext.SaveChanges();
      }
      return movie;
    }

    // DELETE api/movies/5
    [HttpDelete("{id}")]
    public void Delete(int id) {
      var movie = dbContext.Movie.FirstOrDefault(x => x.MovieId == id);
      if (movie != null) {
        dbContext.Movie.Remove(movie);
        dbContext.SaveChanges();
      }
    }
  }
}
