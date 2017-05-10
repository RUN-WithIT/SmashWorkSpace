
let m = require('mithril');
let workSpace = require('./views/workspace');
let nav = require('./views/nav');

let App = {
    view: function() {
        return m('div', {
            class: 'app-container'
        }, [
            m(nav),
            m('div', {
                class: 'container-fluid workspace-container'
            }, [
                m(workSpace)
            ])
        ]);
    }
};


m.route(document.body, '/', {
    '/': App
});
