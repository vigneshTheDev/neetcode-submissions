class TreeNode {
    constructor(isEndOfWord) {
        this.children = new Array(26).fill(null);
        this.isEndOfWord = isEndOfWord;
    }
}
class PrefixTree {
    constructor() {
        this.root = new TreeNode();
        this.a = "a".charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const c = word[i].charCodeAt(0);
            const cIdx = c - this.a;
            curr.children[cIdx] = curr.children[cIdx] || new TreeNode(i === word.length - 1);
            curr = curr.children[cIdx];
        }
        curr.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const c = word[i].charCodeAt(0);
            const cIdx = c - this.a;
            if (!curr.children[cIdx]) return false;
            if (i === word.length - 1 && curr.children[cIdx].isEndOfWord) return true;
            curr = curr.children[cIdx];
        }
        return false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const c = prefix[i].charCodeAt(0);
            const cIdx = c - this.a;
            if (!curr.children[cIdx]) return false;
            if (i === prefix.length - 1) return true;
            curr = curr.children[cIdx];
        }
        return false
    }
}
