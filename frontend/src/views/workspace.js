let m = require('mithril');
let toolbox = require('./toolbox');
let smBlockly = require('../smBlockly');
let prettyPrint = require('../../node_modules/blockly/demos/prettify.js');


let state = {
    code: '',
    updatePreview: function() {
        state.code = smBlockly.Blockly.bash.workspaceToCode(smBlockly.workspace);
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
        smBlockly.init('blocklyDiv');
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
            m(toolbox)
        ]);
    }
};
module.exports = workspace;
