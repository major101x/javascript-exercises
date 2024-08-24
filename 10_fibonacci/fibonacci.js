const fibonacci = function(num) {
    let result = 0;
    let val1 = 0;
    let val2 = 1;
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (Math.sign(num) == -1){
        return "OOPS";
    } else {
        for(i = 2; i <= num; i++) {
            result = val1 + val2;
            val1 = val2;
            val2 = result;
        }
        return val2;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
