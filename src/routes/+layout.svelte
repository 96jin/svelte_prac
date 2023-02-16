<!-- 글로벌로 스타일을 입히고 싶을때, routes 디렉토리에 +layout.svelte 생성 후 css import 한다. 그리고 slot 태그 -->
<script>
  import "../app.css"
</script>

<main>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/another">another</a>
  </nav>
  <slot />
</main>
