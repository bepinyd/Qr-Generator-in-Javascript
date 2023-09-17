const qrtext=document.getElementById('qrtext')
const qrimg=document.getElementById('qrimg')
const qrdenerator=document.getElementById('qrdenerator')

function createimg(){
    if(qrtext.value.length>0){
        qrimg.classList.remove('qrim')
        qrimg.src=("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value)
        qrimg.classList.add('qrimg')
    }
    else{
        alert('please Enter the Text')
    }
}
