function firstZero(arr, low , high){
    if(high>low){
        let mid = low + parseInt((high-low)/2)
        if((mid == 0 || arr[mid - 1] == 1 ) && arr[mid] == 0){
            return mid
        }

        else if (arr[mid] == 1){
            return firstZero(arr, (mid+1), high)
        }
        
        else{
            return firstZero(arr, low, (mid + 1))
        }
    }
}

function sortedFrequency(arr, left, right, val){
    if (right < left){
        return -1 
    }

    let mid = left + parseInt((right-left)/2) 

    // If the element is present at the middle
    // itself
    if (arr[mid] == val){
        return mid
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    else if (arr[mid] > x){
        return sortedFrequency(arr, left, mid-1, val)
    }

     // Else the element can only be present
    // in right subarray
    else {
        return sortedFrequency(arr, left, mid+1, val)
    }
}

function findRotatingIndex(arr, low, high, val){
    if (high < low) {
        return -1 
    }

    let mid = Math.floor((low + high)/2)
    if (arr[mid] == val){
        return mid 
    }

    else if (arr[mid]<val){
        return findRotatingIndex(arr, mid+1, high, val)
    }

    else{
        return findRotatingIndex(arr, mid-1, high, val)
    }
}

function findFloor(arr, low, high, x){
    
    // If low and high cross each other
    if (low> high){
        retunr -1 
    }

    // If low and high cross each other
    else if (x > arr[high]){
        return high
    }

    let mid = Math.floor((low+high)/2)

    if (x = arr[mid]){
        return mid 
    }

    // If x lies between mid-1 and mid
    if (mid > 0 && arr[mid-1] <=x || x < arr[mid])

     // If x is smaller than mid, floor
    // must be in left half.
    if (x < arr[mid]){
        return findFloor(arr, low, mid-1, x)
    }

    else{
        return findFloor(arr, low, mid+1, x)
    }
    
}