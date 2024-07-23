import { PageServerLoad } from '@analogjs/router';

export async function load({ params }: PageServerLoad) {
  const projectResponse = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/projects'
  );
  const projectData = await projectResponse.json();

  return { projectData };
}
