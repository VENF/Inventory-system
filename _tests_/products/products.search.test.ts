import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProducts } from '../../mock/Products/Products';
//------------------Database--------------//
Setup.inicialize('searchProducts');
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
    await request(Setup.app).post('/api/provider').send({
        name: `name1`,
        lastName: `lastName1`,
        address: `address1`,
        phone: `04121`,
        date: `2/06/20201`,
        company: `sport team`,
        slug: `sport-team`
    });
  await fillDatabase();
});

const searchProducts = (endpoint: string) => {
  it(`SEARCH [All | ONE] Products ${endpoint}`, async (done) => {
    const total = await request(Setup.app).get(endpoint);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------GET tests--------------//
searchProducts('/api/products');
//searchProducts('/api/products/brand/nike1');
//searchProducts('/api/products/provider/nike');
