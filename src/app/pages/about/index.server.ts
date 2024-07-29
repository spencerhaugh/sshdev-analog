import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../../../refs";
import { AboutObject, SkillObject } from "../../../models/about.model";

export async function load({ params }: PageServerLoad) {
  const aboutResponse = await fetch(
    `${BASE_DATA_URL}/about`
  );
  const aboutData: AboutObject[] = await aboutResponse.json();

  const skillsResponse = await fetch(
    `${BASE_DATA_URL}/skills`
  );
  const skillsData: SkillObject[] = await skillsResponse.json();

  return { aboutData, skillsData };
}
