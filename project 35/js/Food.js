class Food {
    constructor() {

      this.foodStock=0;
      this.lastFed;
      this.image=loadImage("sprites/Milk.png");
    }
    getFoodStock(){
      return this.foodStock;
    }
    display(){
      var x=80,y=100;
console.log(this.foodStock)
      if(this.foodStock>0)
      {
        for (var i = 0; i < this.foodStock; i+=1){
        if(i%10==0)
      {
        x=80
        y=+50
      }
      image(this.image,x,y,50,50);
      x=x+20;
      }
      }
    }
    updateFoodStock(){}
    deductFood(){}

  }; 