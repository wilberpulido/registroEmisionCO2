import React, {useState} from 'react';
import Form from '../../Form/Form';
import LabelTag from '../../LabelTag/LabelTag';
import InputTag from '../../InputTag/InputTag';

function TravelRegister (){
    const styleTitle = {
        textAlign: "center",
        marginTop: "50px",
    }
    const styleSection = {
        margin: "50px 0px 100px 0px",
        display: "flex",
        justifyContent: "center",
    }
    const styleForm = {
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "80px 80px 80px 80px 80px 80px 80px 80px 120px"
    }
    const styleLabel = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    }
    const styleInput = {
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

        const [user,setUser] = useState({
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
        setUser(
            {
            ...user,
            [e.target.id]: e.target.value
            }
        )
    }

    function handlerSubmit(e){

        e.preventDefault();
    
        fetch('/travelRegistration',{
            method:'POST',
            body: JSON.stringify({user}),
            headers: {
            'Content-Type': 'application/json',
            // "accept": "application/json"
            }
        })
        .then(res=> res.json())
        .then(response=> {
            alert('respuesta')
            // history.push('/');
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
                        <div style={styleInput}>
                            <InputTag id="nombreTrabajadores" name="nombreTrabajadores" 
                                placeholder="Juan, Pedro y Maria" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="numeroTrabajadores">
                                Número de trabajadores en el viaje:
                            </LabelTag>
                        </div>
                        <div style={styleInput}>
                            <InputTag id="numeroTrabajadores" name="numeroTrabajadores"
                                placeholder="1" type="number" min="1" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="fecha">
                                Fecha del viaje:
                            </LabelTag>
                        </div>
                        <div style={styleInput}>
                            <InputTag id="fecha" name="fecha"
                                placeholder="06/10/2020" type="date" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="DireccionPartida">
                                Dirección del punto de partida:
                            </LabelTag>
                        </div>
                        <div style={styleInput}>
                            <InputTag id="DireccionPartida" name="DireccionPartida"
                                placeholder="Avenida Ricardo Lyon 1060" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel}>
                            <LabelTag htmlFor="DireccionLlegada">
                                Dirección del punto de llegada:
                            </LabelTag>
                        </div>
                        <div style={styleInput}>
                            <InputTag id="DireccionLlegada" name="DireccionLlegada"
                                placeholder="La niña 2545, Los Condes" type="text" onChange={handlerOnChange}/>
                        </div>

                        <div style={styleLabel} htmlFor="medioTransporte">
                            <LabelTag>Medio de transporte:</LabelTag>
                        </div>
                        <div style={styleInput}>
                            <select id="medioTransporte" name="medioTransporte" 
                                form="registro" style={styleSelect} onChange={handlerOnChange}>
                                <option> Selecciona un medio </option>
                                <option value={0.033}> Metro(Tren,Subway,Subterraneo) </option>
                                <option value={0.21}>Auto(Gasolina)</option>
                                <option value={0.249}>Camioneta(Diésel)</option>
                                <option value={0.092}> Motocicleta(Gasolina)</option> 
                                <option value={0.039}>Bus Transantiago(Transporte público)</option>
                                <option value={0.012}>Bus(Vehículo privado)</option>
                                <option value={0.279}>Avión (Chile) </option> 
                                <option value={0.179}>Avión (Internacional)</option>
                                <option value={0}>Caminando</option>
                            </select>
                        </div>
 
                        <div style={styleLabel} htmlFor="cantidadKilometros">
                        <LabelTag>
                            Cantidad de kilometros
                        </LabelTag>
                        </div>
                        <div style={styleInput}>
                            <InputTag id="cantidadKilometros" name="cantidadKilometros"
                                placeholder="1" type="number" min="1" onChange={handlerOnChange}/>
                        </div>
                        <div style={styleLabel}>
                            <LabelTag>
                                De cual manera se realizo el viaje?
                            </LabelTag>
                        </div>
                        <div style={styleInputRadio} onChange={e=> e.target.id === 'idaVuelta'?setUser({...user, idaVuelta: true}):setUser({...user, idaVuelta: false})}>
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
        </main>
    )
}

export default TravelRegister;