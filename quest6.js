let obj=	([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]) 
  let sum=0;
  for (let i in obj){
    sum=sum+obj[i].quantity*obj[i].price;
  }
  console.log(sum);
  