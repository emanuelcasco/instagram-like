var yo = require('yo-yo');
var translate = require('../translate').message;


module.exports = function layout(content) {
  return yo`<div>
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="#" class="brand-logo emagram">Emagram</a>
            </div>
            <div class="col s2 m6 push-s10 push-m10 hide-on-large-only">
              <a class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <ul id="drop-user" class="dropdown-content" data-beloworigin="true">
                <li><a href="#!">${translate('my-profile')}</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="/signup">${translate('logout')}</a></li>
              </ul>
            </div>
            <div class="col s2 m6 push-s10 push-m10 hide-on-med-and-down">
              <ul>
                <li><a href="#!">${translate('my-profile')}</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="/signup">${translate('logout')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      ${content}
    </div>`;
}
