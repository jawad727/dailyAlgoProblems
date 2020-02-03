// Given an integer n, calculate the first n numbers in the Fibonacci sequence. Return an array containing the n integers.

// Ex: fib(8) -> [0, 1, 1, 2, 3, 5, 8, 13] 

function fibo(n) {
    var llist = new LinkedList()
    var ary = [0, 1]
  
    if (n <= 1) {
      return ary.slice(0, n)
    }
  
    for (i=2 ; i<n; i++) {
      ary.push(ary[i-1] + ary[i-2])
    }
  
    return ary
  }
    
  
fibo(9)