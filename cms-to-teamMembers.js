import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Team Members.
async function getTeamMembers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'team_member',
                fields: {

                }
            }
        });

        const teamMembers = items.map(item => ({
            picture: item.picture,
            name: item.name,
            jobTitle: item.jobTitle,
            department: item.department,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Team Members:', teamMembers);
        return teamMembers;
    } catch (error) {
        console.error('Error:', error);
    }
}

// 
async function getManagers() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'team_member',
                fields: {
                    department: {
                        eq: 'Managers'
                    }
                }
            }
        });

        const teamMembers = items.map(item => ({
            picture: item.picture,
            name: item.name,
            jobTitle: item.jobTitle,
            department: item.department,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Team Members:', teamMembers);
        return teamMembers;
    } catch (error) {
        console.error('Error:', error);
    }
}


// Getting Marketing team members.
async function getMarketing() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'team_member',
                fields: {
                    department: {
                        eq: 'Marketing'
                    }
                }
            }
        });

        const getMarketing = items.map(item => ({
            picture: item.picture,
            name: item.name,
            jobTitle: item.jobTitle,
            department: item.department,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Team Members:', getMarketing);
        return getMarketing;
    } catch (error) {
        console.error('Error:', error);
    }
}


// Getting Mentors department.
async function getMentors() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'team_member',
                fields: {
                    department: {
                        eq: 'Mentors'
                    }
                }
            }
        });

        const getMentors = items.map(item => ({
            picture: item.picture,
            name: item.name,
            jobTitle: item.jobTitle,
            department: item.department,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Team Members:', getMentors);
        return getMentors;
    } catch (error) {
        console.error('Error:', error);
    }
}





 


