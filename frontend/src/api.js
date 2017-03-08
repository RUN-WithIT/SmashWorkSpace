let m = require('mithril');
let conf = require('./config');




let block = {
    post: function(id, xml) {
        return m.request({
            method: "POST",
            url: `${conf.url}/block/`,
            data: {
                id: id,
                xml: xml
            }
        })
    }
}

let api = {
    block: block
}



module.exports = api;
