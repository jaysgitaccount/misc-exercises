let output = `mark johansson\twaffle iron\t80\t2\nmark johansson\tblender\t200\t1\nmark johansson\tknife\t10\t4\nNikita Smith\twaffle iron\t80\t1\nNikita Smith\tknife\t10\t2\nNikita Smith\tpot\t20\t3\n`
    .trim() // remove any spaces or lines at the start and end of strings
    .split('\n') // Get array of lines between line breaks
    .map(line => line.split('\t')) // Split each array element into an array of words separated by tabs
    .reduce((customers, line) => {
        // Create keys for each customer
        // We end up with only 2 customers because this is overwritten every time
        // 
        customers[line[0]] = customers[line[0]] || [] 
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

console.log('output', JSON.stringify(output, null, 2))