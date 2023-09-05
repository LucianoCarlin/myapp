import React from 'react';

export async function Repo() {
  /*  await new Promise((resolve) => setTimeout(resolve, 5000)); */
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',
  });
  const repos = await response.json();
  return (
    <div>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  );
}
