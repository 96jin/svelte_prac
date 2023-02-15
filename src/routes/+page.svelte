<script>
  // @ts-ignore
  import TodoItem from '$lib/todo-item.svelte'
  // 경로 설정할 때 $ 표시로 해도 된다.

  const title = "Todos | New"
</script>

<svelte:head>
  <title>{title} | New</title>
</svelte:head>

<h1>{title}</h1>

<form action="" method="" >
  <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo">
</form>

<TodoItem/>