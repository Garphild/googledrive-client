const { google } = require('googleapis');

async function getDrive(authFile) {
  const auth = new google.auth.GoogleAuth({
    keyFile: authFile,
    scopes: 'https://www.googleapis.com/auth/drive.readonly',
  });
  const client = await auth.getClient();
  const drive = await google.drive({
    version: 'v3',
    auth: client,
  });
  return drive;
}

module.exports = getDrive;
