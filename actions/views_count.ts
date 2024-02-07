
const URL = `https://ikuvibes.vercel.app/api/views`;

const getViewsCount = async (id: string) => {
    const res = await fetch(`${URL}/${id}`);

    const data = await res.json();
    console.log("COUNT", data)

    return data;
};

export default getViewsCount;