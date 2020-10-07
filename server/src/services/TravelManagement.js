const { purge } = require('../controller/travelRegistration');
const db = require('./../config/db');

class TravelManagement {

    
    async createTravel(travel){
        
        let kgCO2Viaje = 0; 
        let kgCO2Km = 0;

        switch (travel.medioTransporte) {
            case "Metro (Tren, Subway, Subterráneo)":
                kgCO2Km = 0.033;
                break;
            case "Auto (Gasolina)": 
                kgCO2Km = 0.21;
                break;
            case "Camioneta (Diésel)":
                kgCO2Km = 0.249;
                break;
            case "Motocicleta (Gasolina)": 
                kgCO2Km = 0.092;
                break;
            case "Bus Transantiago (Transporte público)":
                kgCO2Km = 0.039;
                break;
            case "Bus (Vehículo privado)": 
                kgCO2Km = 0.012;
            break;
            case "Avión (Chile)":
                kgCO2Km = 0.279;
                break;
            case "Avión (Internacional)": 
                kgCO2Km = 0.179;
                break;
            case "Caminando": 
                kgCO2Km = 0;
                break;
            default:
                break;
        }
                
        if (travel.idaVuelta) {
            kgCO2Viaje = travel.cantidadKilometros * kgCO2Km * 2;
        } else{
            kgCO2Viaje = travel.cantidadKilometros * kgCO2Km * 1;
        }
        
        if (!travel.nombreTrabajadores || !travel.numeroTrabajadores || !travel.fecha || !travel.DireccionPartida || !travel.DireccionLlegada || !travel.medioTransporte || !travel.cantidadKilometros || typeof travel.idaVuelta !== 'boolean'){
            return "falta algun dato";
        }
        
        let viajeRegistrado = await this.travelFind(travel);

        if(viajeRegistrado){
            return false;
        }
        
        let createTravel = new Promise((resolve,reject)=>{
            
            const sqlCreateTravels ='INSERT INTO travels (nombreTrabajadores,numeroTrabajadores,fecha,DireccionPartida,DireccionLlegada,medioTransporte,cantidadKilometros,idaVuelta,kgCO2Viaje) VALUES (?,?,?,?,?,?,?,?,?)';
            
            return db.query(sqlCreateTravels , [travel.nombreTrabajadores,travel.numeroTrabajadores,travel.fecha, travel.DireccionPartida,travel.DireccionLlegada,travel.medioTransporte,travel.cantidadKilometros,travel.idaVuelta, kgCO2Viaje] , (err,result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(true);
            });
        });

        return createTravel;

    }

    travelFind(travel){

        let travelPromise = new Promise((resolve,reject)=>{

            const sqlSelectTravel = 'SELECT * FROM travels WHERE fecha = ? AND cantidadKilometros = ? AND medioTransporte = ?';
            
            db.query(sqlSelectTravel , [travel.fecha,travel.cantidadKilometros,travel.medioTransporte ] , (err,result) => {
                if (err) {
                    return reject(err);
                }
                if (typeof result[0] !== 'undefined') {
                    return resolve(true);
                } 
                return resolve(false);
            });
            
        })
        
        return travelPromise;
    }

    alltravels(){

        let travelPromise = new Promise((resolve,reject)=>{

            const sqlSelectTravel = 'SELECT * FROM travels';
            
            db.query(sqlSelectTravel , (err,result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
            
        })
        
        return travelPromise;
    }
    
}

module.exports = new TravelManagement;