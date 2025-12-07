export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '30px' }}>Next.js API Application</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Available Endpoints:</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            <strong>GET /api/users</strong> - Returns dummy user data
          </li>
          <li>
            <strong>GET /api/health</strong> - Health check endpoint (returns 200 OK)
          </li>
        </ul>
      </div>
    </main>
  );
}

