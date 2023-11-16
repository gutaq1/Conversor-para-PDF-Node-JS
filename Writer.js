const fs = require("fs");
const util = require("util");

class Write{
    constructor(){
        this.Write = util.promisify(fs.writeFile);
    }

    async Write(filename,data){ 
        try{
            return await this.write(filename,data);
            return true;
        }catch(err){
            return false;
        }
    }
}

module.exports = Write;