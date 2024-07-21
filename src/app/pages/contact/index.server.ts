import { PageServerLoad } from '@analogjs/router';

export async function load({ params }: PageServerLoad) {
  const response = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/contact'
  );
  const data = await response.json();

  return data;
}
