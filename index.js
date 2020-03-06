function calculateBill(price,vat,tip) {
    
    if (typeof price && typeof vat && typeof tip !== "number") {
        const notNumber = "error";
        return notNumber;;
    }else{
        let result = price + (price * vat / 100) + tip;
        return "£" + result; 
    }
  };

module.exports = calculateBill;