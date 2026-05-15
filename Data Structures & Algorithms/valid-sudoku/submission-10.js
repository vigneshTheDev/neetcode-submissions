class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!board.every(row => this.isValidSubSudoku(row))) {
            return false
        }

        if (!board.every((_row, i) => this.isValidSubSudoku(board.map(row => row[i])))) {
            return false
        }

        for (let i = 0; i < 9; i+=3)
            for (let j = 0; j < 9; j += 3) {
                const rows = board.slice(i, i+3)
                const arr = [];
                rows.forEach(row => arr.push(...row.slice(j, j+3)))

                if (!this.isValidSubSudoku(arr)) {
                    return false
                }
            }

        return true;
    }

    isValidSubSudoku(arr) {
        console.log(arr)
        return arr.every(el => el === '.' || (+el >= 0 && +el <= 9)) && !this.hasDuplicates(arr.filter(el => el !== '.'))
    }

    hasDuplicates(arr) {
        const seen = {}
        for (let a of arr) {
            if (seen[a]) return true

            seen[a] = true
        }
        return false
    }
}
