export interface sharedUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface sharedCard {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  imageSource: string;
}

export interface folderCategory {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
}

export interface Link {
  count: number;
}

export interface folderCard {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface folderUser {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
