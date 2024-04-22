
var restoreIpAddresses = function(s) {
    if (!s || s.length === 0) return [];
    const result = [];

    // xxx.xxx.xxx.xxx => think about we have 4 sections totally, "remaining" represents how many sections remains for current dfs level
    const dfs = (startIndex, remaining, ip) => {
        // when remaining is 0, means we've explored 4 sections already
        if (remaining === 0) {
            // found the ip
            if (startIndex === s.length) {
                // remove the last .
                result.push(ip.slice(0, -1));
            }
            // e.g. "1.9.2.1680" when remaining is 0, but still some string left, so not valid, return
            return;
        }

        // For each dfs level, we can have 3 options, 1 digit, 2 digits, 3 digits; e.g. sub = 1 || 19 || 192; 
        for (let i = 1; i <= 3; i++) {
            // because "00".substring(0, 10) will also return "00", so we need to check out of boundery
            if (startIndex + i > s.length) break;
            // find substring
            const sub = s.substring(startIndex, startIndex + i);

            // check if it's leading 0
            if (sub.charAt(0) === '0' && sub.length > 1) return;

            if (Number(sub) <= 255) {
                dfs(startIndex + i, remaining - 1, ip + sub + '.')
            }
        }
    }

    dfs(0, 4, "");
    return result;
};