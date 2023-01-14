let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let right = document.querySelector('.right')
let left = document.querySelector('.left')

let ss = document.querySelector('.sent')
ss.onclick = function(){
   left.innerHTML = ''
   right.innerHTML = ''

}

function sent1(){
   let a =  inp1.value   
   left.innerHTML = left.innerHTML + '<h1 class="ondrek">'+ '<span class="sspan">'+a+'</span>'  + '</h1>'
   inp1.value = ''
}
function sent2(){
    let b = inp2.value
    right.innerHTML = right.innerHTML + '<h1 class="ondrek2">'+ '<span class="sspan2"> '+b+'</span>'  + '</h1>'
    inp2.value = ''
}

