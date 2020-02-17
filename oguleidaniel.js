const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML="entter all fields"
        setTimeout(()=>msg.remove(),3000)
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        userList.appendChild(li);
        
        //clear fields
        nameInput.value=''
        emailInput.value=''
    }

}
