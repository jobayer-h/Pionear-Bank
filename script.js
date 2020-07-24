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

//Diposite Calculation

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
    const input = inputDataRead('deposit-input');
    const balance = balanceDataRead('deposit');
    const total = input + balance;
    document.getElementById('deposit').innerText = total;
    const currentBalance = balanceDataRead('balance');
    const updateCurrentBalance = currentBalance + input;
    document.getElementById('balance').innerText = updateCurrentBalance;
})
//withdraw calculation
const withrawBtn = document.getElementById('withdraw-btn');
withrawBtn.addEventListener('click', function(){
    const input = inputDataRead('withdraw-input');
    const balance = balanceDataRead('withdraw');
    const total = input + balance;
    document.getElementById('withdraw').innerText = total;
    const currentBalance = balanceDataRead('balance');
    const updateCurrentBalance = currentBalance - input;
    document.getElementById('balance').innerText = updateCurrentBalance;
})

//functions
function inputDataRead(inputID){
    const dataRead = document.getElementById(inputID).value;
    const dataReadValue = parseFloat(dataRead);
    document.getElementById(inputID).value = '';
    return dataReadValue;
}
function balanceDataRead(inputID){
    const dataRead = document.getElementById(inputID).innerText;
    const dataReadValue = parseFloat(dataRead);
    return dataReadValue;
}
