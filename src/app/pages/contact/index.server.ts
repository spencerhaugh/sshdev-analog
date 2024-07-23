import { PageServerLoad } from '@analogjs/router';
import {ContactObject} from "./index.page";

export async function load({ params }: PageServerLoad) {
  const response = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/contact'
  );
  const data: ContactObject[] = await response.json();

  return { contact: data};
}
