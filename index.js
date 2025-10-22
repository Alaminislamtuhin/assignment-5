

const buttons= document.getElementsByClassName('love-btn')

for(let i=0 ; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(e){    
  e.preventDefault()

  let heartLove = parseInt(document.getElementById('heart-love').innerText)

  heartLove +=1 ;

  document.getElementById('heart-love').innerText = heartLove
    

    })
}

const callButton = document.getElementsByClassName('call-button')
for(let i=0; i< callButton.length; i++){
    callButton[i].addEventListener('click',function(e){
        e.preventDefault()
        
        
        
        
       
        let callCoin = parseInt(document.getElementById('call-coin').innerText)

        callCoin -=20;

        if(callCoin<0){
            alert('your call coin are not avialable')
            return;
        }

        document.getElementById('call-coin').innerText = callCoin;

        alert('calling national emergency service 999...')


    })
}

const clickCopyButton = document.getElementsByClassName('click-copy-button')
for(let i=0; i<clickCopyButton.length; i++){
    clickCopyButton[i].addEventListener('click', function(e){
    e.preventDefault()
   let copyButton = parseInt(document.getElementById('copy-button').innerText)
   copyButton +=1;

   document.getElementById('copy-button').innerText = copyButton;

   alert('your number has been copied')



    })
}