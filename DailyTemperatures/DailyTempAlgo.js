// Leetcode Link: https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(T) {
    var daysTracker = []
    for (i=0; i<T.length; i++) {
        var days = 0
        for (j=i+1; j<T.length; j++) {
            if (T[i] < T[j]) {
                days += 1
                daysTracker.push(days)
                j = T.length
            } 
            else if (T[i] >= T[j]) {
                days += 1
            }        
        }
        if (daysTracker.length - 1 != i) {
            daysTracker.push(0)
        }
    }
    return daysTracker
};