import { FLAG_1, FLAG_2, FLAG_3, SECRET } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

const FLAGS: Record<number, string> = {
  1: FLAG_1,
  2: FLAG_2,
  3: FLAG_3,
  11300111: SECRET,
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
        redirect(303, '/gate/stage2?next=2');
      } else if (stage === 2) {
        redirect(303, '/gate/stage3?next=3')
      } else if (stage === 11300111) {
        redirect(303, '/gate/hidden?next=11300111')
      } else if (stage === 3) {
        redirect(303, '/gate/finale')
      } else {
        redirect(303, '/');
      }
    }

    return fail(400, { error: true, stage });
  }
};
