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
        prettyPrint();
    },
    view: function() {
        return m('pre', {
            id: 'previewDiv',
            class: 'prettyprint',
        }, state.code);
    }
}


let workspace = {
    oncreate: function(vnode) {
        smBlockly.init('blocklyDiv');
        smBlockly.workspace.addChangeListener(state.updatePreview);
    },
    view: function() {
        return m('div', {
            id: 'blocklyArea',
            class: 'row',
            style: 'height:100%'
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
