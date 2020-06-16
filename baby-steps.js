function sum(args) {
    var total = 0;
    args.forEach((value, index) => {     
        if (index > 1) {
            total = total + Number(value);
        }
    });

    return total;
}

console.log(sum(process.argv));

