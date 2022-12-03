export interface NavigationListTypes {
  text: string;
  to: string;
}

export interface NumericListTypes {
  id: string;
  img: string;
  title: string;
  amount: number;
}

export interface CeramicsListTypes {
  id?: string;
  title: string;
  description: string[];
  icn: string;
}

export interface VideosListTypes {
  id: string;
  title: string;
  video: string;
}

export interface ContactsListTypes {
  id: string;
  address: string;
  phone: string;
  email: string;
  map: string;
}
