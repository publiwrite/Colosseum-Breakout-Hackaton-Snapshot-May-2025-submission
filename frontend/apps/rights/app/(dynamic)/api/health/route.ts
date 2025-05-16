export async function GET(req: any) {
  return new Response(JSON.stringify({ status: 'healthy' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
