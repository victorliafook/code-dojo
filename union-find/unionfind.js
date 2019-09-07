class UnionFind {
    constructor(numberOfNodes) {
        if (numberOfNodes < 1) {
            throw new Error("cannot create an empty set");
        }
    }
}

module.exports = UnionFind;