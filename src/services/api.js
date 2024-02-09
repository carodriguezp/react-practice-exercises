const callToApi = () => {

    // Llamamos a la API
    return fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1/products.json")
        .then((response) => response.json())
        .then(({ items }) => items); //items es el array de objetos
};

export default callToApi;