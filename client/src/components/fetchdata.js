const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const fetchData = async (route, body, method = 'POST', headers) => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${SERVER_URL}${route}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Check if the response has content before parsing it as JSON
    if (response.status !== 204 || response.status !== 500) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchData;
