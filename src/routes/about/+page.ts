// export async function load(){
//   let res = await fetch('https://dummyjson.com/products/1')
//   let result = await res.json()
//   return result
// }
export const load = () => {
  return{
    status:200,
    body: 'Hello from the API'
  }
}