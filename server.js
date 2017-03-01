var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads');
  },
  filename: function(req, file, cb){
    cb(null, + Date.now() + '.' + ext(file.originalname));
  }
});

var upload = multer({ storage: storage }).single('picture');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/signup', function(req, res) {
  res.render('index');
});

app.get('/signin', function(req, res) {
  res.render('index');
});

app.get('/:username', function(req, res) {
  res.render('index');
});

app.get('/:username/:id', function(req, res) {
  res.redirect(`/${req.params.username}`);
});

app.get('/api/pictures', function(req, res, next) {
  var pictures = [
    {
      user: {
        username: 'hellmet',
        name: 'Emanuel Casco',
        avatar: 'http://www.templatedeck.com/demos/slick_html/img/blogger.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 4,
      liked: true,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'hellmet2',
        name: 'Guadalupe Escobar',
        avatar: 'http://materializecss.com/images/yuna.jpg'
      },
      url: 'http://materializecss.com/images/sample-1.jpg',
      likes: 7,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'hellmet2',
        name: 'Guadalupe Escobar',
        avatar: 'http://materializecss.com/images/yuna.jpg'
      },
      url: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/12032183_614236032063399_3402427457964980260_n.jpg?oh=a67d5cc1d0949822166f4c4cd2344a71&oe=5942E17F',
      likes: 40000,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];
  setTimeout(() => res.send(pictures), 2000);
});

app.get('/api/user/:username', function (req, res){
  const user = {
    username:'hellmet',
    avatar:'http://materializecss.com/images/yuna.jpg',
    pictures: [
      {id: 1, likes:10, src:'http://lorempixel.com/800/400/food/2/'},
      {id: 2, likes:100, src:'http://lorempixel.com/800/400/food/1/'},
      {id: 3, likes:1, src:'http://lorempixel.com/800/400/food/3/'},
      {id: 4, likes:0, src:'http://lorempixel.com/800/400/food/4/'}
    ]
  };
  setTimeout(() => res.send(user), 2000);
});

app.post('/api/pictures', function(req, res){
  upload(req, res, function(err) {
    if(err) return res.send(500, "Error uploading file");
    res.send('File uploaded');
  });
});

app.listen(3000, function (err) {
  if(err) return console.log('Hubo un error'), process.exit(1);
  console.log("Escuchando en el puerto 3000");
});
