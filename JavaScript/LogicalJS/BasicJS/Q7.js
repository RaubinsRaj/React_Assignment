var result = '\n';
for (var i = 1; i < 13; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}
console.log(result);