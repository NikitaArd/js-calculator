let term = [];
let not_doble_sbl = ['/', '+', '-', '*'];

function add_symbol(char){
    if((not_doble_sbl.includes(term[term.length - 1]) && not_doble_sbl.includes(char))){
        console.log('not');
    }    
    else{
        if(term.length == 0 && not_doble_sbl.includes(char)){
            console.log('not');
        }else{
            term+=char;
            console.log();
            document.getElementById('screen').innerHTML = term;
        }
    }
}

function equals(){
    document.getElementById('screen').innerHTML = eval(String(term));
    
}

function reset(){
    document.getElementById('screen').innerHTML = term = [];
}