import { SiteClient } from 'datocms-client';
const client = new SiteClient('b3d15d163318321dd591d7733a32ee');

export async function getTeamMembers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'member',
                eq: 'department',
            },
        });

        const teamMembers = [];
        for (let item of items) {
            let imageData = await getImageData(item.picture?.uploadId);
            teamMembers.push({
                picture: imageData?.url,
                name: item.name,
                jtitle: item.jtitle,
                // Y:
                group: determineGroup(item),
                // Y.
            });
        };

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

// Y:
function determineGroup(memberItem) {
  
    if (memberItem.department.includes('Manager')) {
        return 'managers';
    } else if (memberItem.jtitle.includes('Mentor')) {
        return 'mentors';
    } else {
        return 'marketing';
    }
}
// Y.





