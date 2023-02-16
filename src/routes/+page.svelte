<script>
  // @ts-ignore
  import TodoItem from '$lib/todo-item.svelte'
  // 경로 설정할 때 $ 표시로 해도 된다.
  const title = "Todos | New"
</script>

<style>
  .todos{
    width:100%;
    max-width: 42rem;
    margin:4rem auto 0;
  }

  .new{
    margin:0 0 0.5rem 0;
  }
  
  .new input{
    font-size: 28px;
    width:100%;
    padding: 0.5em 1em 0.3em 1em;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.05);
    border-radius: 8px;
    text-align: center;
  }

  /* todos 클래스에 있는 input 과 전역적인 input 에 적용 */
  .todos :global(input){
    border: 1px solid transparent;
  }

  .todos :global(input:focus-visible){
    box-sizing: inset 1px 1px 6px rgba(0,0,0,0.1);
    border: 1px solid #ff3e00 !important;
    outline:none;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>
  <form class="new" action="" method="" >
    <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo">
  </form>
  <TodoItem/>
</div>

