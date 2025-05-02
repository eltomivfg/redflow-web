$(document).ready(function() {
    $('.cantidad').on('input', function() {
      var productoId = $(this).data('producto-id');
      var nuevaCantidad = $(this).val();
      
      // Realiza una petición AJAX para actualizar la cantidad en el carrito
      $.ajax({
        type: 'POST',
        url: 'actualizar_carrito_ajax.php', // Crea este archivo para manejar la actualización en el servidor
        data: { producto_id: productoId, cantidad: nuevaCantidad },
        success: function(data) {
          // Actualiza el precio total en la vista del carrito
          var precioTotal = nuevaCantidad * 10.00; // Reemplazar con la lógica real
          $('.precio-total[data-producto-id=' + productoId + ']').text(precioTotal.toFixed(2));
        }
      });
    });
  });
  