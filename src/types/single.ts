export interface Single {
  id: number;
  title: string;
  slug: string;
  releaseDate: string;
  artwork: string;
  description: string;
  lyrics: string;
  videoUrl?: string;
  events: Event[];
  merchandise: Merchandise[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
}

export interface Merchandise {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}