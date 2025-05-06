function sum(name, ...arg){
          console.log(arg);

          document.write(`HELLO ${name} :`)

          let sum = 0;
          for(let a in arg){
            sum += arg[a]
          }
          document.write(sum + "<br>");
}
sum("BANGASH" , 4,5,3,2);
// sum(29,34,23,56,34,5);