<script>
  import { page } from "$app/stores";
  // console.log($page)
</script>

<h1>{$page.status}: {$page.error && $page.error.message}</h1>
<h2>Error Page</h2>
