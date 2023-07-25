export interface INavItem {
  title: string;
  thumb: string;
  link?: string;
  children?: INavItem[];
}

export interface IKeyVal<T> {
  [key: string]: T;
}

// Models

export interface IModel {
  id: number;
}

export interface IRow extends IModel {
  parentId: number;
  quantity: number;
  price: number;
}

export interface IArticleCategory extends IModel {
  name: string;
  description: string;
}

export interface IArticleSubcategory extends IModel {
  name: string;
  catId: number;
  category: IArticleCategory;
}

export interface IArticle extends IModel {
  name: string;
  subcatId: number;
  price: number;
  unit: string;
  active: boolean;
  subcategory: IArticleSubcategory;
}

export interface IBank extends IModel {
  name: string;
  BIC: number;
  active: boolean;
}

export interface IClient extends IModel {
  name: string;
  address: string;
  phone: string;
  contactName: string;
  contactPosition: string;
  bankId: string;
  bankAccountNum: string;
  UTR: string;
  nextCallDate: string;
  active: string;
  regionId: number;
  region: IRegion;
  bank: IBank;
}

export interface IBill extends IModel {
  clientId: number;
  contractNum: string;
  sum: number;
  remainder: number;
  description: string;
  client: IClient;
}

export interface IContract extends IModel {
  type: string;
  contractNum: string;
  clientId: number;
  sum: number;
  paid: number;
  date: string;
  termStart: string;
  termEnd: string;
  client: IClient;
  rows?: IContractRow[];
}

export interface IContractRow extends IRow {
  articleId: number;
}

export interface IInvoice extends IModel {
  invoiceNum: string;
  contractNum: string;
  clientId: number;
  paid: number;
  date: string;
  client: IClient;
  bills: IBill[];
  rows?: IInvoiceRow[];
}

export interface IInvoiceRow extends IRow {
  articleId: number;
}

export interface IPurchase extends IModel {
  number: string;
  sum: number;
  date: string;
  rows?: IPurchaseRow[];
}

export interface IPurchaseRow extends IRow {
  articleSubcategoryId: number;
}

export interface IRegion extends IModel {
  name: string;
}

export interface ISetting extends IModel {
  name: string;
  key: string;
  value: string;
}
