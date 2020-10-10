Use mysql para realizar la aplicacion, por tanto es necesario correr un servidor de mysql y apache para que hagan las solicitudes pertinentes a la base de datos.
Use Xampp para usar la computadora como servidor, con sus puertos predeterminados. 80, 443 de apache y 3306 mysql.

Estas instrucciones vienen dadas en el caso de que el manejador de paquetes usados sea npm.

Para installar, es necesario abrir la consola y usar git clone https://github.com/wilberpulido/registroEmisionCO2.git

Una vez descargada la aplicacion desde github, por consola ingresar a la carpeta que se crea y correr los siguientes comandos.

npm install

npm run iclient

y luego.

npm run iserver.

El cliente corre en http://localhost:3000/
El servidor corre en http://localhost:5000/

Y para correr ambos puertos, esta configurado para correr con: 

npm run start

Para que el servidor se conecte apropiadamente, deben estar corriendo el servidor mysql y apache.

No logre terminar con la consigna, tuve algunos problemas con las respuestas del servidor para evitar duplicar los viajes, 
Asumi ciertas condiciones para evitar la duplicacion de viajes, podrian mejorar las condiciones agregando "idaVuelta" como condicion extra de busqueda en la base de datos.

Alcance a solicitar a la base de datos todos los viajes realizados, el servidor devuelve todos los viajes dando click en "BUSCAR VIAJES" y los imprime en la consola.
Como del servidor llega un array de objetos que lo llamare "datos".

Lo idea seria escribir un componente contenedor que representa las lista entera y otro componene "Elemento" que seria
un solo viaje o elemento,

Luego retornar el componente contenedor escribiendo dentro un metodo del estilo datos.map(viaje=> {
  return <Elemento nombreTrabajadores = viaje.nombreTrabajadores .... />
  }) 
Y en el archivo del componente <Elemento/> usar esas props para imprimir la data que llega del servidor segun mejor se vea.

Mi idea era hacer el componente contenerdor con las etiquetas <ul> </ul> usando props.children, y el componente Elemento con la etiqueta <li></li>
ordenado al data pasada por props.



