import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');


export async function getTeamMembers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'member',
            }
        });

        const teamMembers = items.map(item => ({
            picture: item.picture,
            name: item.name,
            jtitle: item.jtitle,
            department: item.department,
            // sdescription: item.sdescription,
            // fdescription: item.fdescription,
        }));

        console.log('Team Members:', teamMembers);
        return teamMembers;
    } catch (error) {
        console.error('Error:', error);
    }
}

getTeamMembers();

// async function getManagers() {
//     try {
//         const items = await client.items.all({
//             filter: {
//                 type: 'team_member',
//                 fields: {
//                     department: {
//                         eq: 'Managers'
//                     }
//                 }
//             }
//         });

//         const teamMembers = items.map(item => ({
//             picture: item.picture,
//             name: item.name,
//             jobTitle: item.jobTitle,
//             department: item.department,
//             short_description: item.shortDescription,
//             full_description: item.fullDescription
//         }));

//         console.log('Team Members:', teamMembers);
//         return teamMembers;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }







