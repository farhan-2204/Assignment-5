let myBalance = 12000;

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
        myBalance = newBalance1;

        //history section
        document.getElementById('not-found').classList.add('hidden');
        let historyText = _addMoneyInput + ' Taka is Donated for ';

        if(give === 'donate-feni')
            historyText += 'Flood Relief at Feni, Bangladesh';
        else if (give === 'donate-noakhali') 
            historyText += 'Flood Relief at Noakhali, Bangladesh';
        else if(give === 'donate-quota')
            historyText += 'Aid for Injured in the Quota Movement, Bangladesh';

        
        let p = document.createElement('div');
        let date = new Date();

        p.innerHTML += `<div class="border border-gray-300 rounded-2xl flex flex-col mx-[9vw] mb-6 p-6 gap-6 lg:gap-2">
            <div>${historyText}</div>
            <div class="text-[16px] font-semibold">
                Date: ${date};
            </div>
        </div>`

        document.getElementById('history').appendChild(p);

        //modal section
        if(showModal == true)
            document.getElementById('modal').checked = true;
    })
}

function toggle(id1, id2, id11, id22){
    document.getElementById(id1).addEventListener('click', function(){
        document.getElementById(id22).classList.add('hidden');
        document.getElementById(id11).classList.remove('hidden');
    
        document.getElementById(id1).classList.add('bg-[#B4F461]', 'text-black', 'border-none');
        document.getElementById(id1).classList.remove('bg-white', 'text-gray-500', 'border-gray-400');
        document.getElementById(id2).classList.add('bg-white', 'text-gray-500', 'border-gray-400');
        document.getElementById(id2).classList.remove('bg-[#B4F461]', 'text-black', 'border-none');

        if(id11 === 'history')
            document.getElementById('footer').classList.add('hidden');
        else
        document.getElementById('footer').classList.remove('hidden');
    })
}