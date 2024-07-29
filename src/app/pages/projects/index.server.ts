import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../../../refs";
import { ProjectObject } from "../../../models/project.model";

export async function load({ params }: PageServerLoad) {
  const projectResponse = await fetch(
    `${BASE_DATA_URL}/projects`
  );
  const projectData: ProjectObject[] = await projectResponse.json();

  return { projectData };
}
