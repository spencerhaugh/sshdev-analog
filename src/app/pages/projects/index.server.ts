import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../index.page";

export async function load({ params }: PageServerLoad) {
  const projectResponse = await fetch(
    `${BASE_DATA_URL}/projects`
  );
  return await projectResponse.json();
}
