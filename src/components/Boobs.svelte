<script>
  import { events } from "../store.js";
  import { getCurrentTime } from "../helpers/getDate";
  export let boob;

  const boobs = ["L", "R"];

  function handleClick(item) {
    boob = boob === item ? "" : item;

    const date = new Date();
    const currentEvent = {
      id: date.getTime(),
      time: getCurrentTime(),
      boob: item,
    };

    if (!boob) {
      return;
    }
    if (!$events) {
      events.update(() => JSON.stringify([currentEvent]));
    } else {
      const parseData = JSON.parse($events);
      const arr = [...parseData, currentEvent];
      const removed = arr.slice(-10);

      events.update(() => JSON.stringify(removed));
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
    flex: auto;
    padding: 5rem 0 2rem;
  }
  .breast-circle {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid #03e2fc;
    min-width: 8rem;
    min-height: 8rem;
  }
  .breast-circle.bubble:after {
    content: "";
    background: #f9f9f9;
    position: absolute;
    width: 8rem;
    height: 8rem;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    margin: auto;
    border-radius: 75%;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
  .breast-circle:active:after {
    transform: scale(0);
    opacity: 1;
    transition: 0s;
  }

  .active {
    background-color: #448dfd;
    transition: all 0.3s;
  }
</style>

<div class="container">
  {#each boobs as item (item)}
    <div
      class="breast-circle"
      class:active={boob === item}
      class:bubble={boob === item}
      on:click={() => handleClick(item)}>
      {item}
    </div>
  {/each}
</div>
