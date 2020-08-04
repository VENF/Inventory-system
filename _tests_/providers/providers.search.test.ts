import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProviders } from '../../mock/Providers/providers';
//------------------Database--------------//
Setup.inicialize('searchProviders');
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
  const data = fillProviders(3);
  await request(Setup.app).post('/api/provider').send(data[1]);
  await request(Setup.app).post('/api/provider').send(data[2]);
}
//------------------Fill database--------------//

beforeAll(async () => {
  await fillDatabase();
});

const searchProvider = (endpoint: string) => {
  it(`SEARCH all providers ${endpoint}`, async (done) => {
    const total = await request(Setup.app).get(endpoint);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------GET tests--------------//
searchProvider('/api/provider');
