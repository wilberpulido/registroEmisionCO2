import React, {useState} from 'react';
import Form from '../../Form/Form';
import LabelTag from '../../LabelTag/LabelTag';
import InputTag from '../../InputTag/InputTag';
import Button from '../../Button/Button';


function TravelRegister (){
    const styleTitle = {
        textAlign: "center",
        marginTop: "50px",
    }
    const styleSection = {
        margin: "50px 0px",
        display: "flex",
        justifyContent: "center",
    }
    const styleForm = {
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "80px 80px 80px 80px 80px 80px 80px 80px 120px"
    }
    const styleLabel = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }
    const styleFlexCenter = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const styleSelect = {
        fontSize: "1rem"
    }
    const styleInputRadio = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px 40px",
    }
    const styleConteinerButton = {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const styleButton = {
        margin: "0px",
        width: "135px",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: "rgb(78, 81, 241)",
        border: 'none',
        fontSize: '22px',
        }
    const styleConteiner = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "40px"
    }

        const [travel,setTravel] = useState({
            nombreTrabajadores: '',
            numeroTrabajadores: '',
            fecha: '',
            DireccionPartida: '',
            DireccionLlegada: '',
            medioTransporte: '',
            cantidadKilometros: '',
            idaVuelta: '',
          });

    function handlerOnChange(e){
        setTravel(
            {
            ...travel,
            [e.target.id]: e.target.value
            }
        )
    }

    async function handlerSubmit(e){

        e.preventDefault();
    
        await fetch('/travelRegistration',{
            method:'POST',
            body: JSON.stringify({travel}),
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then(res=> res.json())
        .then(response=> {
            if (response) {
              return  alert('viaje resgistrado con exito')
            }
           return alert('El viaje ya esta en nuetra base de datos')
        })
        }


    return (
        <main>
            <h1 style={styleTitle}>
                Formulario de registro del viaje
            </h1>
            <section style={styleSection}>
                <Form id="registro" onSubmit={handlerSubmit}>
                    <div style={styleForm}>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="nombreTrabajadores">
                                Nombre de trabajadores en el viaje:
                            </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="nombreTrabajadores" name="nombreTrabajadores" 
                                placeholder="Juan, Pedro y Maria" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="numeroTrabajadores">
                                Número de trabajadores en el viaje:
                            </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="numeroTrabajadores" name="numeroTrabajadores"
                                placeholder="1" type="number" min="1" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="fecha">
                                Fecha del viaje:
                            </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="fecha" name="fecha"
                                placeholder="06/10/2020" type="date" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="DireccionPartida">
                                Dirección del punto de partida:
                            </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="DireccionPartida" name="DireccionPartida"
                                placeholder="Avenida Ricardo Lyon 1060" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="DireccionLlegada">
                                Dirección del punto de llegada:
                            </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="DireccionLlegada" name="DireccionLlegada"
                                placeholder="La niña 2545, Los Condes" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel} htmlFor="medioTransporte">
                            <LabelTag>Medio de transporte:</LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <select id="medioTransporte" name="medioTransporte" 
                                form="registro" style={styleSelect} onChange={handlerOnChange}>
                                <option> Selecciona un medio </option>
                                <option value="Metro (Tren, Subway, Subterráneo)"> Metro(Tren,Subway,Subterraneo) </option>
                                <option value="Auto (Gasolina)">Auto(Gasolina)</option>
                                <option value="Camioneta (Diésel)">Camioneta(Diésel)</option>
                                <option value="Motocicleta (Gasolina)"> Motocicleta(Gasolina)</option> 
                                <option value="Bus Transantiago (Transporte público)">Bus Transantiago(Transporte público)</option>
                                <option value="Bus (Vehículo privado)">Bus(Vehículo privado)</option>
                                <option value="Avión (Chile)">Avión (Chile) </option> 
                                <option value="Avión (Internacional)">Avión (Internacional)</option>
                                <option value="Caminando">Caminando</option>
                            </select>
                        </div>
 
                        <div style={styleLabel} htmlFor="cantidadKilometros">
                        <LabelTag>
                            Cantidad de kilometros
                        </LabelTag>
                        </div>
                        <div style={styleFlexCenter}>
                            <InputTag id="cantidadKilometros" name="cantidadKilometros"
                                placeholder="1" type="number" min="1" onChange={handlerOnChange}/>
                        </div>
                        <div style={styleLabel}>
                            <LabelTag>
                                De cual manera se realizo el viaje?
                            </LabelTag>
                        </div>
                        <div style={styleInputRadio} onChange={e=> e.target.id === 'idaVuelta'?setTravel({...travel, idaVuelta: true}):setTravel({...travel, idaVuelta: false})}>
                            <InputTag id="ida" name="tipoViaje" 
                            type="radio"/>
                            <LabelTag  htmlFor="ida">
                                Ida
                            </LabelTag>
                            <InputTag id="idaVuelta" name="tipoViaje" 
                            type="radio"/>
                            <LabelTag  htmlFor="idaVuelta">
                                Ida y vuelta
                            </LabelTag>
                        </div>

                        <div style={styleConteinerButton}>
                            <button style = {styleButton} type="submit">
                                Enviar
                            </button>
                        </div>

                    </div>
                </Form>
            </section>
            <section style={styleSection}>
                <div style={styleConteiner}>   
                    <div style={styleFlexCenter}>
                        <Button path="/viewTravels">
                            Registro de viajes
                        </Button>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default TravelRegister;