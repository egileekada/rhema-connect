export interface CreatePlaylistData {
  type: string,
  title: string,
  thumbnail?: string
}

export interface IPlaylistData {
  type: string,
  title: string,
  thumbnail?: string,
  items?: Array<string>
}

export interface ContentData {
  content_type: string,
  url?: string,
  youtube_url?: string,
  title?: string,
  description?: string,
  countries?: [
    string
  ],
  thumbnail?: string,
  isDraft?: boolean,
  author_name?: string,
  author_image?: string
}