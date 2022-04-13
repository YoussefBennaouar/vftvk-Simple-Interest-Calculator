
function compute()
{
    // get variables from inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if(principal.length  !== 0){
        //calculate interest and future date
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        //create and show interest text
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%.</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }else{
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
}

//read the value of the range slider and set the rate val text
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

//check if Amount value is positive
function validationPrincipal() {
    var principal = document.getElementById("principal").value;
    var isZeroOrBigger = parseInt(principal) > 0;
    if (!isZeroOrBigger || principal.length  === 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
        