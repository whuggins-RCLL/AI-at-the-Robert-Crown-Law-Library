export interface Book {
  title: string;
  author: string;
  publisher?: string;
  date?: string;
  link?: string;
  isbn?: string;
  description?: string;
  customCoverUrl?: string;
}

export interface ExhibitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[]; // Bullet points of content
  posterUrl: string; // Main display image
  gallery?: string[]; // Additional images for the modal
  galleryLayout?: 'carousel' | 'vertical'; // Layout mode for the gallery
  contentImage?: string; // Optional large image to display in the content area (right side)
  videoUrl?: string; // Optional embed URL for video content
  books?: Book[]; // Optional list of display books
  icon: string;
  links?: { title: string; url: string }[]; // Optional list of external links
}

export interface ExhibitCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  items: ExhibitItem[];
  link?: { title: string; url: string };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}