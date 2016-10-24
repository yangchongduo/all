const percent = (total, sub) => {
    if (!total) {
        return '0%';
    }
    return `${+((sub / total) * 100).toFixed(2)}%`;
};
let result=percent(10/2);
console.log(result)