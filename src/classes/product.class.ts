import Products from '../products/model/products.model';
import Provider from '../ providers/model/provider.model';
import { formatDate } from '../helpers/formatDate';
import { slugify } from '../helpers/slugify';
import { v4 } from 'uuid';

export class Product implements ICProduct {
  //create product
  async verifyExistProduct(product: TProduct): Promise<boolean> {
    let flag: boolean;

    const exist = await Products.findOne({
      type: product.type,
      size: product.size,
      price: product.price,
      provider: product.provider
    });
    exist === null ? (flag = true) : (flag = false);
    return flag;
  }
  async create(data: TProduct): Promise<any> {
    const code = v4().split('-');
    data.code = code[0]; //code assignment for the product
    const slug = slugify(data.provider); //slug for search provider
    const provider = await Provider.findOne({ slug: slug });
    if (provider != null) {
      data.provider = provider._id;
      const product = new Products(data);
      product.dateFormat = formatDate(product.date);
      const verifyExist = await this.verifyExistProduct(product); //we check if there is an equal product
      if (verifyExist) {
        return product;
      } else {
        return null;
      }
    } else {
      return false;
    }
  }
  //create product

  async searchAll(): Promise<Array<object>>{

    const products = await Products.find({}, { __v: 0, _id: 0, date: 0 });
    const result = await Provider.populate(products, { path: 'provider' })
    return result;

  }

  async searchAllWithparams(field: string, value: string): Promise<Array<object>>{
    if(field === 'provider'){
      const slug = slugify(value)
      const provider = await Provider.findOne({ slug: slug });
      if(provider != null){

        const products = await Products.find({ [`${field}`]: provider._id }, {  __v: 0, _id: 0, date: 0 });
        const result = await Provider.populate(products, { path: 'provider' })
        return result;

      }else{
        return []
      }
    }else{
      const products = await Products.find({ [`${field}`]: value }, {  __v: 0, _id: 0, date: 0 });
      const result = await Provider.populate(products, { path: 'provider' })
      return result;
    }
  }
  async deleteProduct(code: string): Promise<any>{
    const result = await Products.findOneAndRemove({ code: code });
    return result;
  }
}
