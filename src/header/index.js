var yo = require('yo-yo');
var translate = require('../translate').message;

var elem = yo `
<nav class="header">
  <script>
     $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  </script>
  <div class="nav-wrapper">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 ">
          <a href="#" class="brand-logo emagram">Emagram</a>
        </div>

        <div class="col s2 m6 pull-m5 hide-on-large-only">
          <a class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
          <ul id="drop-user" class="dropdown-content" data-beloworigin="true">
            <li><a href="/">${translate('home')}</a></li>
            <li><a href="#!">${translate('my-profile')}</a></li>
            <li class="divider"></li>
            <li><a href="/signup">${translate('logout')}</a></li>
          </ul>
        </div>

        <div class="col s2 m6 l5 push-l3 hide-on-med-and-down">
          <ul>
            <li><a href="/">${translate('home')}</a></li>
            <li><a href="#!">${translate('my-profile')}</a></li>
            <li><a href="/signup">${translate('logout')}</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</nav>`

document.getElementById('header-container').appendChild(elem);
