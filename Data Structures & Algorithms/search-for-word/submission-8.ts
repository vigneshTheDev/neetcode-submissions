const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];
type Point = [number, number];
class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const r = board.length;
        const c = board[0].length;
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                const path: Point[] = [[i, j]];
                const inPath: boolean[][] = new Array(board.length).fill(null).map(() => []);
                if (this.walk(board, word, [i, j], path, inPath)) return true;
            }
        }

        return false;
    }
    walk(
        board: string[][],
        word: string,
        curr: Point,
        path: Point[],
        inPath: boolean[][],
    ): boolean {
        if (curr[0] >= board.length || curr[1] >= board[0].length || curr[0] < 0 || curr[1] < 0)
            return false;

        if (inPath[curr[0]][curr[1]]) return false;

        if (board[curr[0]][curr[1]] !== word[path.length - 1]) return false;

        if (path.length === word.length) return true

        path.push(curr);
        inPath[curr[0]][curr[1]] = true;
        for (let [i, j] of directions) {
            if (this.walk(board, word, [curr[0] + i, curr[1] + j], path, inPath)) {
                return true;
            }
        }
        path.pop();
        inPath[curr[0]][curr[1]] = false;
        return false;
    }
}
