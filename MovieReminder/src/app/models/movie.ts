export class movie {
  id: number;
  name: string;
  synopsis: string;
  seenYN: boolean;
  releaseDate: Date;
  backdropUrl: string;
  posterUrl: string;

  constructor() {
    this.seenYN = false;
  };
}
