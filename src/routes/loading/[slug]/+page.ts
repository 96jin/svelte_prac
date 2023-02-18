import { redirect } from "@sveltejs/kit"

interface paramsType {
  slug?: string
}

interface result {
  post: {
    title?: string
    content?: string
  }
}

export async function load({ params, parent }: {params: paramsType, parent: any} ): Promise<result> {
  console.log('parameter print: ',params)
  console.log('parent data print: ',await parent())
  if(params.slug === 'hello'){
    throw redirect(307, '/');
  }
  return {
    post: {
      title: `Title for ${params.slug} goes here`,
      content: `Content for ${params.slug} goes here`
    }
  };
}