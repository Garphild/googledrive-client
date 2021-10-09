const downloadFileById = require('./downloadFileById');
const getDrive = require('./getDrive');

async function googleApi(authFile) {
  const drive = await getDrive(authFile);
  return {
    downloadFileById: (id, path) => downloadFileById(id, path, drive),
  };
}

module.exports = googleApi;
