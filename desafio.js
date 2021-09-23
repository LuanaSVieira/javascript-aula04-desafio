const mensagemSecreta = [
'Aprender', 
'não', 
'é',
'sobre',
'o', 
'que', 
'você',
'consegue', 
'facilmente', 
'mas', 
'sobre', 
'o', 
'que',
'você',
'pode',
'descobrir.',
' - 2015',
'Chris',
'Pine',
'Aprenda',
'JavaScript'];

mensagemSecreta.pop();
console.log(mensagemSecreta);

mensagemSecreta.push('a', 'programar')

mensagemSecreta[8] = 'certo'

mensagemSecreta.shift();

mensagemSecreta.unshift('Programação');

var index = mensagemSecreta.indexOf('consegue');
console.log(index)

mensagemSecreta.splice(7, 1, "sabe");
console.log(mensagemSecreta);

mensagemSecreta.splice(mensagemSecreta.indexOf('certo'), 1)

console.log(mensagemSecreta.join());