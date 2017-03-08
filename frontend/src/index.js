require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/blockly/demos/prettify.css');
require('./style/custom.css');


let m = require('mithril');
let workSpace = require('./views/workspace');
let nav = require('./views/nav');

let App = {
    view: function() {
        return m('div', {
            style: 'height:93%'
        }, [
            m(nav),
            m('div', {
                class: 'container-fluid',
                style: 'height:99%;'
            }, [
                m(workSpace)
            ])
        ]);
    }
};


m.route(document.body, '/', {
    '/': App
});
