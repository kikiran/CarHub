export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'a97669d500msh2d4d015041f8ec0p139953jsn311d6f0762d4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=BMW',
        {
            headers: headers
        }
    );
    const result = response.json();
    return result;
}
