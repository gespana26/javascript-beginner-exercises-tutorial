function sing(){
    let letra = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) letra += 'there will be an answer, ';
        else if (i === 10) letra += 'whisper words of wisdom, let it be';
        else letra += 'let it be, ';
    }
    return letra;
}

//Your code above ^^^

console.log(sing());