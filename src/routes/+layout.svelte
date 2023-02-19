<!-- 글로벌로 스타일을 입히고 싶을때, routes 디렉토리에 +layout.svelte 생성 후 css import 한다. 그리고 slot 태그 -->
<script>
  import "../app.css"
</script>

<main>
  <nav>
    <a href="/">Home</a>
    <a href="/about">about</a>
    <a href="/api">api</a>
    <a href="/useApi">use api</a>
    <a href="/another">another</a>
    <a href="/loading">loading</a>
  </nav>
  <slot />
</main>
