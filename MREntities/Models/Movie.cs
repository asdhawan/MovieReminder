using System;
using System.Collections.Generic;

namespace MREntities.Models
{
    public partial class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Year { get; set; }
        public string Synopsis { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string BackdropUrl { get; set; }
        public string PosterUrl { get; set; }
        public bool? Seen { get; set; }
    }
}
