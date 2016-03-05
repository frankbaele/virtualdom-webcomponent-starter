var vdom = require('virtual-dom');
var Polymer = require('polymer-js');
module.exports = function(){
    // register an element
    var tree = vdom.h('div', function(){

    });
    Polymer({
        listeners: {
            'dataUpdate': 'dataUpdate'
        },
        is: 'alert-button',

        // See below for lifecycle callbacks
        created: function() {
            this.textContent = 'My element!';
        },
        dataUpdate:function(data){
            this.textContent = data;
        }
    });

};