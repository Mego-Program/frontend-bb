import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Plans Page.
export async function getPlansPage(departmentName) {
    try {
        const queryFilter = {
            filter: {
                type: 'plans_page',
            }
        };
        
        if (departmentName) {
            queryFilter.filter.fields = {
                department: {
                    eq: departmentName
                }
            };
        }

        const items = await client.items.all(queryFilter);

        console.log(items);
        return items;
    } catch (error) {
        console.error('Error:', error);
    }
}

//getPlansPage('Pro'); 
