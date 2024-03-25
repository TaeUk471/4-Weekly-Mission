export interface sharedUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface sharedCard {
  folder: Folder;
}

export interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
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
  data: any;
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
