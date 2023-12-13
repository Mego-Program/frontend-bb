import { SiteClient } from 'datocms-client';
const client = new SiteClient('ec1e1d0e08445b13ea2d78bf467b27');

export async function getHeroSection() {
    try {
        const heroSections = await client.items.all({
            filter: {
                type: 'hero_section',
            },
        });

        const items = heroSections[0];
        return {
            desc1: items.desc1,
            desc2: items.desc2,
            desc3: items.desc3,
            desc4: items.desc4,
            button: items.button,
        };

    } catch (error) {
        console.error('Error:', error);
    }
}
