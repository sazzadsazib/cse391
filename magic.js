function ClearIt(){
  document.getElementById("Main").value="";
}

function Capitalize(){
  var c = document.getElementById("Main").value;
  document.getElementById("Main").value = c.toUpperCase();
}

function Sort(){
var s = document.getElementById("Main").value;
  var arr = s.split("\n");
  arr.sort();
  var str = "";
  for (var i =  0; i < arr.length; i++) {
    if(i == arr.length-1) {
      str = str + arr[i];
    }else {
      str = str + arr[i] + "\n";
    }
  }
  document.getElementById("Main").value = str;
}

/* function Reverse() {
  var r = document.getElementById("Main").value;
  var arr = r.split("\n");
  var str = "";
  for (var i = arr.length - 1; i >= 0; i--) {
    if(i == 0) {
      str = str + arr[i];
    }else {
      str = str + arr[i] + "\n";
    }
  }
  document.getElementById("Main").value = str;
} */


/*function Reverse() {
  var r = document.getElementById("Main").value;
  var arr = r.split("\n");
  var str = "";
  for (var i = arr.length - 1; i >= 0; i--) {
    var str2="";
    var charr = arr[i].split('');

    if(i == 0) {
      for (var j = charr.length - 1; j >= 0; j--) {
        str2=str2+charr[j];
        console.log(str2);
      }
      str = str + str2;
    }else {
       for (var j = charr.length - 1; j >= 0; j--) {
        str2=str2+charr[j];
      }
      str = str + str2 + "\n";
    }
  }
  document.getElementById("Main").value = str;
} */

function Reverse() {
  var r = document.getElementById("Main").value;
  var arr = r.split("\n");
  var str = "";
  for (var i = 0; i <=arr.length - 1; i++) {
    var str2="";
    var charr = arr[i].split('');

    if(i == 0) {
      for (var j = charr.length - 1; j >= 0; j--) {
        str2=str2+charr[j];
        console.log(str2);
      }
      str = str + str2+"\n";
    }else {
       for (var j = charr.length - 1; j >= 0; j--) {
        str2=str2+charr[j];
      }
      str = str + str2 + "\n";
    }
  }
  document.getElementById("Main").value = str;
}


function StripBlank() {
  var stringArray = document.getElementById("Main").value.split("\n");
  var string = "";
  for(x in stringArray) {
      
    if(stringArray[x] == "") {

    } else if(x == stringArray.length-1) {

      string = string + stringArray[x];
      
    }else {
      string = string + stringArray[x] + "\n";
    }
  }
  document.getElementById("Main").value = string;

}
function AddNumbers(){
  var a = document.getElementById("Main").value;
  var arr = a.split("\n");
  var str = "";
  var num = 1;
  for (var i =  0; i < arr.length; i++) {
    if(i == arr.length-1) {
      str = str + num + ") " + arr[i];
    }else {
      str = str + num + ") " + arr[i] + "\n";
    }
    num = num + 1;
  }
  document.getElementById("Main").value = str;
}

function arr_random(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function Shuffle(){
    var a = document.getElementById("Main").value;
  var arr1 = a.split("\n");
  var arr = arr_random(arr1);
  var str = "";
  for (var i =  0; i < arr.length; i++) {
    if(i == arr.length-1) {
      str = str + arr[i];
    }else {
      str = str + arr[i] + "\n";
    }
  }
  document.getElementById("Main").value = str;
}