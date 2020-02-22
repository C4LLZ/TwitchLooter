var num = (JSON.parse(localStorage.getItem("Redeemed")));



document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('clear');
  Looted.innerHTML = JSON.parse(localStorage.getItem("Redeemed"));
  // onClick's logic below:
  link.addEventListener('click', function() {
      localStorage.clear();
    console.log("tried clearing.")
    });
})

    // Lotting script. 

    setInterval(function(){
        
      var box = document.getElementsByClassName('claimable-bonus__icon');
      console.log(num)
  if (box.length > 0) {
    document.querySelector('.claimable-bonus__icon').click();
    console.log("A box was redeemed!");
    num += 1;
    localStorage.setItem("Redeemed", num)

  }else{
          console.log("There was no redeemable box. Rechecking in 10 seconds!");
          num += 1;
          localStorage.setItem("Redeemed", num)
      };  
  }, 10000);





