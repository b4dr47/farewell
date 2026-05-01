<script lang="ts">
  import type { PageData, ActionData } from './$types';

  let { data, form }: { data: PageData; form: ActionData } = $props();

  const stage = $derived(form?.stage ?? data.stage);

  let showHint = $state(0);
  const hints: Record<number, string> = {
    1: 'CÆSARbase8^2',
    2: 'strings and xxd may help you',
    3: 'what is RSA encryption',
  };
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900">
  <div class="w-full max-w-md text-gray-300 bg-gray-800 p-10 rounded-2xl space-y-8">
  <h1 class="text-5xl font-bold">Stage {stage}</h1>
  <button class="hint-btn font-bold" onclick={() => showHint = !showHint}>
    {showHint ? 'Hide Hint' : 'Show Hint'}
  </button>
  {#if showHint}
    <p class="hint font-bold">{hints[stage]}</p>
  {/if}
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

