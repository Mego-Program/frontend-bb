// Plans Page.
export async function getPlansPage(departmentName) {
    try {
        const queryFilter = {
            filter: {
                type: 'plans_page',
            }
        };
        
        // Add department filter if a department name is provided
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

// Example usage
//getPlansPage('Pro'); 
