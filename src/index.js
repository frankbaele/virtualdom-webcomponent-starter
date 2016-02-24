require('webcomponents.js');
require('./components/components')();
var vDom = require('virtual-dom');

var appVhtml = vDom.h('alert-button', 'test');

window.addEventListener('WebComponentsReady', function(e) {
    // imports are loaded and elements have been registered

    var appHtml = vDom.create(appVhtml);
    var app = document.getElementById('app');
    app.appendChild(appHtml);

});