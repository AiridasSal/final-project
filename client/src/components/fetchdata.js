const fetchData = async (route, body, method = 'POST', headers) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Check if the response has content before parsing it as JSON
    if (response.status !== 204) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchData;
