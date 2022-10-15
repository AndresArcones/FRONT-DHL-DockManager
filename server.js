let express = require('express');

const BUILD_DIR = `${__dirname}/dist/frontend`
const PORT = process.env.PORT || 8080

let app = express();

app.use(express.static(BUILD_DIR));

app.get("/*", (req, resp)=>{
    resp.sendFile(`${BUILD_DIR}/index.html`)
});


app.listen(PORT);

console.log(`Server running in port: '${PORT}'`)