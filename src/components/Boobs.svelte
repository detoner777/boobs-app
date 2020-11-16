<script>
  import { events } from "../store.js";
  import { getCurrentTime } from "../helpers/getDate";
  export let boob;

  const boobs = ["L", "R"];

  function handleClick(item) {
    boob = boob === item ? "" : item;

    const currentEvent = {
      id: events.length || 0,
      time: getCurrentTime(),
      boob: item,
    };

    const parseData = JSON.parse($events);

    if (!boob) {
      return;
    }
    if (!$events) {
      events.update(() => JSON.stringify([currentEvent]));
    } else {
      events.update(() => JSON.stringify([...parseData, currentEvent]));
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    flex: auto;
  }
  .breast-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #03e2fc;
    min-width: 8rem;
    min-height: 8rem;
  }

  .active {
    background-color: #448dfd;
  }
</style>

<div class="container">
  {#each boobs as item (item)}
    <div
      class="breast-circle"
      class:active={boob === item}
      on:click={() => handleClick(item)}>
      {item}
    </div>
  {/each}
</div>
