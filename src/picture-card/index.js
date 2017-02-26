var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function pictureCard(pic) {
  var elem;
  function render(picture) {
    return yo`
    <div class="card ${ picture.liked ? 'liked' : '' }">
        <div class="card-image waves-effect waves-block waves-light" onclick=${like}>
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/users/${picture.user.username}" class="card-title">
            <img src="${picture.user.avatar}" class="avatar"/>
            <span class="username">${picture.user.name}</span>
          </a>
          <small class="right time">${translate.date.format(picture.createdAt)}</small>
          <p class=" valign-wrapper">
            <a class="left" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <a class="left" href="#" onclick=${like}><i class="fa fa-heart" aria-hidden="true"></i></a>
            <span class="left likes">${translate.message('likes', {likes: picture.likes})}</span>
          </p>
        </div>
      </div>`;
  }

  function like(){
    pic.likes += pic.liked ? -1 : 1;
    pic.liked = !pic.liked ;
    var newElem = render(pic);
    yo.update(elem, newElem);
    return false;
  }

  elem = render(pic);

  return elem;
}
