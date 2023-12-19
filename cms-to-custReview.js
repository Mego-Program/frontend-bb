import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

export async function getCustomerReviews() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'customer',
            },
        });

        const customerReviews = [];
        for (let item of items) {
            let imageData = await getImageData(item.picture?.uploadId);
            customerReviews.push({
                picture: imageData?.url,
                name: item.name,
                job: item.job,
            });
        }
        console.log('Customers Reviews:', customerReviews);
        return customerReviews;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function getImageData(uploadId) {
    try {
        const imageData = await client.uploads.find(uploadId);
        if (imageData && imageData.url) {
            return await imageData;
        }

    } catch (error) {
        console.log('error', error);
    }
}

