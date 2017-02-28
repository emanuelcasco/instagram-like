import page from 'page'
import template from './template'
import header from '../header'

page('/:username', loadUser, header, function (ctx, next) {
  $('title').html(`Emagram - ${ctx.params.username}`);
  var main = $('#main-container');
  main.empty().append(template(ctx.user));
});

async function loadUser(ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  } catch (err) {
    console.log(err);
  }
}
