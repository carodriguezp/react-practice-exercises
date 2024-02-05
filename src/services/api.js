const callToApi = () => {

    // Llamamos a la API
    return fetch("")
        .then((response) => response.json())
        .then((response) => {
            // Cuando responde la API podemos limpiar los datos aquí
            const result = {

            };
            return result;
        });
};

export default callToApi;