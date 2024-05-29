export interface photoInterface {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface user {
  id: number;
  name: string;
  email: string;
}

export interface album {
  id: number;
  title: string;
  userId: number;
}

export interface userPropType {
  user: user;
  numberOfAlbums: album[];
}
