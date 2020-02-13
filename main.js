
    setInterval(function(){
        
        var box = document.getElementsByClassName('claimable-bonus__icon');
        let url = chrome.runtime.getURL('Pling.mp3')
    if (box.length > 0) {
      document.querySelector('.claimable-bonus__icon').click();
      console.log("A box was redeemed!");
      let a = new Audio(url)
      a.play()
    }else{
            console.log("There was no redeemable box. Rechecking in 10 seconds!");
            
        };  
    }, 10000);