import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Plans Page.
export async function getPlansPage(titleName) {
    try {
        const queryFilter = {
            filter: {
                type: 'plans_page',
            }
        };
        
        if (titleName) {
            queryFilter.filter.fields = {
                title: {
                    titleName
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

// getPlansPage(); 
