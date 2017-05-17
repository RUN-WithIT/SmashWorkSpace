let m = require('mithril');
let api = require('./api');

let Blockly = require('../node_modules/blockly/blockly_compressed.js');
Blockly.Msg = require('../node_modules/blockly/msg/json/en.json');
require('../node_modules/blockly/blocks_compressed.js');
require('../node_modules/blockly/bash_compressed.js');
require('../node_modules/blockly-smash/smash_compressed.js');





let smBlockly = {
    workspace: null,
    Blockly: Blockly,
    mode: 'config',
    init: function() {
        this.workspace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById(this.mode + '-toolbox')
        });
    },
    toggleScript: function() {
        console.log('toggle script');
        this.saveBlocksLocal();
        this.mode = 'script';
        this.workspace.updateToolbox(document.getElementById(this.mode + '-toolbox'));
        this.loadBlocksLocal();
    },
    toggleConfig: function() {
        console.log('toggle config');
        this.saveBlocksLocal();
        this.mode = 'config';
        this.workspace.updateToolbox(document.getElementById(this.mode + '-toolbox'));
        this.loadBlocksLocal();
    },
    getCode: function() {
        let lang;
        switch (this.mode) {
        case 'config':
            lang = 'json';
            break;
        case 'script':
            lang = 'bash';
            break;
        }
        
        return this.Blockly[lang].workspaceToCode(this.workspace);
    },
    saveBlocksLocal: function() {
        let xml = smBlockly.Blockly.Xml.workspaceToDom(smBlockly.workspace);
        xml = smBlockly.Blockly.Xml.domToText(xml);
        localStorage.setItem(this.mode, xml);
        this.workspace.clear();
    },
    loadBlocksLocal: function() {
        let xml = localStorage.getItem(this.mode);
        let dom = smBlockly.Blockly.Xml.textToDom(xml);
        smBlockly.Blockly.Xml.domToWorkspace(dom, smBlockly.workspace);
    },
    saveBlocks: function() {
        let xml = smBlockly.Blockly.Xml.workspaceToDom(smBlockly.workspace);
        xml = smBlockly.Blockly.Xml.domToText(xml);
        return api.block.post(0, xml);
    },
    saveScripts: function() {
        let script = smBlockly.getCode();

        let data = `data:text/plain;charset=utf-8,${script}`
        return api.script.post(0, data);
    },
    exportBlocks: function(e) {
        let xml = smBlockly.Blockly.Xml.workspaceToDom(smBlockly.workspace);
        xml = smBlockly.Blockly.Xml.domToText(xml)
        let data = `data:text/xml;charset=utf-8,${xml}`

        let download = document.createElement('a');
        download.href = data;
        download.download = 'blocks.xml';

        download.click();
    },
    importBlocks: function() {
        let upload = document.createElement('input');
        upload.type = 'file';
        upload.onchange = function() {
            let file = upload.files[0];
            let reader = new FileReader()

            reader.onload = function() {
                let xml = smBlockly.Blockly.Xml.textToDom(this.result);
                smBlockly.Blockly.Xml.domToWorkspace(xml, smBlockly.workspace);
            }
            reader.readAsBinaryString(file)
        }
        upload.click();
    },
    exportScripts: function() {
        let script = smBlockly.getCode();

        let data = `data:text/plain;charset=utf-8,${script}`

        let download = document.createElement('a');
        let blob = new Blob([script], {
            type: 'text/plain'
        });
        download.href = window.URL.createObjectURL(blob);
        download.download = 'script.sh';

        download.click();
    },





    //internal

    _setWorkspace: function(toolBox) {
       
    }

};


module.exports = smBlockly;
