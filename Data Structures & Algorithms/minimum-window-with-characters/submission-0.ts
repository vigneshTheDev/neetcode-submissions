class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let out = [-1, -1]
        let outLen = Infinity

        let l = 0
        const freqW = {}
        const freqT = {}

        for (let c of t) {
            freqT[c] = freqT[c] || 0
            freqT[c]++
        }

        const need = Object.keys(freqT).length
        let have = 0

        for (let r = 0; r < s.length; r++) {
            const c = s[r]
            freqW[c] = (freqW[c] || 0) + 1
            if (freqW[c] === freqT[c]) have++

            while (have === need) {
                if (r - l + 1 < outLen) {
                    outLen = r - l + 1
                    out = [l, r]
                }

                const cl = s[l]
                freqW[cl]--;
                if (freqT[cl] && freqW[cl] < freqT[cl]) {
                    have--;
                }
                l++;
            }
        }

        return outLen === Infinity ? '' : s.slice(out[0], out[1] + 1)
    }
}
