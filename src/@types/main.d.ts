//declaration all types

//-------------type for product object ---------//
type TProduct = {
  code: string;
  type: string;
  size: string;
  price: number;
  brand: string;
  quantity: number;
  date: Date;
  dateFormat: string;
  provider: any; //Schema.Types.ObjectId
};
//-------------type for product object ---------//

//-------------type for sales object ---------//
type TSales = {
  DNI: string;
  name: string;
  lastName: string;
  list: Array<TListProduct>;////Schema.Types.ObjectId products
  total: number;
  date: Date;
  dateFormat: string;
}
//-------------type for sales object ---------//

//-------------type for sales object Product Array---------//
type TListProduct = {
  code: string;
  cnt: number;
  type: string;
  brand: string;
  price: number;
  size: string;
}
//-------------type for sales object Product Array---------//
