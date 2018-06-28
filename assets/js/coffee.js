function makeCoffee (){
  let cup = [],
      milk = 3,
      sugar = 2,
      coffeeinPercentage = 80,
      swizzleStick = 1,
      spoon = 1

      if(swizzleStick==null){
        swizzleStick = spoon
      }

  cup.push(coffeeinPercentage,sugar,milk)
  console.log(cup)
  shuffleCup(cup,swizzleStick);
}

function shuffleCup(array,mixer){
  array = array.reduce((a, b) => a + b, 0)
  alert("Café Prêt , Time to code");
}

makeCoffee();
