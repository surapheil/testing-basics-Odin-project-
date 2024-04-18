function ceazarCipherEncrypt(str,k){
    let arr = str.split('');
    let fnl = []
    for(let i = 0; i < arr.length; i++){
        let isUpperCase = arr[i] === arr[i].toUpperCase();
        let char = arr[i].toLowerCase();
        if (!(char in helper )){
            fnl.push(char);
        }
        else{
            let num = (helper[char] + k) % 26;
            let key = Object.keys(helper).find(key => helper[key]===num);
            fnl.push((isUpperCase) ? key.toUpperCase() : key);               
        }
    }
    return fnl.join('');

}

function ceazarCipherDecrypt(str,k){
    let ans = str.split('');
    let answer = []
    for(let i=0; i < ans.length; i++){
        let isUpperCase = ans[i] === ans[i].toUpperCase();
        let char = ans[i].toLowerCase();
        if (!(char in helper)) answer.push(ans[i])
        else{
            let num = (helper[char]-k) % 26
            let key = Object.keys(helper).find(key=>helper[key]===num)
             answer.push((isUpperCase) ? key.toUpperCase() : key);
        }
    }
    return answer.join('');
}



let helper = {
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8,
    "i":9,
    "j":10,
    "k":11,
    "l":12,
    "m":13,
    "n":14,
    "o":15,
    "p":16,
    "q":17,
    "r":18,
    "s":19,
    "t":20,
    "u":21,
    "v":22,
    "w":23,
    "x":24,
    "y":25,
    "z":26,
}

module.exports ={
    ceazarCipherEncrypt,
    ceazarCipherDecrypt
} 