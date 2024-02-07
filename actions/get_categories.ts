
const URL = `https://ikuvibes.vercel.app/api/categories`;

const getCategory = async () => {
    const res = await fetch(`${URL}`);

    return res.json();
};

export default getCategory;
