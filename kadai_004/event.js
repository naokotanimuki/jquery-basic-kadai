//HTMLの読み込みが完了したら
$(window).on('load', function(){
  console.log('loadイベントが発生しました');
});

//画面をスクロールしたら
$(window).on('scroll', function(){
  console.log('scrollイベントが発生しました');
});