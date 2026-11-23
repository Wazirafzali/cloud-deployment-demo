export async function GET() {
  const timestamp = new Date().toISOString();

  console.info("[health] Health check requested", {
    timestamp,
  });

  return Response.json(
    {
      status: "ok",
      service: "cloud-deployment-demo",
      timestamp,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
