document.addEventListener('DOMContentLoaded', () => {
  const buscador = document.getElementById('buscador');
  const categoria = document.getElementById('categoria');
  const platos = document.querySelectorAll('.plato');

  function filtrar() {
    const texto = buscador.value.toLowerCase();
    const cat = categoria.value;

    platos.forEach(plato => {
      const nombre = plato.dataset.nombre;
      const catPlato = plato.dataset.categoria;

      const coincideTexto = nombre.includes(texto);
      const coincideCategoria = (cat === 'todos' || cat === catPlato);

      if (coincideTexto && coincideCategoria) {
        plato.style.display = 'block';
      } else {
        plato.style.display = 'none';
      }
    });
  }

  buscador.addEventListener('input', filtrar);
  categoria.addEventListener('change', filtrar);
});
