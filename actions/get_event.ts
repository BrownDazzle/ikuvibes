
const URL = `https://ikuvibes.vercel.app/api/products`;

const getProduct = async (id: string) => {
    try {

        const res = await fetch(`${URL}/${id}`);

        if (!res.ok) {
            console.log("EVENT_ERR", `Error response: ${res.status} ${res.statusText}`);
            return null; // or throw an error, depending on your requirements
        }

        const data = await res.json();
        console.log("GOOO__", data)

        return data
    } catch (error) {
        console.log("EVENT_ERR", error)
    }
};

export default getProduct;
