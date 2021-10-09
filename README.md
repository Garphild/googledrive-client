# Usage
## Init
```js
const { downloadFileById } = await googleApi(path.join(__dirname, 'jwt.keys.json'));
```
## Download file from google drive
```js
const result = await downloadFileById("XXXX-YYY", "./tmp/tmp.jpg");
/**
 * {
 *   status: "success" | "fail",
 *   message: <string> - error message
 *   err: error object
 *   filePath: <string> - path to file
 * }
 */
```

Promise-based:
```js
googleApi(path.join(__dirname, 'jwt.keys.json'))
  .then((myApi) => {
    const resp = myApi.downloadFileById('15j2wx4QHnLTKMVJnwsxjSm-z7uPP2lfN', './tmp/main2.jpg');
    return resp;
  })
  .then((resp) => {
    ...
    /**
     * {
     *   status: "success" | "fail",
     *   message: <string> - error message
     *   err: error object
     *   filePath: <string> - path to file
     * }
     */
  })
  .catch((e) => {
    ...
  });
```
