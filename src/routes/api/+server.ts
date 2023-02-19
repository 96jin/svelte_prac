export const GET = async () => {
  console.log("server.ts");
  return new Response(
    JSON.stringify({ status: 200, body: "Hello from the API" })
  );
};
// export function GET() {
//   return new Response(
//     JSON.stringify({
//       name: 'kim'
//     })
//     )
//   }
