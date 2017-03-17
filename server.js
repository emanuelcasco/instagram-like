var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var port = (process.env.PORT || 3000);
var upload = multer({ storage: storage }).single('picture');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Emagram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Emagram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Emagram - Signin' });
})

app.get('/api/pictures', function (req, res, next) {
  var pictures = [
    {
      user: {
        username: 'emanuelc',
        name: 'Emanuel Casco',
        avatar: 'https://static.platzi.com/media/public/uploads/Sinti%CC%81tulo-dfb74540-94b9-4955-b43d-65ebf066745e.png'
      },
      url: 'https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-9/12032183_614236032063399_3402427457964980260_n.jpg?oh=a67d5cc1d0949822166f4c4cd2344a71&oe=5942E17F',
      likes: 124,
      liked: true,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'emanuelc',
        name: 'Emanuel Casco',
        avatar: 'https://static.platzi.com/media/public/uploads/Sinti%CC%81tulo-dfb74540-94b9-4955-b43d-65ebf066745e.png'
      },
      url: 'office.jpg',
      likes: 3,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000)
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'emanuelc',
    name: 'Emanuel Casco',
    avatar: 'https://static.platzi.com/media/public/uploads/Sinti%CC%81tulo-dfb74540-94b9-4955-b43d-65ebf066745e.png',
    pictures: [
      {
        id: 1,
        src: 'https://www.w3schools.com/bootstrap/img_chania.jpg',
        likes: 3
      },
      {
        id: 2,
        src: 'https://www.w3schools.com/bootstrap/sanfran.jpg',
        likes: 1
      },
      {
        id: 3,
        src: 'https://www.w3schools.com/bootstrap/newyork.jpg',
        likes: 10
      },
      {
        id: 4,
        src: 'https://www.w3schools.com/w3images/fjords.jpg',
        likes: 0
      },
      {
        id: 5,
        src: 'https://www.w3schools.com/bootstrap/paris.jpg',
        likes: 23
      }
    ]
  }
  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Emagram - ${req.params.username}` });
})

app.get('/:username/:id', function (req, res) {
  res.render('index', { title: `Emagram - ${req.params.username}` });
})

app.listen(port, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);
  console.log(`Emagram escuchando en el puerto ${port}`);
})
