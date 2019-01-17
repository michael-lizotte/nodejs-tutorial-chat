const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const options = {
    extensions : ['html', 'htm']
}

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath, options));

app.listen(port, () => console.log(`Server listening on port ${port}`));
