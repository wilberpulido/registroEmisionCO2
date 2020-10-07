import React from 'react';
import Button from '../../Button/Button'

function HomePage (){

    const styleTitle = {
        textAlign: "center",
        gridColumnStart: 1,
        gridColumnEnd: 3,
    }
    const styleSection = {
        marginTop: "150px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "80px 120px"
    }
    const styleOption = {
        padding: "0px 15px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "60px 60px",
        fontSize: "18px",
        textAlign: "center",
    }
    const styleLink = {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",

    }
    
    return (

        <main>
            <section style={styleSection}>
            <h1 style={styleTitle}>Bienvenidos al sistema de registro viajes por CO2</h1>
            <div style={styleOption}>
                <p>Si desea registrar un viaje realizado, debe dar click en el boton registrar:</p>
                <div style={styleLink}>
                    <Button path="/travelRegister">
                    Registrar
                    </Button>
                </div>
            </div>
            <div style={styleOption}>
                <p>Si desea ver los viajes realizados y su respectiva emision de CO2 debe dar click en registro de viajes:</p>
                <div style={styleLink}>
                    <Button path="/viewTravels">
                    Registro de viajes
                    </Button>
                </div>
            </div>

            </section>
        </main>

    )
}

export default HomePage;