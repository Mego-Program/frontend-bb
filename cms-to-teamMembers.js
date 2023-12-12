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
        const teamMembers = [];
        for (let item of items) {
            let imageData = await getImageData(item.picture?.uploadId);
            teamMembers.push({
                picture: imageData?.url,
                name: item.name,
                jtitle: item.jtitle,
            })
        }

        console.log('Team Members:', teamMembers);
        return teamMembers;
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









