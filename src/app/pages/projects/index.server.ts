import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../../../refs";

export async function load({ params }: PageServerLoad) {
  const projectResponse = await fetch(
    `${BASE_DATA_URL}/projects`
  );
  const projectData = await projectResponse.json();

  return { projectData };
}
