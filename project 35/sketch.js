//Create variables here
var dogImg, happyDogImg, database, foodS, foodStock;
var dog;
var foodStock, lastFed;
var foodObject;

function preload()
{
  dogImg=loadImage("sprites/dogImg.png");
  happyDogImg=loadImage("sprites/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale=0.15;

  database=firebase.database();
  console.log(database);

  foodObject= new Food();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
   console.log(foodStock+"hello")
}


  function draw() {  
  background(46, 139, 87)
    drawSprites();

    textSize(20);
    fill("white");
    text("Foodstock Left: "+foodS, 295, 100);

    textSize(15)
    text("Note: Press the UP_ARROW to feed the Dog milk ", 100, 50);

    foodObject.display();
}
  function readStock(data){
  foodS=data.val(); 
  console.log("take foodStock value in database"+foodS);
}

  function writeStock(x){
    database.ref('/').update({
      food:x-1
    })
  }

  function keyPressed(){
  if(keyDown(UP_ARROW)){
    console.log("hello"); 
  writeStock(foodS);
  dog.addImage(happyDogImg);
}  
}