import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillClients } from '../../mock/clients/clients.mock';
//------------------Database--------------//
Setup.inicialize('postClient')
//------------------Database--------------//


//------------Moks clients----------------//
let clients: Array<object> = [];
  clients = fillClients(1);
//------------Moks clients----------------//

const PostEndpoint = (endpoint: string, data: any) => {
  it(`[POST] Should create ${endpoint}`, async (done) => {
    const response = await request(Setup.app).post(endpoint).send(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: 'operation successfully' })
    done();
  });
};

//------------------POST tests--------------//
clients.forEach(element => {
  PostEndpoint('/api/client', element)
});