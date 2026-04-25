<script lang="ts">
  import type { PageData, ActionData } from './$types';

  let { data, form }: { data: PageData; form: ActionData } = $props();

  const stage = $derived(form?.stage ?? data.stage);

</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900">
  <div class="w-full max-w-md text-gray-300 bg-gray-800 p-10 rounded-2xl space-y-8">
  <h1 class="text-5xl font-bold">Stage {stage}</h1>

  <form method="POST" action="?stage={stage}">
    <input
      type="flag"
      name="flag"
      class="w-full mb-4 ZmxhZ3t1bDcxbTRfdzM0cDBufQ=="
      placeholder="Submit the flag"
    />
    <button type="submit" class="bg-blue-500 text-white w-full font-medium p-2 rounded-lg">Submit</button>
  </form>

  {#if form?.error}
    <p class="error text-red-400">Incorrect</p>
  {/if}
  </div>
</div>

