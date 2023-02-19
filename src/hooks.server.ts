import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/loading')) {
    console.log('event url : ',event.url.pathname)
    throw redirect(302,'/');
  }
  const response = await resolve(event);
  console.log('event url : ',event.url.pathname)
  response.headers.set('custom-headers',"potato")
  console.log(response.headers)
  return response;
}