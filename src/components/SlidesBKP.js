import React, {useState} from 'react';

function Slides({slides}) { 
    const slidesArray = slides;
    var iterador = slidesArray.values();

  //const [testa, setTesta] = useState(null);


    const arrayPrueba = [1,2,3,4,5,6,7,8,9];
    //const [arrayPrueba, setArraPrueba] = useState([1,2,3,4,5,6,7,8,9]);
    var modi = arrayPrueba.values();
    var testo; //= modi.next().value;
 


     function actNumero() {
        testo = modi.next().value;
       // setTesta(testo);
       // console.log(testo);
        
        /* for (let iterator of testo) {
            //iterator = testo.next().value;
            console.log(iterator);
            
        } */

   
    } 

 const onClick = () => {
   // console.log(iterador.next().value);
    //setTitulo(iterador.next().value);
    //actualizaTitulo();
    //console.log(titulo);

    //let testo = arrayPrueba.values().next().value;
    //setTesta(testo);
    actNumero();
    console.log("Valor de numero: ", testo);
    
 }




    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small" onClick={onClick}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{testo}</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
