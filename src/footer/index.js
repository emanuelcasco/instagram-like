var yo = require('yo-yo');
var translate = require('../translate');

var el = yo`
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 center-align">
        <a class='dropdown-button btn btn-flat' href='#' data-activates='dropdown1'>
          ${translate.message('language')}
        </a>
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#" onclick=${changeLang.bind(null,'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${changeLang.bind(null,'en-US')}>${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 center-align">© 2017 - Emanuel Casco</div>
    </div>
  </div>
</footer>`;

function changeLang(locale){
  localStorage.locale = locale;
  location.reload();
  return false;
}

document.body.appendChild(el);
