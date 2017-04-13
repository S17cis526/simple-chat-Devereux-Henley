var socket = io();

socket.on('greeting', function(data) {
  $('<li>').text(data).appendTo('#message-log');
});

socket.on('message', function(message) {
  var li = $('<li>')
    .css('color', message.color)
      .appendTo('#message-log');

  $('<strong>')
    .text(message.user)
    .appendTo(li)
    .css('padding-right', '1em');

  $('<span>')
    .text(message.text)
    .appendTo(li);
});

$('#chat-send').click(function() {
  var text = $('#chat-text').val();
  socket.emit('message', text);
  $('#chat-text').val('');
});

$('#color').on('change', function() {
  var color = $(this).val();
  socket.emit('color', color);
});
