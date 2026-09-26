const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];
class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const inPath = new Array(board.length).fill(null).map(() => []);
        for (let i = 0; i < board.length; i++)
            for (let j = 0; j < board[0].length; j++)
                if (this.walk(board, word, [i, j], 0, inPath)) return true;

        return false;
    }

    walk(board, word, curr, wordIdx, inPath) {
        const [i, j] = curr;
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return false;
        if (inPath[i][j]) return false;
        if (wordIdx > word.length - 1) return false;
        if (word[wordIdx] !== board[i][j]) return false;
        if (wordIdx === word.length - 1) return true;

        wordIdx++;
        inPath[i][j] = true
        for (let dir of directions)
            if (this.walk(board, word, [i + dir[0], j + dir[1]], wordIdx, inPath)) return true;

        inPath[i][j] = false
        return false;
    }
}
