import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../index.page";

export async function load({ params }: PageServerLoad) {
  const aboutResponse = await fetch(
    `${BASE_DATA_URL}/about`
  );
  const aboutData = await aboutResponse.json();

  const skillsResponse = await fetch(
    `${BASE_DATA_URL}/skills`
  );
  const skillsData = await skillsResponse.json();

  return [aboutData, skillsData];
}
