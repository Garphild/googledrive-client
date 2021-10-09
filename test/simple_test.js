const regeneratorRuntime = require('regenerator-runtime');
const path = require('path');
const googleApi = require('../src/index');

describe('simple', () => {
  it('should be sane', () => {
    expect(false).not.toBe(true);
  });
  it('test 1', async () => {
    const { downloadFileById } = await googleApi(path.join(__dirname, 'jwt.keys.json'));
    const resp = await downloadFileById('15j2wx4QHnLTKMVJnwsxjSm-z7uPP2lfN', './tmp/main.jpg');
    expect(resp.status).toBe('success');
  });
  it('test 2', () => {
    expect.assertions(1);
    return googleApi(path.join(__dirname, 'jwt.keys.json'))
      .then((myApi) => {
        const resp = myApi.downloadFileById('15j2wx4QHnLTKMVJnwsxjSm-z7uPP2lfN', './tmp/main2.jpg');
        return resp;
      })
      .then((resp) => {
        expect(resp.status).toBe('success');
      });
  });
});
