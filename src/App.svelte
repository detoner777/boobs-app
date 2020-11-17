<script>
  import Item from "./components/Item.svelte";
  import Boobs from "./components/Boobs.svelte";
  import { events } from "./store.js";
  let boob = "";
</script>

<style>
  :global(body) {
    line-height: 1;
    color: white;
    background: #2a4362;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  main {
    text-align: center;
    padding: 2rem 1rem;
    max-width: 320px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: 700px;
    }
  }
</style>

<main>
  <span>Boobs tracker</span>
  <Boobs {boob} />
  <div class="item-container">
    {#if JSON.parse($events)?.length > 0}
      {#each JSON.parse($events).reverse() as event, index (event.id)}
        <Item time={event.time} boob={event.boob} {index} />
      {/each}
    {/if}
  </div>
</main>
