using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieReminderEntities.Model
{
    public partial class Movie
    {
        public int MovieId { get; set; }
        [Required]
        [StringLength(500)]
        public string Name { get; set; }
        public string Synopsis { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? ReleaseDate { get; set; }
        [Column("SeenYN")]
        public bool SeenYn { get; set; }
        [Column("Backdrop_Url")]
        [StringLength(255)]
        public string BackdropUrl { get; set; }
        [Column("Poster_Url")]
        [StringLength(255)]
        public string PosterUrl { get; set; }
        [Column("mdb_id")]
        public int? MdbId { get; set; }
    }
}
