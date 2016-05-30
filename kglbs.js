    window.onload = initPage;

var euro;
var convert;

function initPage()
{
    document.getElementById("convertButton").onclick = calcAnswer;
    document.getElementById("conversionType").onchange = calcAnswer;
}

function calcAnswer()
{
    //alert(document.getElementById("conversionType").value);

    var value1 = document.getElementById("amount").value;
    var conversionType = document.getElementById("conversionType").value;
    //alert(conversionType);

    //if(var value = document.getElementById("conversionType").value=="polish");
    //  document.getElementById("answer").value=value1 * 4.4976;
    //else
    //  document.getElementById("answer").value=value1* 10.43958;


    if(conversionType == "kgtolbs") {
        
        document.getElementById("outputt2").innerHTML ="Ans : "+value1 * 2.2046;
        
    } else if (conversionType == "lbstokg") {
     
        document.getElementById("outputt2").innerHTML = "Ans : "+value1 *  0.4536;
        
    }



}