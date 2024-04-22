var calculate = function (s) {
    let ans = 0;
    let num = 0;
    let sign = 1;
    let stack = [sign];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!isNaN(parseInt(c))) {
            num = num * 10 + (parseInt(c));
        } else if (c === '(') {
            stack.push(sign);
        } else if (c === ')') {
            stack.pop();
        } else if (c === '+' || c === '-') {
            ans += sign * num;
            sign = (c === '+' ? 1 : -1) * stack[stack.length - 1];
            num = 0;
        }
    }

    return ans + sign * num;
}