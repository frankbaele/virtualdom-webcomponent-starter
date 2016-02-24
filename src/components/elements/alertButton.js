

module.exports = function(mediator){
    var alertButtonPrototype = Object.create(HTMLButtonElement.prototype);
    var vDom = require('virtual-dom');
    alertButtonPrototype.createdCallback = function() {
        this.textContent = "I'm an x-foo button!";

    };
    alertButtonPrototype.attachedCallback = function(){
        mediator.trigger('test', 'testcontent');
        this.appendChild(vDom.create(vDom.h('button',this.getAttribute('data-button-title'))));
    };

    var alertButton = document.registerElement('alert-button', {
        prototype: alertButtonPrototype
    });
};