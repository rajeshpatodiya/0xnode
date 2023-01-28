//memoization
const compute = (n) => {
    let cache = {}


    return function inner() {
        if ( n in cache) {
            console.log("fetching from cache and returning")
            console.log(cache[n])
        }
        else {
            let count = 0;
            for (i = 0; i < n; i++) {
                count = count + n;
            }
            console.log("computing from beginning")
            cache[n] = count;
            console.log(cache, count)

        }


    }

}





module.exports = { compute }