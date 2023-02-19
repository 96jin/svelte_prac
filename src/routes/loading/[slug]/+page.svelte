<script>
  /**
   * @type {{ post: { title?: string; content?: string; }, sections: any }}
   */
  export let data;
  console.log('return data print received from loading/[slug]/page.ts',data)
</script>

<h1>Data from This Page</h1>
<h3>{data.post.title}</h3>
<div>{data.post.content}</div>

<h1>Data from Parent Page</h1>
{#each data.sections as item }
  <h3>{item.slug}. {item.title}</h3>
{/each}