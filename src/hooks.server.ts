export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/custom')) {
    return new Response('custom response');
  }
  const response = await resolve(event);
  response.headers.set('custom-headers',"potato")
  console.log(response.headers)
  return response;
}