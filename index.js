

const buttons= document.getElementsByClassName('love-btn')

for(let i=0 ; i< buttons.length; i++){
    buttons[i].addEventListener('click', function(e){    
  e.preventDefault()

  let heartLove = parseInt(document.getElementById('heart-love').innerText)

  heartLove +=1 ;

  document.getElementById('heart-love').innerText = heartLove
  

 
    


    })
}