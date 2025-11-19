$(function() {
  //btnのクラス要素がクリックされたら
  $('.btn').on('click', function(){
    //text-boxのクラスのvalueにメッセージを表示する
    $('.text-box').val('クリックしました！');
  });
});

