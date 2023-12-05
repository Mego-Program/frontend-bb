const API_TOKEN = 'b3d15d163318321dd591d7733a32ee';
const ENDPOINT = 'https://mego-program.admin.datocms.com/editor/item_types/fqN6Cg0rRGmc1MlsmsAeyg/items';

async function createContact(contactData) {
    const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            data: {
                type: 'contact', // Replace 'contact' with the actual model type identifier in DatoCMS
                attributes: contactData,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export { createContact };
