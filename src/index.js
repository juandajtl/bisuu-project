import express from 'express';
import engine from 'ejs-mate';
import path  from 'path';

const app = express();

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4002);

//starting the server
app.listen(app.get('port'),() => {
console.log('server Running', app.get('port'));
});