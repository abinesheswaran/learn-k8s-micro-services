export async function fetchData() {
  const response = await fetch('http://localhost:30009/fetch-b');
  const data = await response.text();
  document.getElementById('output').innerText = data;
}

window.fetchData = fetchData;