require('webcomponents.js/webcomponents-lite');
require('html5-history-api');
var h = require('virtual-dom/h');
var mediator = require('mediatorjs');
var mInstance = new mediator.Mediator();
require('./components/components')(mInstance);
mInstance.on('test', function(message){
   console.log(message)
});

var xtend = require('xtend');
var main = require('main-loop');
var state = {path: location.pathname};
var router = require('./router.js')();
var loop = main(state, render, require('virtual-dom'));
function render(state) {
    var m = router.match(state.path);
    if (!m) return h('div.error', 'not found');
    else return m.fn(xtend(m, {state: state}))
}

document.addEventListener("DOMContentLoaded", function () {
    var target = document.querySelector('#content');
    target.parentNode.replaceChild(loop.target, target);

    var show = require('single-page')(function (href) {
        loop.update(xtend({path: href}))
    });

    require('catch-links')(window, show);
});
