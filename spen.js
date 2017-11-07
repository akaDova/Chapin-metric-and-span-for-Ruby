const fs = require('fs');


function Spen() {
  var text, idents;
    (function init() {
        text = fs.readFileSync('./parse.rb', 'utf-8');
        idents = text.replace(/;/g,"\n").split(/\n/)
            .filter(function(str){ return str != "" && /\s+=\s+.+/.test(str) })
            .map(str => str.trim().replace(/\s+=\s+.+/, ""))
            .filter((str, i, arr)  => arr.indexOf(str) == i)
            .map(function(ident) { return {id: ident,  num: text.match(new RegExp(`\\s*${(require('./format'))(ident)}\\s*`, "g")).length - 1} });

    })();


  this.idents = idents;
    
  
}

Spen.prototype.show = function() {
    console.log(this.idents.map(elem => `${elem.id}: ${elem.num}`).join("\n") + '\nsum: ' + this.idents.map(elem => elem.num)
.reduce((prev, curr) => prev + curr, 0));

};

module.exports = Spen;
