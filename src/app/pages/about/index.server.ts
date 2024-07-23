import { PageServerLoad } from '@analogjs/router';

export async function load({ params }: PageServerLoad) {
  const aboutResponse = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/about'
  );
  const aboutData = await aboutResponse.json();

  const skillsResponse = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/skills'
  );
  const skillsData = await skillsResponse.json();

  return {
    about: aboutData,
    skills: skillsData
  }
}
