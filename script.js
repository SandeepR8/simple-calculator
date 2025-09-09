const buttons_values=[
    'AC','%','DE','/',
    '7','8','9','x',
    '4','5','6','-',
    '1','2','3','+',
    '00','0','.','='
];

let A=0;
let operator=0;
let B=0;

const op=['/','x','-','+'];
const samecolorrow=['AC','%','DE','/','x','-','+','.'];

buttons_values.forEach((value)=>{
    
    const btn=document.createElement('button');

    btn.textContent=value;
    btn.id='cal-btn';
    if (samecolorrow.includes(value)){
        btn.style.backgroundColor='grey';   
        btn.style.color='white';
        if(value === '.'){
            btn.style.backgroundColor='rgb(60, 54, 54)';

        }
    }
    else if( value == '='){
        btn.style.backgroundColor='orange'
        btn.style.color='white';
    }

  

    

    btn.addEventListener('click',()=>{

            const input=document.querySelector('.input');
            const lastChar = input.value.slice(-1);
          
        if (op.includes(value) && op.includes(lastChar)) {
            return;
        }

        if (input.value === '' && value === '0') {
            return;
        }

        if (value === '.') {
            if (input.value.includes('.')) {
                return;
            }
        }

        input.value +=value;

        if (op.includes(value) && op.includes(input.value.slice(-1))) {
            return;
        }
        


        
        //operation using operator and operands
        if (value === '=') {

            
            let expression = input.value.slice(0, -1); 
            
            let operatorFound = op.find(opr => expression.includes(opr));
        
            if (!operatorFound);
        
            let parts = expression.split(operatorFound);
            A = parts[0];
            B = parts[1];
            let result;

        
            switch (operatorFound) {
                case '+':
                    result = Number(A) + Number(B);
                    break;
                case '-':
                    result = Number(A) - Number(B);
                    break;
                case 'x':
                    result = Number(A) * Number(B);
                    break;
                case '/':
                    result = Number(B) !== 0 ? Number(A) / Number(B) : 'Error';
                    break;
                default:
                    result = '';
            }
            input.value = result
            A = 0; B = 0; operator = 0;
            
        }
        
  



        if (samecolorrow.includes(value)){
            if (value === 'AC'){
                input.value='';
                A=0;
                B=0;
                operator=0;
            }
            else if(value === 'DE'){
                input.value=input.value.slice(0,-3);
                
            }
            else if(value === '%'){
                input.value=`${(Number(input.value.slice(0,-1))/100)}%`;
            }
            else if (value === '.' && input.value.includes('.')) {
                return; 
                }


        }
    });






    const div=document.querySelector('.btns');
    div.appendChild(btn);

});






