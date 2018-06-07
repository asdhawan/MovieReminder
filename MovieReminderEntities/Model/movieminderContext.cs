using Microsoft.EntityFrameworkCore;

namespace MovieReminderEntities.Model {
    public partial class movieminderContext : DbContext {
        public movieminderContext() {
        }

        public movieminderContext(DbContextOptions<movieminderContext> options)
            : base(options) {
        }

        public virtual DbSet<Movie> Movie { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Movie>(entity => {
                entity.Property(e => e.BackdropUrl).IsUnicode(false);

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.PosterUrl).IsUnicode(false);

                entity.Property(e => e.Synopsis).IsUnicode(false);
            });
        }
    }
}
