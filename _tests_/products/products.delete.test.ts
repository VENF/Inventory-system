import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProducts, code } from '../../mock/Products/Products';
//------------------Database--------------//
Setup.inicialize('deleteProducts');
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
  const data = fillProducts(3);
  await request(Setup.app).post('/api/products').send(data[1]);
  await request(Setup.app).post('/api/products').send(data[2]);
}
//------------------Fill database--------------//

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
    await fillDatabase();
    const products = await request(Setup.app).get('/api/products/');
    code.push(products.body[0].code);//code of product for search
});

const deleteProducts = (endpoint: string) => {
    it(`DELETE Products${endpoint}`, async (done) => {
      const total = await request(Setup.app).delete(`${endpoint}${code}`);
      expect(total.status).toBe(200);
      done();
    });
  };
  
//------------------Delete tests--------------//
deleteProducts(`/api/products/`);
  