function isParenthesisMatching(str) {
    var stack = [];

    var open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    var closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (i = 0; i < str.length; i++) {

        var char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

isParenthesisMatching("{you [have ( betrayed |a trust that should never| have) been] broken.}")