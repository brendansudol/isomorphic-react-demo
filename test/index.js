import http from 'http';
import assert from 'assert';

import '../server.js';


describe('server', () => {
  it('should return 200', done => {
    http.get('http://localhost:5000', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
