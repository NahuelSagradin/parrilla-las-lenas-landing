// Esperamos a que todo el HTML se cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // 1. Seleccionamos el formulario por su ID
  const form = document.getElementById("whatsappForm");

  // 2. Escuchamos el evento 'submit' (cuando hacen clic en el botón)
  form.addEventListener("submit", function (event) {
    // ¡IMPORTANTE! Esto evita que la página se recargue
    event.preventDefault();

    // 3. Capturamos los datos de los campos
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;
    const motivo = document.getElementById("motivo").value;

    // Formateamos un poco la fecha (viene como "2023-12-14T20:00")
    // Reemplazamos la "T" por un texto más legible
    const fechaLegible = fecha.replace("T", " a las ") + " hs";

    // 4. Definimos el número de teléfono del restaurante
    // IMPORTANTE: Formato internacional sin símbolos (54 + 9 + código de área + número)
    // Ejemplo para Buenos Aires (11): 5491112345678
    const telefonoDuenio = "5491133514745";

    // 5. Construimos el mensaje de texto
    // Usamos \n para saltos de línea y emojis para que se vea lindo
    const mensaje = `Hola! 👋 Quiero hacer una reserva en Parrilla Las Leñas.
        
📋 *Mis Datos:*
👤 Nombre: ${nombre}
📅 Fecha: ${fechaLegible}
👥 Personas: ${personas}
🎉 Motivo: ${motivo}

¿Me podrían confirmar disponibilidad? Gracias!`;

    // 6. Convertimos el mensaje para que sea válido en una URL (codificación)
    // Esto cambia los espacios por %20, etc.
    const mensajeCodificado = encodeURIComponent(mensaje);

    // 7. Abrimos WhatsApp en una nueva pestaña
    window.open(
      `https://wa.me/${telefonoDuenio}?text=${mensajeCodificado}`,
      "_blank"
    );

    // Opcional: Limpiar el formulario después de enviar
    // form.reset();
  });

  // Cerrar automáticamente el menú en mobile cuando se toca un enlace
  document.querySelectorAll("#navbarNav a").forEach((link) => {
    link.addEventListener("click", () => {
      const navbar = document.getElementById("navbarNav");
      const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    });
  });

  // Cerrar cuando se toca el logo "Las Leñas"
  document.querySelector(".navbar-brand").addEventListener("click", () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  });
});
