var h = require('virtual-dom/h');
var Polymer = require('polymer-js');
module.exports = function(mediator){
    // register an element
    Polymer({

        is: 'alert-button',

        // See below for lifecycle callbacks
        created: function() {
            this.textContent = 'My element!';
        }

    });

};