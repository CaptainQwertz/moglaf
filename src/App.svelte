<script>
  import Today from "./lib/Today.svelte";

  const adventCalendar = () => {
    alert("test")
  };


</script>

<main>
  <div>
    <h1>Mogli</h1>
  </div>

  <div class="card">
    <button on:click={adventCalendar}>
      Zum Adventskalender
    </button>
    <Today />
  </div>

</main>

<style>
  main div h1 {
    font-size: 60px;
  }

</style>
