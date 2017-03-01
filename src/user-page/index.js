import page from 'page'
import template from './template'
import header from '../header'
import loader from '../loader'

page('/:username', header, loading, loadUser, function (ctx, next) {
  $('title').html(`Emagram - ${ctx.params.username}`);
  var main = $('#main-container');
  main.empty().append(template(ctx.user));
});

page('/:username/:id', header, function (ctx, next) {
  $('title').html(`Emagram - ${ctx.params.username}`);
  var main = $('#main-container');
  $(`#modal${ctx.params.id}`).openModal({
    complete: function () {
      page(`/${ctx.params.username}`);
      main.empty().append(template(ctx.user));
    }
  });

});

function loading (ctx, next) {
  var main = $('#main-container');
  var elem = loader;
  main.empty().append(elem);
  next();
}

async function loadUser(ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  } catch (err) {
    console.log(err);
  }
}
