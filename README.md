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
