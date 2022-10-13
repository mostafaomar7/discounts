let t = document.getElementById('thing');
let price = document.getElementById('price')
let countrys = document.getElementById('countrys')
let egypt = document.getElementById('egypt')
let head =  document.getElementById('head')
let submit = document.getElementById('submit')
submit.onclick=function(){
    if (countrys.value == 'Egypt'){
            head.innerHTML= (t.value +" sale 30% price is : " +parseInt(price.value-(30/100*price.value) ) ) 
    }
    else{
        head.innerHTML="Sorry No Discount Now Price is : " + parseInt(price.value) 
        }
        if (t.value == ""){
            alert('please Enter your Data')
            head.innerHTML= ""
        }
    if (price.value == ""){
        alert('please Enter your Price')
        head.innerHTML= ""
    }
}
