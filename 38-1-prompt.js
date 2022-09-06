// console.log('okk')


//  learning alert modal dom with bom 
const buttonAlertwithalert = () => {

    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('kire ki khobor');
    }
    else {


    }
}





// prompt
const askSomethings = () => {
    const decition = confirm('are you coming to the picnic ?');
    console.log(decition);

    if (decition === true) {

        alert('mama ami tor sathe jabo')
    }
    else {


        console.log('DGM dure giya mor')
    }


}



const getUserinfo = () => {


    const name = prompt('Tell Us Your name')
    // console.log(name);

    if (!!name) // truthy value !!
    {
        console.log('Welcome here ', name);
    }

}




// practice 


const alertbox = () => {

    alert('okkkkkkk paicy ')


}