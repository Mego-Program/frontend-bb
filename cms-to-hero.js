import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Hero section.
export async function getHeroSection() {
    try {
        const heroSections = await client.items.all({
            filter: {
                type: 'hero_section',
            }
        });

        const heroSectionsWithPageDetails = await Promise.all(heroSections.map(async (item) => {
            // Fetch the linked "Pages" item by its ID.
            let pageDetails = {};
            if (item.ctaLink) {
                pageDetails = await client.items.find(item.ctaLink);
            }

            return {
                title: item.title,
                description: item.description,
                cta_link: pageDetails // This now contains all the content from the linked "Pages" item.
            };
        }));

        console.log('Hero Sections:', heroSectionsWithPageDetails);
        return heroSectionsWithPageDetails;
    } catch (error) {
        console.error('Error:', error);
    }
}

// getHeroSection();