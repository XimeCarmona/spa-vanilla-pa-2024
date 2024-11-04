const API = 'https://api.spacexdata.com/v5/launches';

const getData = async (id = null) => {
    const apiURL = API;

    try {
        const response = await fetch(apiURL);  // Realiza la solicitud a la API
        const data = await response.json();    // Convierte la respuesta a JSON
        
        if (id) {
            // Si hay un `id` proporcionado, se filtra por él
            const result = data.find(item => item.id === id);

            if (result) {
                console.log(result);   // Mostrar el resultado si se encontró
                return result;         // Devolver solo el objeto con el id buscado
            } else {
                console.log(`No se encontró un elemento con el id: ${id}`);
                return null;           // Devolver null si no se encuentra el id
            }
        } else {
            // Si no se proporciona un `id`, devolver todos los datos
            console.log(data);         // Mostrar todos los datos en la consola
            return data;               // Devolver todos los datos
        }

    } catch(error) {
        console.log('Fetch Error..!!', error);  // Manejo de errores
        return null;  // En caso de error, devolver null
    }
    
};

export default getData;