import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProviders, providerUpdate } from '../../mock/Providers/providers';
//------------------Database--------------//
Setup.inicialize('updateProvider');
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
  const data = fillProviders(3);
  await request(Setup.app).post('/api/provider').send(data[1]);
}
//------------------Fill database--------------//

beforeAll(async () => {
  await fillDatabase();
});

const updateProvider = (endpoint: string, data: object) => {
  it(`UPDATE PROVIDER${endpoint}`, async (done) => {
    const total = await request(Setup.app).put(endpoint).send(data);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------ Update tests--------------//
updateProvider('/api/provider/nike 1', providerUpdate[0]);
