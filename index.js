
"h1 h2 m1 m2 s1 s2".split(/\s+/).forEach(function(key){
  window[key] = $("#" + key)
})

function formatImage(n){
  return 'img/num' + n + "_small.png"
}

$(function(){
  var countDown = function(remainSeconds){
    if(remainSeconds <= 0){
      $("#counter img:not(.sep)").src(formatImage('0'))
      // FIXME notifications
    }else{
      var hh = parseInt(remainSeconds / (60 * 60 ))
      var mm = parseInt((remainSeconds % 3600) / 60)
      var ss = parseInt(remainSeconds % 60)
      console.log(hh,mm,ss)

      h1.attr('src',formatImage(parseInt(hh / 10)))
      h2.attr('src',formatImage(hh % 10))

      m1.attr('src',formatImage(parseInt(mm / 10)))
      m2.attr('src',formatImage(mm % 10))

      s1.attr('src',formatImage(parseInt(ss / 10)))
      s2.attr('src',formatImage(ss % 10))
      
      setTimeout(function(){ countDown(--remainSeconds)},1000)
    }
  }
  countDown(3600)
})


