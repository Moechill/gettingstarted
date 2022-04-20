const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/firsttxt.txt','utf8')
const second = readFileSync('./content/secondtxt.txt','utf-8')


writeFileSync('./content/thirdtxt.txt',
'this is the third text i´ve created und jetzt sogar geändert. But now again', {flag:'a'})
