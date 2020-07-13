import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProducts } from '../../mock/Products/Products';
//------------------Database--------------//
Setup.inicialize('postProducts');
//------------------Database--------------//

//------------Moks clients----------------//
let Products: Array<object> = [];
Products = fillProducts(1);
//------------Moks clients----------------//

beforeAll(async () => {
  await request(Setup.app).post('/api/provider').send({
    name: `name`,
    lastName: `lastName`,
    address: `address`,
    phone: `0412`,
    date: `2/06/2020`,
    company: `nike`,
    slug: `nike`
  });
});

const PostEndpoint = (endpoint: string, data: any) => {
  it(`[POST] Should create Product ${endpoint}`, async (done) => {
    const response = await request(Setup.app).post(endpoint).send(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      msg: 'This product has been aggregated successfully'
    });
    done();
  });
};

//------------------POST tests--------------//
Products.forEach((element) => {
  PostEndpoint('/api/products', element);
});
