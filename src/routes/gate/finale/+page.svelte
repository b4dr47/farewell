<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  onMount(() => {
    const next = $page.url.searchParams.get('next') ?? '1';


    setTimeout(500);
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=NTc_WRXsIXYwnil6";
    ;
  });
</script>


<div class="min-h-screen flex items-center justify-center bg-gray-900">
  <div class="w-full max-w-md text-gray-300 bg-gray-800 p-10 rounded-2xl space-y-8">
  <h1 class="text-5xl font-bold">You finished the game!Congrats!</h1>
  </div>
</div>
