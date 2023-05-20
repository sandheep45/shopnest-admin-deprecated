export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type Image = {
  url: string;
  alt: string;
  height: number;
  width: number;
};

export type Quantity = {
  onSelf: number;
  inWareHouse: number;
};

export type Media = {
  id: string;
  image: Image[];
};

export type MetaData = {
  id: string;
  title: string;
  description: string;
  keywords: string[];

  categoryId?: string;
  Category?: Category;

  productId?: string;
  Product?: TProduct;
};

export type Variant = {
  id: string;
  name: string;
  description: string;
  image: Image;
  price: number;
  sku: string;
  barcode: string;
  quantity: Quantity;
  createdAt?: Date;
  updatedAt?: Date;

  productId?: string;
  product?: TProduct;
};

export type TProduct = {
  id: string;
  name: string;
  image: Image;
  description: string;
  tags: string;
  status: "PUBLISHED" | "DRAFT" | "INACTIVE" | "SCHEDULED";
  price: number;
  createdAt: Date;
  updatedAt: Date;

  Variant: Variant[];
  MetaData: MetaData[];
  CustomerReview: CustomerReview[];

  categoryId: string;
  Category: Category;
};

export type CustomerReview = {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;

  userId?: string;
  customer?: User;

  productId?: string;
  product?: TProduct;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  status?: "PUBLISHED" | "DRAFT" | "INACTIVE" | "SCHEDULED";
  image: Image;
  createdAt?: Date;
  updatedAt: Date;

  Product?: TProduct[];
  MetaData?: MetaData[];
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
  user: User;
};

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: User;
};

export type User = {
  id: string;
  name?: string;
  email?: string;
  username?: string;
  emailVerified?: Date;
  role: Role;
  image?: string;
  accounts?: Account[];
  sessions?: Session[];
  CustomerReview?: CustomerReview[];
};

export type VerificationToken = {
  id: string;
  identifier: string;
  token: string;
  expires: Date;
};
