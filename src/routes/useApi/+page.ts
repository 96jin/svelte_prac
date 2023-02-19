export async function load({fetch}: {fetch: Function}){
  let result = await fetch('../api').then((res: any)=>res.json())
  console.log(result)
  return result
}