import React from 'react';

function ViewTravels (){

    async function handlerOnClick(){
    
        await fetch('/travelRegistration')
        .then(res=> res.json())
        .then(response=> {
            console.log(response);
        })

    }

    return (<div>
     <button onClick={handlerOnClick}>
         BUSCAR VIAJES
     </button>
    </div>
    );
}

export default ViewTravels;