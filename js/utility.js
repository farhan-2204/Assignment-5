function donate(btn, give, amount){
    document.getElementById(btn).addEventListener('click', function(event){
        event.preventDefault();
    
        let showModal = false;
        const addMoneyInput = document.getElementById(give).value;
        const getMoneyInput = document.getElementById('balance').innerText;
        const _addMoneyInput = parseFloat(addMoneyInput);
        const _getMoneyInput = parseFloat(getMoneyInput);

        if(isNaN(_addMoneyInput) || _addMoneyInput < 0){
            alert('Invalid input format');
            return;
        }

        if(_addMoneyInput > _getMoneyInput){
            alert('Not enough balance');
            return;
        }
        
        const newBalance1 = _getMoneyInput - _addMoneyInput;
        showModal = true;

        const balance = document.getElementById(amount).innerText;
        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        document.getElementById(amount).innerText = newBalance;
        document.getElementById('balance').innerText = newBalance1;

        if(showModal == true)
            document.getElementById('modal').checked = true;
    })
}