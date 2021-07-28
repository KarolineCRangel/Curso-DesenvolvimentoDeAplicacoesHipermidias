let valor = document.getElementById('intro');

valor.addEventListener('input', () => document.getElementById('text').textContent = "Você está digitando: " + valor.value)