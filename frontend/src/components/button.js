let m = require('mithril');

let button = {
    view: function(vnode) {
        return m('button', {
            id: vnode.attrs.id,
            class: 'btn btn-primary btn-sm',
            style: 'margin:5px',
            type: 'button',
            onclick: vnode.attrs.onclick

        }, vnode.attrs.text)
    }
}


module.exports = button;
