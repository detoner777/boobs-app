<script>
  export let time;
  export let boob;
  export let index;
</script>

<style>
  .item {
    font-size: 20px;
    padding: 0.5rem;
    border: 1px solid #03e2fc;
    border-width: 0 0 1px;
    width: 60%;
    margin: 0 auto;
    transition: all 0.3s;
  }
  .active {
    background: rgba(255, 255, 255, 0.1);
    border-width: 0.1px 0;
    transform: scale(1.3);
    margin-bottom: 0.5rem;
    transition: all 0.3s;
  }
</style>

<div class={`item ${index === 0 && 'active'}`}>
  <span>{time}</span>
  <span>{boob}</span>
</div>
