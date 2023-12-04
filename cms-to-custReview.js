import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Customer Reviews.
async function getCustomerReviews() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'customer_review',
                // Additional filter options can be added here.
            }
        });

        const customerReviews = items.map(item => ({
            picture: item.picture,
            name: item.name,
            job: item.job,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Customers Reviews:', customerReviews);
        return customerReviews;
    } catch (error) {
        console.error('Error:', error);
    }
}
