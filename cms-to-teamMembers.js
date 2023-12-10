import { SiteClient } from 'datocms-client';
const client = new SiteClient('b3d15d163318321dd591d7733a32ee');

// import { buildClient } from 'datocms-@datocms/cma-client-node';
// const client = new buildClient({ 
//     apiToken: 'b3d15d163318321dd591d7733a32ee',
// });


export async function getTeamMembers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'member',
            },
        });

        const teamMembers = items.map(item => {
        return ({
            picture: item.picture,
            name: item.name,
            jtitle: item.jtitle,
        })});

        console.log('Team Members:', teamMembers);
        return teamMembers;
    } catch (error) {
        console.error('Error:', error);
    }
}
// getTeamMembers();

export async function getDetailes() {
    try {
        const members = await getTeamMembers();
        const details = await client.uploads.find(members[1].picture.uploadId)
        console.log(details);
    } catch (error) {
        
    }

}

getDetailes();








