

const PORT = process.env.PORT || 3040;
const app = require('./server');
//const seed = require('../script/seed');

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))