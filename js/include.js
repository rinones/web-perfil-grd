// Cargar archivos HTML reutilizables
function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Error al cargar ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(error => {
        el.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
