const Spen = require('./spen');
const fs = require('fs');
const formatReg = require('./format');
try {
    let spen = new Spen();
    const codeText = fs.readFileSync('./parse.rb', 'utf-8').replace(/;/g, '\n').split('\n').map(line => line.trim());
    const inputs = ['gets'];
    const contr = ['while', 'until', 'if', 'сase'];

    let metrics = [];
    spen.idents.forEach(ident => {

        let codeIdents = codeText.filter(line => new RegExp('\\b' + formatReg(ident.id) + '\\b').test(line));
        if (codeIdents.filter(line => contr.filter(op => new RegExp('\\b' + formatReg(op) + '\\b' + '\\s*').test(line)).length).length)
            metrics.push({ident: ident.id, type: 'C'});
        else if (codeIdents.filter(line => new RegExp('\\b' + formatReg(ident.id) + '\\b' + '\\s*' + '=' + '\\s*').test(line)).length > 1 || ident.cons)
            metrics.push({ident: ident.id, type: 'M'});
        else if (codeIdents.filter(line => inputs.filter(input => new RegExp('\\b' + formatReg(input) + '\\b' + '\\s*').test(line)).length).length)
            metrics.push({ident: ident.id, type: 'P'});
        else
            metrics.push({ident: ident.id, type: 'T'});
    });
    spen.show();
    let groupsNum = {};
    ['P', 'C', 'M', 'T'].forEach(type => {
        console.log(type + ':');
        let identGroup = metrics.filter(ident => ident.type == type);
        identGroup.forEach(ident => console.log(' ' + ident.ident));
        console.log('num ' + identGroup.length);
        groupsNum[type] = identGroup.length;
    });

    let Q = groupsNum['P'] + 2 * groupsNum['M'] + 3 * groupsNum['C'] + 0.5 * groupsNum['T'];
    console.log(`Q = P + 2*M + 3*C + 0.5*T = ${groupsNum['P']} + 2*${groupsNum['M']} + 3*${groupsNum['C']} + 0.5*${groupsNum['T']} = ${Q}`);
} catch (e) {
    console.log(e);
}
