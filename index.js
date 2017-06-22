var fs = require('fs'),obj;
var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var session = require('express-session');
fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    //obj = data;
   console.log (typeof (obj));
});
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    secret: 'daylasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:1000*60*60}
}));
app.use(express.static('public'));
app.listen(3000, () => console.log('server start'));
app.get('/', (req, res) => {return (
                                res.render('home')
                            )});

app.get('/getdata',(req,res)=> res.send(obj));
app.post('/axios', jsonParser,(req,res) =>{
    res.send(req.body);
});

app.post('/signIn',jsonParser,(req,res)=>{
    var {username,password} = req.body;
    if(username === 'quoctho' && password ==='123'){
        req.session.username = username;
        return res.send('DANG_NHAP_THANH_CONG');
    }
    res.send('DANG_NHAP_THAT_BAI');
});

app.get('/getInfo',(req,res)=>{
    if(req.session.username){
       return res.send(req.session.username);
    }
    res.send('CHUA_DANG_NHAP');
});

app.get('/logout',(req,res) => {
    req.session.username = undefined;
    res.send('DA_DANG_XUAT');
})