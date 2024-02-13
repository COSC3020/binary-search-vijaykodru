function binarySearch(list, element) {
    if(list.length === 0){
        return -1;
    }
    
    let left = 0;
    let right = list.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right)/2)

        if(list[middle] === element){
            return middle;
        }
        else if(list[middle] < element){
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