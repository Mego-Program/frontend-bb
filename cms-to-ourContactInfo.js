import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Our Contact Information.
export async function getContactInfo(titleName) {
    try {
        const contactInfo = {
            filter: {
                type: 'contact_us'
            }
        };

        if (titleName) {
            contactInfo.filter.fields = {
                title: {
                    titleName
                }
            };
        }

        const items = await client.items.all(contactInfoFilter);

        console.log(items);
        return items;
    } catch (error) {
        console.error('Error:', error);
    }
}
