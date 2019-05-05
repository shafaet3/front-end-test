var i=0;
var images1=[];
var images2=[];
var images3=[];
var time=2000;

images1[0]="images/person1.png";
images1[1]="images/person2.png";
images1[2]="images/person3.png";

images2[0]="images/person2.png";
images2[1]="images/person3.png";
images2[2]="images/person1.png";

images3[0]="images/person3.png";
images3[1]="images/person1.png";
images3[2]="images/person2.png";

function changeImg(){

  document.slide.src=images1[i];
  document.slide2.src=images2[i];
  document.slide3.src=images3[i];
  if(i<images1.length-1){ i++;}
  else{ i=0;}
  setTimeout("changeImg()",time);

}

window.onload=changeImg;
