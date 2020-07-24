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
    if (input > 0) {
        const balance = balanceDataRead('deposit');
        const total = input + balance;
        updateBalance('deposit',total);
        const currentBalance = balanceDataRead('balance');
        const updateCurrentBalance = currentBalance + input;
        updateBalance('balance',updateCurrentBalance);
    }else{
        alert('Please enter a valid Number');
    }
})
//withdraw calculation
const withrawBtn = document.getElementById('withdraw-btn');
withrawBtn.addEventListener('click', function(){
    const input = inputDataRead('withdraw-input');
    if (input > 0) {
        const balance = balanceDataRead('withdraw');
        const total = input + balance;
        updateBalance('withdraw',total);
        const currentBalance = balanceDataRead('balance');
        const updateCurrentBalance = currentBalance - input;
        updateBalance('balance',updateCurrentBalance);
    }else{
        alert('Please enter a valid Number');
    }
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
function updateBalance(inputID,total) {
    document.getElementById(inputID).innerText = total;
}