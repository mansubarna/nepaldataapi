export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Welcome to NepalData API</h1>
      <br />
      <p>Your gateway to reliable and structured data from Nepal.</p>
      <br />

      <h3>Getting Started</h3>
      <br />

      <p>Use the following endpoints to access our API:</p>
      <br />

      <ul>
        <li>
          <a href="/api/province" target="_blank" rel="noopener noreferrer">
            <code>/api/province</code>
          </a> - Fetch all provinces
        </li>
        <li>
          <a href="/api/province/1" target="_blank" rel="noopener noreferrer">
            <code>/api/province/1</code>
          </a> - Fetch details of province 1
        </li>
        <li>
          <a href="/api/district" target="_blank" rel="noopener noreferrer">
            <code>/api/district</code>
          </a> - Fetch all districts
        </li>
        <li>
          <a href="/api/district/106" target="_blank" rel="noopener noreferrer">
            <code>/api/district/106</code>
          </a> - Fetch details of district 106
        </li>
        <li>
          <a href="/api/district/106/locallevel" target="_blank" rel="noopener noreferrer">
            <code>/api/district/106/locallevel</code>
          </a> - Fetch local levels of district 106
        </li>
        {/* <li>
          <a href="/api/locallevel/10604/ward" target="_blank" rel="noopener noreferrer">
            <code>/api/locallevel/10604/ward</code>
          </a> - Fetch wards of local level 10604
        </li> */}
      </ul>
    </div>
  );
}
