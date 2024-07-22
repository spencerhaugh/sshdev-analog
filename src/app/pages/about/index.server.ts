import { PageServerLoad } from '@analogjs/router';

export async function load({ params }: PageServerLoad) {
  const response = await fetch(
    'https://portfolio-server-production-c31f.up.railway.app/about'
  );
  const data = await response.json();

  return data[0];
}
