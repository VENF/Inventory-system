//declaration all interfaces

//--------------Primary interfaces ------------//
interface IServer {
  settings(): void;
  middlewares(): void;
  routes(): void;
  listen(): void;
  testing(): any; //Application;
}
interface ISetupTest {
  server: IServer;
  app: any; //Application;
  database(databaseName: string): void;
  removeAllCollections(): void;
  dropAllCollections(): void;
  inicialize(dbName: string): void;
}

interface ISettignsData {
  uri: string;
  options: any; //ConnectionOptions in mongoose;
}

interface IConfig {
  MONGODB_URI: string;
}
//--------------Primary interfaces ------------//

//--------------- Crud Interfaces-------------//
interface ICrud {
  create(data: object): any;
  searchAll(): Promise<Array<object>>;
  searchOne(field: string, data: string | number): Promise<object | null>;
  deleteResource(field: string, data: string | number): Promise<object | null>;
  updateResource(body: object, field: string, data: string | number): Promise<any>;
}
//--------------- Crud Interfaces-------------//

//--------------- Crud Product-------------//
interface ICProduct {
  //Interface Crud Product
  create(data: object): Promise<any>; //return to document
  verifyExistProduct(product: TProduct): Promise<boolean>;
  searchAll(): Promise<Array<object>>;
  searchAllWithparams(field: string, value: string): Promise<Array<object>>;
  deleteProduct(code: string): Promise<any>;
}
//--------------- Crud Product-------------//
