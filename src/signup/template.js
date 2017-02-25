var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate').message;

var signupBox = yo`
<div class="col s12 m7 center-align">
  <div class="row">
    <div>
      <h1 class="emagram">Emagram</h1>
      <form class="signup-form">
        <h2>${translate('signup.subheading')}</h2>
        <div class="section">
          <a class="waves-effect btn btn-fb">${translate('signin.facebook')}<i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="${translate('email')}" />
          <input type="text" name="name" placeholder="${translate('fullname')}" />
          <input type="text" name="username" placeholder="${translate('username')}" />
          <input type="password" name="password" placeholder="${translate('password')}" />
          <button class="btn waves-effect btn-blue" type="submit">${translate('signup.action')}</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="box">
      ${translate('signup.account')} <a href="/signin">${translate('signin')}</a>
    </div>
  </div>
</div>`

module.exports = landing(signupBox);
