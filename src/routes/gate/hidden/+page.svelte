<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  onMount(() => {
    const next = $page.url.searchParams.get('next') ?? '1';

    const a = document.createElement('a');
    a.href = '/st.jpg';
    a.download = 'st.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
</script>


<div class="min-h-screen flex items-center justify-center bg-gray-900">
  <div class="w-full max-w-md text-gray-300 bg-gray-800 p-10 rounded-2xl space-y-8">
  <h1 class="text-5xl font-bold">you find the surprise huh</h1>
  </div>
</div>
