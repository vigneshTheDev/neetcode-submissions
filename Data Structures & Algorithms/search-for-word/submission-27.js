class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                console.log("i,j: ", i, j);
                console.log("=======");
                if (this.track(board, word, i, j, 0, {})) {
                    return true;
                }
            }
        }
        return false;
    }
    track(board, word, i, j, k, visited) {
        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;
        if (visited[i] && visited[i][j]) return false;
        if (board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;

        visited[i] = visited[i] || {};
        visited[i][j] = true;

        for (let dir of directions) {
            if (this.track(board, word, i + dir[0], j + dir[1], k + 1, visited)) return true
        }
        visited[i][j] = false
        return false
    }
}
