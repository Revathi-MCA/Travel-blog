let videobtn=document.querySelectorAll('.video-btn');
var message=document.getElementById('message')

videobtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.video-button .active').classList.remove('active');
        btn.classList.add('active');
        let src =btn.getAttribute('data-src');
        document.querySelector('#video1').src = src
    });
});

message.addEventListener('click',function(){
    alert("Your message sent. Thanks for visiting!👍")
})

function Myname(){
    var name=document.getElementById("name").required;
}


