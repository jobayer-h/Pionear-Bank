// login
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    //hide login area
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    //show transition area
    const transitionArea = document.getElementById('transition-area');
    transitionArea.style.display = 'block';
})