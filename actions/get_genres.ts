
const URL = `https://ikuvibes.vercel.app/api/genres`;

const getGenre = async () => {
    const res = await fetch(`${URL}`);

    return res.json();
};

export default getGenre;
