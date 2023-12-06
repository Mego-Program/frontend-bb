import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Our Contact Information.
export async function getContactInfo() {
    try {
        const records = await client.items.all({
            filter: {
                type: 'contact',
            },
        });
        console.log(records);

        const contactInfo = records[0];
        return {
            phone1: contactInfo.phone1,
            phone2: contactInfo.phone2,
            phone3: contactInfo.phone3,
            email: contactInfo.email,
            address: contactInfo.address,
            address1: contactInfo.address1,
            address2: contactInfo.address2,
            address3: contactInfo.address3,
        };

    } catch (error) {
        console.error('Error:', error);
    }
}
getContactInfo();