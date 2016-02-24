var alertButtonPrototype = Object.create(HTMLButtonElement.prototype);
alertButtonPrototype.createdCallback = function() {
    this.textContent = "I'm an x-foo button!";
};

var alertButton = document.registerElement('alert-button', {
    prototype: alertButtonPrototype
});