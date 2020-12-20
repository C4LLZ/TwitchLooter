

setInterval(function(){
   
var box = document.getElementsByClassName('claimable-bonus__icon');
if (box.length > 0) {
document.querySelector('.claimable-bonus__icon').click();
console.log("A box was redeemed!");
$.notify("Box Redeemed","success");

}else{
        console.log("There was no redeemable box. Rechecking in 10 seconds!");
         
     };  
}, 10000);


