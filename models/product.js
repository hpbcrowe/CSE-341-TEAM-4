const fs = require('fs');
const path = require('path');

 // This may cause some problems
     //('views', path.join(__dirname, 'views'));  
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');


const getProductsFromFile = (cb) => {
      
   fs.readFile(p, (err, fileContent) => {
       if (err) {
         cb([]);
       } else {
       cb(JSON.parse(fileContent));
       }
   });
}

module.exports = class Product{
    constructor(title, imageURL, description, price) {
        this.title = title;
        this.imageURL =imageURL;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
           fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
           });
        });
   }

   static fetchAll(cb) {
    getProductsFromFile(cb);        
   }

   static findById(id, cb){

   }
};