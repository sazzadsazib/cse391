
var quotes = ["Life is really simple, but we insist on making it complicated. <br/> -Confucius.", "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.<br/> -Buddha.", "Life is ten percent what happens to you and ninety percent how you respond to it.<br/> -Lou Holtz.", "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor. <br/> -Sholom Aleichem.", "In the end, it's not the years in your life that count. It's the life in your years. <br/>-Abraham Lincoln. "]; 

document.getElementById("tester").innerHTML = quotes[(Math.floor(Math.random() * quotes.length))];
function c1(c1){
  c1.style.backgroundColor = "#EBC3A9";
  c1.style.borderColor = "darkred";
  demo.style.color="darkred";
  demo.style.fontSize="50%";
}
function c2(c2){
  c2.style.backgroundColor = "#B7B6B8";
  c2.style.borderColor = "darkgreen";
  demo.style.color="darkgreen";
}
function c3(c3){
  c3.style.backgroundColor = "#B4E7A6";
  c3.style.borderColor = "#76A80E";
  demo.style.color="#6B3EA7";
}
function c4(c4){
  c4.style.backgroundColor = "grey";
  c4.style.borderColor = "darkblue";
  demo.style.color="darkblue";
}