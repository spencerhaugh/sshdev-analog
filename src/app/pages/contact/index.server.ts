import { PageServerLoad } from '@analogjs/router';
import {ContactObject} from "./index.page";
import { BASE_DATA_URL } from "../../../refs";

export async function load({ params }: PageServerLoad) {
  const response = await fetch(
    `${BASE_DATA_URL}/contact`
  );
  const contactData: ContactObject[] = await response.json();

  return { contactData };
}
