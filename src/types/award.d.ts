export type RecordAwardTypes =
  | "MUSIC_VIDEO"
  | "VOCAL_PERFORMANCE"
  | "LYRICS"
  | "ACCOMPANIMENT"
  | "COMPOSITION"
  | "NEW_RECORD"
  | "RECORD";

export type ArtistAwardType = "ARTIST";

export type AwardTypes = RecordAwardTypes | ArtistAwardType;

export interface RecordAwardNominee {
  title: string;
  artist: string;
  feat?: string;
  category: RecordAwardTypes;
  won: boolean;
  image: string;
  youtube?: string;
  spotify?: string;
}

export interface ArtistAwardNominee {
  artist: string;
  category: ArtistAwardType;
  won: boolean;
  image: string;
}
