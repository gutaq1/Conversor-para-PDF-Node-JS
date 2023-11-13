class Processor{
    static Process(data){
        var separate = data.split("\r\n");
        var rows = [];

        separate.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });
        
        console.log(rows);
    }
}

module.exports = Processor;