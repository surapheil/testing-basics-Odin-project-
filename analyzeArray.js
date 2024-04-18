function analyzeArray(arr){
    let average = (arr)=>{
        let sum = 0;
        for(let x of arr){
            sum += x;
        }
        return sum / arr.length;

    }

    let min = (arr) => {
        let cur = arr[0]
        for (let x of arr){
            if(cur > x){
                cur = x
            }
        }
        return cur;
    }

    let max = (arr) => {
        let cur = arr[0]
        for (let x of arr){
            if (cur < x){
                cur = x
            }

        }
        return cur;
    }

    let length = (arr) =>{
        return arr.length
    }



    return{
        'average': average(arr),
        'min': min(arr),
        'max': max(arr),
        'length': length(arr)
    }
}

module.exports = analyzeArray;