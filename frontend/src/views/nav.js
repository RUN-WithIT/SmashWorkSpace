let m = require('mithril');
let smBlockly = require('../smBlockly');
let button = require('../components/button');


let fileDropdownMenu = m('div', {
    class: 'dropdown-menu'
}, [
    m('a', {
        class: 'dropdown-item',
        onclick: smBlockly.saveBlocks
    }, 'Save block'),
    m('a', {
        class: 'dropdown-item',
        onclick: smBlockly.saveScripts
    }, 'save scripts'),
    m('a', {
        class: 'dropdown-item',
        onclick: smBlockly.importBlocks
    }, 'Import Blocks'),
    m('a', {
        class: 'dropdown-item',
        onclick: smBlockly.exportBlocks
    }, 'Export Blocks'),
    m('a', {
        class: 'dropdown-item',
        onclick: smBlockly.exportScripts
    }, 'Export Scripts')
]);


let nav = {
    view: function() {
        return m('nav', {
            class: 'navbar navbar-inverse bg-inverse navbar-toggleable-sm'
        }, [
            m('a', {
                class: 'navbar-brand',
                href: '/'
            }, [
                m('img', {
                    class: 'd-inline-block align-top',
                    src: 'bin/assets/logo_text.png',
                    height: '30px',
                    alt: 'Run-WithIt'
                })
            ]),
            m('div', {
                class: 'collapse navbar-collapse'
            }, [
                m('ul', {
                    class: 'navbar-nav'
                }, [
                    m('li', {
                        class: 'nav-item'
                    }, [
                        m('a', {
                            class: 'nav-link',
                            onclick: smBlockly.toggleScript.bind(smBlockly)
                        }, 'Script')
                    ]),
                    m('li', {
                        class: 'nav-item'
                    }, [
                        m('a', {
                            class: 'nav-link',
                            onclick: smBlockly.toggleConfig.bind(smBlockly)
                        }, 'Config')
                    ]),
                    m('li', {
                        class: 'nav-item dropdown'
                    }, [
                        m('a', {
                            class: 'nav-link dropdown-toggle',
                            'data-toggle': 'dropdown'
                        }, 'File'),
                        fileDropdownMenu
                    ])
                ])
            ])
        ]);
    }
};


module.exports = nav;
