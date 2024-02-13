function binarySearch(list, element) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let middle = parseInt((left + right)/2)

        if(arr[middle] === element){
            return middle;
        }
        else if(arr[middle] < element){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }
    
    return -1;
}


//Reference: The following website helped me understand how the binary search worked through a interactive excercise of implementing the search
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search