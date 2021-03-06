let m = require('mithril');
let toolbox = require('./toolbox');
let smBlockly = require('../smBlockly');
let prettyPrint = require('../../node_modules/blockly/demos/prettify.js');


let state = {
    code: '',
    updatePreview: function() {
        state.code = smBlockly.getCode();
        m.redraw();
    }
}

let preview = {
    onupdate: function(vnode) {
        vnode.dom.classList.remove('prettyprinted');
        while (vnode.dom.firstChild) {
            vnode.dom.removeChild(vnode.dom.firstChild);
        }
        vnode.dom.innerText = state.code;
        prettyPrint();
    },
    view: function() {
        return m('pre', {
            id: 'previewDiv',
            class: 'prettyprint',
        });
    }
}


let workspace = {
    oncreate: function(vnode) {
        smBlockly.init();
        smBlockly.workspace.addChangeListener(state.updatePreview);
    },
    onupdate: function(vnode) {
        smBlockly.workspace.addChangeListener(state.updatePreview);
    },
    view: function() {
        return m('div', {
            class: 'row blockly-area',
        }, [m('div', {
                id: 'blocklyDiv',
                class: 'col-8'
            }),
            m('div', {
                class: 'col'
            }, [m(preview)]),
            m(toolbox.scriptToolbox),
            m(toolbox.configToolbox)
        ]);
    }
};
module.exports = workspace;
