import { FLAG_1, FLAG_2, FLAG_3 } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

const FLAGS: Record<number, string> = {
  1: FLAG_1,
  2: FLAG_2,
  3: FLAG_3,
};

export const load: PageServerLoad = async ({ url }) => {
  const stage = Number(url.searchParams.get('stage') ?? '1');
  return { stage };
};

export const actions: Actions = {
  default: async ({ request, url }) => {
    const data = await request.formData();
    const flag = data.get('flag') as string;
    const stage = Number(url.searchParams.get('stage') ?? '1');

    if (flag === FLAGS[stage]) {
      if (stage === 1) {
        redirect(303, '/gate/execution?next=2');
      } else if (stage === 2) {
        redirect(303, 'gate/hypereality?next=3')
      } else {
        redirect(303, '/');
      }
    }

    return fail(400, { error: true, stage });
  }
};
