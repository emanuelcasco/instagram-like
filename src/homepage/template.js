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
        <span id="successUpload" class="hide green">¡La foto se ha Subido!</span>
        <form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
          <div id="fileName" class="fileUpload btn btn-flat">
            <span>${translate('upload-picture')} <i class="fa fa-camera" aria-hidden="true"></i></span>
            <input name="picture" id="file" type="file" class="upload" onchange=${onchange} />
          </div>
          <button id="btnUpload" type="submit" class="btn btn-flat hide green">${translate('upload')}</button>
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
<<<<<<< HEAD
  
  return layout(template);
=======

  function onsubmit(ev) {
    ev.preventDefault();
    var data = new FormData(this);
    request
      .post('/api/pictures/')
      .send(data)
      .end(function (err, res) {
        console.log(arguments);
        toggleButtons();
        successUpload();
    });
  }

  function onchange() {
    toggleButtons();
  }

  function cancel() {
    toggleButtons();
    document.getElementById('formUpload').reset();
  }

  function toggleButtons() {
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function successUpload() {
    Materialize.toast(translate('upload-success'), 10000)
  }

  return layout(elem);
>>>>>>> a1d1df57684307bb9249aa30eebfbc141593fb46
}
