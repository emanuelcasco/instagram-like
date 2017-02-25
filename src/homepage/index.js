var page = require('page');
var template = require('./template');

page('/homepage', function (ctx, next) {
  $('title').html('Emagram - Inicio');
  var main = $('#main-container');
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
      createdAt: new Date('2017-02-24T23:12:00Z')
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
    }
  ];
  main.empty().append(template(pictures));

})
