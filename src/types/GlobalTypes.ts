export type ConcatinatedClassesType = string;

export type MappedArrayType = JSX.Element[];

export type ClickHandlerType = () => void;

export interface CeramicsListTypes {
  id?: string;
  title: string;
  description: string[];
  icn: string;
}

export interface TabListTypes {
  id: string;
  title: string;
  img: string;
  gallery: string[];
  subtitle?: string;
  description: string;
  additionalInfo?: JSX.Element;
}

export type ImagesGalleryTypes = {
  original: string;
  thumbnail: string;
}[];
