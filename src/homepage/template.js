var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var request = require('superagent');
var translate = require('../translate').message;

module.exports = function(pictures){
  var elem = yo`
  <div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
          <div id="fileName" class="fileUpload btn btn-flat">
            <span>${translate('upload-picture')} <i class="fa fa-camera" aria-hidden="true"></i></span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat hide cyan">${translate('upload')}</button>
          <button id="btnCancel" type="button" class="btn btn-flat hide red" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function (pic){
          return picture(pic);
        })}
      </div>
    </div>
  </div>`;

  function onsubmit(ev) {
    ev.preventDefault();
    var data = new FormData(this);
    request
      .post('/api/pictures/')
      .send(data)
      .end(function (err, res) {
        console.log(arguments);
        toggleButtons();
        document.getElementById('formUpload').reset();
      });
  }

  function cancel() {
    toggleButtons();
    document.getElementById('formUpload').reset();
  }

  function onchange() {
    toggleButtons();
  }

  function toggleButtons() {
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
    document.getElementById('fileName').classList.toggle('hide');
  }

  return layout(elem);
}
