import { movie } from '../models/movie';

export const MOVIES: movie[] = [
  { id: 1, name: "silence of the cows", synopsis: "the story of cows being silenced...", seenYN: false, releaseDate: new Date(2019, 4, 1), backdropUrl: "", posterUrl: "" },
  { id: 2, name: "lord of the things", synopsis: "the story of the greatest lord of all time...", seenYN: true, releaseDate: new Date(2018, 3, 12), backdropUrl: "", posterUrl: "" }
]
