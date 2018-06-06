using Microsoft.EntityFrameworkCore;

namespace MREntities.Models {
    public partial class movieminderContext : DbContext {
        //private readonly string connectionString = null;
        //public movieminderContext(string connectionString) {
        //    this.connectionString = connectionString;
        //}

        public movieminderContext() { }

        public movieminderContext(DbContextOptions<movieminderContext> options)
            : base(options) {
        }

        public virtual DbSet<Movie> Movie { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        //    if (!optionsBuilder.IsConfigured) {
        //        optionsBuilder.UseMySql(connectionString);
        //    }
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Movie>(entity => {
                entity.ToTable("movie");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.BackdropUrl)
                    .HasColumnName("backdrop_url")
                    .HasColumnType("text");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255);

                entity.Property(e => e.PosterUrl)
                    .HasColumnName("poster_url")
                    .HasColumnType("text");

                entity.Property(e => e.ReleaseDate)
                    .HasColumnName("release_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Seen)
                    .IsRequired()
                    .HasColumnName("seen")
                    .HasColumnType("bit(1)")
                    .HasDefaultValueSql("'b\\'0\\''");

                entity.Property(e => e.Synopsis).HasColumnName("synopsis");

                entity.Property(e => e.Year)
                    .HasColumnName("year")
                    .HasColumnType("int(11)");
            });
        }
    }
}
