const socket = io('http://localhost:8000');


const form=document.getElementById('send-container');
const messageInput=document.getElementById('messageInput');
const messagecontainer =document.querySelector(".container");

var audio=new Audio('ting.mp3');


const  append= (message,position)=>{
       const messageElement= document.createElement('div');
       messageElement.innerText=message;
       messageElement.classList.add('message');
       messageElement.classList.add(position);
       messagecontainer.append(messageElement);
       if(position=='left'){
        audio.play();
       }
      

} 


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`you:${message}`,'right');
    socket.emit('send',message);
    messageInput.value=''
})


let name;
while(!name){
name = prompt("enter your name to join");
}
//console.log(name);
socket.emit('new-user-joined',name)

//listening the events
socket.on('user-joined',name=>{
append(`${name} joined the chat`,'center');
})

socket.on('receive',data=>{
    append(`${data.name}:${data.message}`,'left');
    })

socket.on('left',name=>{
    append(`${name} left the chat `,'center');
    })