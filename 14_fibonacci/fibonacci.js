const fibonacci = function(count) {
  
   if (Number(count) < 0) {
    return "OOPS";
   } 
   if (Number(count) === 0) {
    return 0;
   }

   let first = 0;
   let second = 1;

   for (let i = 1; i < Number(count); i ++) {
    const total = first + second;
    first = second;
    second = total;
   }

   return second;


};

// Do not edit below this line
module.exports = fibonacci;
