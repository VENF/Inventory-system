import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillClients } from '../../mock/clients/clients.mock';
//------------------Database--------------//
Setup.inicialize('deleteClient')
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase() {
    const data = fillClients(3)
    await request(Setup.app).post('/api/client').send(data[1]);
    await request(Setup.app).post('/api/client').send(data[2]);
}
//------------------Fill database--------------//

beforeAll(async () => {
    await fillDatabase();
})

const deleteClient = (endpoint: string) => {
  it(`SEARCH CLIENTS${endpoint}`, async (done) => {
    const total = await request(Setup.app).delete(endpoint);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------GET tests--------------//
deleteClient('/api/client/1')
