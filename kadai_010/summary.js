$(function(){
  //文字色変化ボタンを押すと文字色が変わる
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });

  //文字内容変化ボタンを押すと文字内容が変わる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });

  //フェードアウトボタンを押すと文字が消える
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });

  //フェードインボタンを押すと文字が現れる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});