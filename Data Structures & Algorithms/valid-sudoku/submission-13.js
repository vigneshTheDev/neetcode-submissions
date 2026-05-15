class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < 9; r++) {
            const seen = {}
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.')
                    continue;

                if (seen[board[r][c]]) {
                    return false;
                }

                seen[board[r][c]] = true
            }
        }
        for (let c = 0; c < 9; c++) {
            const seen = {}
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === '.')
                    continue;

                if (seen[board[r][c]])
                    return false;
                
                seen[board[r][c]] = true
            }
        }

        const matSeen = new Map();
        for (let r = 0; r < 9; r++) {
            const rowSeen = matSeen[Math.floor(r/3)] = matSeen[Math.floor(r/3)] || {}
            for (let c = 0; c < 9; c++) {
                const colSeen = rowSeen[Math.floor(c/3)] = rowSeen[Math.floor(c/3)] || {};

                if (board[r][c] === '.') continue;

                if (colSeen[board[r][c]]) {
                    return false
                }
                colSeen[board[r][c]] = true;
            }
        }

        return true
    }
}
