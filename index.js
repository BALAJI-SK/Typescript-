import  express from('express');
const app = express();
const routes = require('./src/routers/user');
app.use(express.json());
app.use('/', routes);
app.listen(3000, () => {
});