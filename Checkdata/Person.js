const userName='SRK';
const age=55;
export{userName,age};

export function add(a,b){
        return a+b;
}

export function greet(){
    return 'Hello its a export file.';
}
export default function getCal(a,b){
    let arr=[a-b,a*b,(a/b).toFixed(2),a+b];
    return arr;
}
