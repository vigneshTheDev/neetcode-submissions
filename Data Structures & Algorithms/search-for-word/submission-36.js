const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]
class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const inPath = new Array(board.length).fill(null).map(() => [])
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if(this.walk(board, word, [i, j], [[i, j]], inPath)) return true
            }
        }
        return false
    }
    walk(board, word, curr, path, inPath) {
        const [i, j] = curr
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return false
        if (inPath[i][j]) return false
        if (word[path.length - 1] !== board[i][j]) return false
        if (word.length === path.length) return true

        inPath[i][j] = true
        path.push(curr)
        for (let dir of directions) {
            if (this.walk(board, word, [i + dir[0], j + dir[1]], path, inPath)) {
                return true
            }
        }

        path.pop()
        inPath[i][j] = false
        return false
    }
}
