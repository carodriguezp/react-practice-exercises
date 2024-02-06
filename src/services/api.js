const callToApi = (searchName) => {
    // Llamamos a la API
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`) // Este 5 es el id de Leia Skywalker
        .then((response) => response.json())
        .then((response) => {

            // Cuando responde la API podemos limpiar los datos aquí
            const result = response.map(({ score, show }) => {

                {/*como show esta entre llaves accedo directamente a la propiedad show del objeto */ }
                return {
                    score,
                    name: show.name,
                };
            });
            return result;
        });
};

export default callToApi;