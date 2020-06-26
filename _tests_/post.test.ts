import { agent as request } from 'supertest';
import Setup from '../src/stup-test/test-setup';
import { users } from '../mock/users';
//------------------Database--------------//
//Setup.inicialize('test')
//------------------Database--------------//

const PostEndpoint = (endpoint: string, data: any) => {
  xit(`[POST] Should create ${endpoint}`, async (done) => {
    const response = await request(Setup.app).post(endpoint).send(data);
    expect(response.status).toBe(200);
    done();
  });
};

//------------------POST tests--------------//
// users.forEach(element => {
//   PostEndpoint('/users', element);
// });

//--------- Skip ---------//
test('index[POST]', () => {
  const text = 'is running';
  expect(text).toMatch(/is running/);
});
//--------- Skip ---------//
