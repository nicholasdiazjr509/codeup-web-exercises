const printRightTriangle = (n) => {
    let output='';
    for (let i = 1; i <= n; i++) {
     output +="*".repeat(i).padEnd(n) + "\n";
    }   
    return output;
   }
   
   console.log(printRightTriangle(5));