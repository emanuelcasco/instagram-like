var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get(['/'], function(req, res) {
  res.render('index');
});

app.get(['/signup'], function(req, res) {
  res.render('index');
});

app.get(['/signin'], function(req, res) {
  res.render('index');
});

app.get(['/api/pictures'], function(req, res) {
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
      createdAt: new Date()
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
      createdAt: new Date()
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
      createdAt: new Date()
    }
  ];
  setTimeout(function () {
    res.send(pictures);
  }, 2000);
});

app.listen(3000, function (err) {
    if(err) return console.log('Hubo un error'), process.exit(1);

    console.log("Escuchando en el puerto 3000");
});
