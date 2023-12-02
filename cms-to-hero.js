import { SiteClient } from 'datocms-client';

const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

// Hero section.
export async function getHeroSection(titleName) {
    try {
        const heroSections = {
            filter: {
                type: 'hero_section',
            }
        };

        if (titleName) {
            heroSections.filter.fields = {
                title: {
                    titleName
                }
            };
        }

       const items = await client.items.all(heroSections);
    

    console.log(items);
    return items;
} catch (error) {
    console.error('Error:', error);
}
}

// getHeroSection();