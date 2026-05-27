class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;
        let str1 = new Map<string, number>();
        let str2 = new Map<string, number>();

        for (let idx = 0; idx < s.length; ++idx) {
            if (!str1.has(s[idx])) {
                str1.set(s[idx], 1)
            } else {
                str1.set( s[idx], (str1.get(s[idx])! + 1) )
            }
        }

        for (let idx = 0; idx < t.length; ++idx) {
            if (!str2.has(t[idx])) {
                str2.set(t[idx], 1)
            } else {
                str2.set( t[idx], (str2.get(t[idx])! + 1) )
            }
        }

        for (const [key, value] of str1) {
            if(str2.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
} 
