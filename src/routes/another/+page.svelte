<script>
  /**
   * @type {{ sections: any; }}
   */
   export let data;
  console.log(data)
</script>

<div>
  <h1>Another page</h1>
  <h3>Data from Parent Page</h3>
  {#each data.sections as item}
    {item.slug} , {item.title}
    <br/>
  {/each}
</div>