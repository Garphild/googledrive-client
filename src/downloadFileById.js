const fs = require('fs');

async function downloadFileById(id, path, drive) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('ID is required'));
    }

    const fileName = path || '/tmp/photo.jpg';
    resolve(drive.files
      .get({
        fileId: id,
        alt: 'media',
      }, { responseType: 'stream' })
      .then((res) => new Promise((driveResolve, driveReject) => {
        const filePath = fileName;
        const dest = fs.createWriteStream(filePath);
        let progress = 0;

        res.data
          .on('end', () => {
            driveResolve({
              status: 'success',
              filePath,
            });
          })
          .on('error', (err) => {
            driveReject(err);
          })
          .on('data', (d) => {
            progress += d.length;
            if (process.stdout.isTTY) {
              process.stdout.clearLine();
              process.stdout.cursorTo(0);
              process.stdout.write(`Downloaded ${progress} bytes`);
            }
          })
          .pipe(dest);
      }))
      .catch((err) => reject(err)));
  });
}

module.exports = downloadFileById;
