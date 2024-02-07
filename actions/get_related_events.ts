
import qs from "query-string";

const URL = `https://ikuvibes.vercel.app/api/related`;

interface Query {
    categoryId?: string;
    eventId?: string;
    page?: number;
    limit?: number;
}

const getRelatedEvents = async (query: Query) => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            eventId: query.eventId,
            page: query.page,
            limit: query.limit
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getRelatedEvents;
