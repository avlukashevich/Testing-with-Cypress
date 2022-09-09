export const isSuperSet = (set, subset) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true;
}
export const union = (setA, setB) => {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

export const intersection = (setA, setB) => {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}
export const difference = (setA, setB) => {
    let _diffrenece = new Set(setA);
    for (let elem of setB) {
        _diffrenece.delete(elem);
    }
    return _diffrenece;
}