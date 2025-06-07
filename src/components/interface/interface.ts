export interface ClassName {
  className: string;
}
export interface Fill {
  fill: string;
}
export interface OnClick {
  onClick: (event: React.MouseEvent<MouseEvent>) => void;
}
export interface IconsProps {
  fill?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

export type AlbumType = {
  id: string;
  albumtitle: string;
  mix: string;
  track: TrackType[];
  poster_url: string;
  format: string;
  listened: number;
  liked: boolean;
  number_of_track: number;
};

export type TrackType = {
  id: string;
  trackNumber: number;
  title: string;
  duration: number;
  track_url: string;
};

export type PlayListAlbumType =  {watched: number};
