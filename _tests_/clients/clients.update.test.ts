import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillClients } from '../../mock/clients/clients.mock';
import { clientUpdate } from '../../mock/clients/clients.mock'
//------------------Database--------------//
Setup.inicialize('updateClient')
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
    const data = fillClients(3)
    await request(Setup.app).post('/api/client').send(data[1]);
}
//------------------Fill database--------------//

beforeAll(async () => {
    await fillDatabase();
})

const searchClient = (endpoint: string, data: object) => {
  it(`SEARCH CLIENTS${endpoint}`, async (done) => {
    const total = await request(Setup.app)
        .put(endpoint)
        .send(data)
    expect(total.status).toBe(200);
    done();
  });
};

//------------------GET tests--------------//
searchClient('/api/client/1', clientUpdate[0])
