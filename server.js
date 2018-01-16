
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const server = express();
const STATUS_USER_ERROR = 422;

server.use(bodyParser());
server.use(
    session({
        secret: 'grizzlybear',
        resave: false, 
        saveUninitialized: true
    })
);

server.get('/', (req, res) => {
    console.log(req.session);
    res.send('Hello World');
});

server.listen(3000, () => {
    console.log('Listening to 3000');
});