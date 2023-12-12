import { buildClient } from '@datocms/cma-client-browser';
const client = new buildClient({ apiToken: 'ec1e1d0e08445b13ea2d78bf467b27',});

export async function getCareers() {
    try {
        const items = await client.items.list({
            filter: {
                type: 'career',
            },
        });

        const careers = items.map(item => {
        return ({
            id: item.number,
            title: item.title,
            details: item.description,
        });
    });

        console.log('Careers:', careers);
        return careers;
    } catch (error) {
        console.error('Error:', error);
    }
}