
const URL = `https://ikuvibes.vercel.app/api/events`;

const getEvents = async () => {
    const res = await fetch(`${URL}`);

    return res.json();
};

export default getEvents;
