
function fib(n){
    if(n<2){
        return n
    }else{
        return fib(n-2) + fib(n-1)
    }
}




function fibs(n){
    res = []
    for(let i = 0; i< n; i++){
        res.push(fib(i))
        console.log(fib(i))
    }
    return res
}

console.log(fibs(8))

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    let first_arr = arr.splice(0,Math.ceil(arr.length / 2))
    let second_arr = arr
    first_arr = mergeSort(first_arr)
    second_arr = mergeSort(second_arr)
    return merge(first_arr, second_arr)
}

function merge(arr_a, arr_b){
    let arr_c = []
    while(arr_a.length>0 && arr_b.length>0){
        if(arr_a[0] > arr_b[0]){
            arr_c.push(arr_b[0])
            arr_b.shift()
        }else{
            arr_c.push(arr_a[0])
            arr_a.shift()
        }
    }
    while(arr_a.length>0){
        arr_c.push(arr_a[0])
        arr_a.shift()
    }
    while(arr_b.length>0){
        arr_c.push(arr_b[0])
        arr_b.shift()
    }

    return arr_c
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))