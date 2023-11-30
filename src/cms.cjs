//const { SiteClient } = require('datocms-client');
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

// Function to get team members from the Managers department.
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


// Function to get team members from the Marketing department.
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


// Function to get team members from the Mentors department.
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
// window.getMentors = getMentors;

// getTeamMembers();
// getManagers();
// getMentors();
// getMarketing();

//*******************************************************************************/

// Customer Reviews.
async function getCustomerReviews() {
    try {
        const items = await client.items.all({
            filter: {
                type: 'customer_review',
                // Additional filter options can be added here.
            }
        });

        const customerReviews = items.map(item => ({
            picture: item.picture,
            name: item.name,
            job: item.job,
            short_description: item.shortDescription,
            full_description: item.fullDescription
        }));

        console.log('Customers Reviews:', customerReviews);
        return customerReviews;
    } catch (error) {
        console.error('Error:', error);
    }
}

// getCustomerReviews();

    // **************Internal Blog.************************** //
async function getInternalBlog(fields = ['title', 'content', 'seo_tag']) {
    try {
        const items = await client.items.all({
            filter: {
                type: 'internal_blog',
            },
            fields: fields
        });

        const internalBlog = items.map(item => {
            let result = {};
            fields.forEach(field => {
                result[field] = item[field];
            });
            return result;
        });

        console.log('Internal Blog:', internalBlog);
        return internalBlog;
    } catch (error) {
        console.error('Error:', error);
    }
}

// getInternalBlog(['title', 'content']); 

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Previous function - gets all the fields with their data.
// async function getInternalBlog() {
//     try {
//         const items = await client.items.all({
//             filter: {
//                 type: 'internal_blog',
//             }
//         });

//         const internalBlog = items.map(item => ({
//             title: item.title,
//             content: item.content,
//             seo_tag: item.seoTag
//         }));

//         console.log('Internal Blog:', internalBlog);
//         return internalBlog;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// getInternalBlog();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


