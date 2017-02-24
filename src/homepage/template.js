var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

module.exports = function(pictures){
  var template = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic){
          return picture(pic);
          console.log("1");
        })}
      </div>
    </div>
  </div>`;
  return layout(template);
}
