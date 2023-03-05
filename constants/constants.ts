export type authActionType = {
  type: string;
  payload?: string | {};
};

export interface intrfcUser {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  creationTime: string;
  lastSignInTime: string;
  isAdmin: boolean;
  isActive: boolean;
}

export interface intrfcLaptop {
  id?: string;
  bateryCapacity: number;
  brand: string;
  colours: string;
  description: string;
  dimensions: string;
  hardDisk: string;
  image: string;
  model: string;
  modelNumber: string;
  name: string;
  numberOfUSBPorts: number;
  os: string;
  price: number;
  processor: string;
  ram: number;
  releaseDate: string;
  resolution: string;
  series: string;
  size: string;
  ssd: number;
  weight: number;
  wifi: string;
}

export interface intrfcMobile {
  id?: string;
  displaySize: string;
  frontCamera: string;
  imgsrc: string;
  modal: string;
  price: number;
  processor: string;
  rearCamera: string;
  related: string;
  related2: string;
  releaseDate: string;
}

export interface intrfcTv {
  id?: string;
  displaySize: string;
  displayType: string;
  imgsrc: string;
  modal: string;
  os: string;
  price: number;
  related: string;
  resolutionStandard: string;
}

export type newsBlogObj = {
  banner: string;
  description: string;
  id: string;
  title: string;
};

export type newsBlogIndex = {
  newsData: newsBlogObj[];
};
export type newsBlogId = {
  newsData: newsBlogObj;
};

export interface intrfcToastMsg {
  title: string;
  desc?: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

export interface filterProps {
  price: String;
  brand: String;
  screen: String;
  rcam: String;
  fcam: String;
  ram: String;
}
export interface lap_filterProps {
  price: String;
  brand: String;
  screen: String;
  os: String;
}

export interface cartItemsProps {
  id: string;
  displayType?: string;
  resolutionStandard?: string;
  displaySize?: string;
  frontCamera?: string;
  imgsrc?: string;
  modal?: string;
  rearCamera?: string;
  related?: string;
  related2?: string;
  bateryCapacity?: number;
  brand?: string;
  colours?: string;
  description?: string;
  dimensions?: string;
  hardDisk?: string;
  image?: string;
  model?: string;
  modelNumber?: string;
  name?: string;
  numberOfUSBPorts?: number;
  os?: string;
  price: number;
  processor?: string;
  ram?: number;
  releaseDate?: string;
  resolution?: string;
  series?: string;
  size?: string;
  ssd?: number;
  weight?: number;
  wifi?: string;
  quantity: number;
}
