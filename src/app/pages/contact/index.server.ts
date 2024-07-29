import { PageServerLoad } from '@analogjs/router';
import { BASE_DATA_URL } from "../../../refs";
import { ContactObject } from "../../../models/contact.model";

export async function load({ params }: PageServerLoad) {
  const response = await fetch(
    `${BASE_DATA_URL}/contact`
  );
  const contactData: ContactObject[] = await response.json();

  return { contactData };
}
