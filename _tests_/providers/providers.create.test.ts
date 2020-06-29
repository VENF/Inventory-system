import { agent as request } from 'supertest';
import Setup from '../../src/stup-test/test-setup';
import { fillProviders } from '../../mock/Providers/providers';
//------------------Database--------------//
Setup.inicialize('postProvider');
//------------------Database--------------//

//------------Moks clients----------------//
let providers: Array<object> = [];
providers = fillProviders(1);
//------------Moks clients----------------//

const PostEndpoint = (endpoint: string, data: any) => {
  it(`[POST] Should create provider ${endpoint}`, async (done) => {
    const response = await request(Setup.app).post(endpoint).send(data);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: 'operation successfully' });
    done();
  });
};

//------------------POST tests--------------//
providers.forEach((element) => {
  PostEndpoint('/api/provider', element);
});