
import qs from "query-string";

const URL = `https://ikuvibes.vercel.app/api/products`;

interface Query {
    query?: string;
    category?: string;
    genre?: string;
    page?: number;
    limit?: number;
}

const getProducts = async (query: Query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            query: query.query,
            category: query.category,
            genre: query.genre,
            page: query.page,
            limit: query.limit
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;
