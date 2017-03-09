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
    init: function(id) {
        this.workspace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox')
        });
    },
    saveBlocks: function() {
        let xml = smBlockly.Blockly.Xml.workspaceToDom(smBlockly.workspace);
        return api.block.post(0, xml);
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
        let script = smBlockly.Blockly.bash.workspaceToCode(smBlockly.workspace);

        let data = `data:text/plain;charset=utf-8,${script}`

        let download = document.createElement('a');
        let blob = new Blob([script], {
            type: 'text/plain'
        });
        download.href = window.URL.createObjectURL(blob);
        download.download = 'script.sh';

        download.click();
    }
};


module.exports = smBlockly;
