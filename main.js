async function handleRequest(event) {
  // Fetch the JSON data from the file
  const response = await fetch('https://your-domain.com/data.json');
  const data = await response.json();

  // Create a new Response with the JSON data
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});
