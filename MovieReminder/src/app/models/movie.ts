export class movie {
  id: number;
  name: string;
  synopsis: string;
  seen: boolean;
  release_date: Date;
  backdrop_url: string;
  poster_url: string;

  constructor() {
    this.seen = false;
  };
}
