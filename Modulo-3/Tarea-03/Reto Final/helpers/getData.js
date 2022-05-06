export const GetData = async (resource) => {
    const URL = 'http://localhost:3000'

    let res = await fetch(`${URL}/${resource}`);
    let data = await res.json();

    return data
}