<!-- about 폴더를 만들어주고 +page.svelte 파일을 만들어 라우팅한다. -->
<script>
  // 어노테이션 질문
  /** @type {{ status: number; body: string; }} */
  export let data;
  console.log(data);
</script>

<h1>about page</h1>
<h2>Data from This Page</h2>
<h3>{data.status}, {data.body}</h3>
