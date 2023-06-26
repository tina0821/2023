// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()

// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }

//監聽按鈕點擊事件
$("#jokeBtn").click(function () {
  //使用getJSON讀取data.json文件中的數據
  $.getJSON("./data.json", function (data) {
    console.log(data);
    //獲取jsonTip的div
    var $jsontip = $("#joke");

    var strHtml = "";
    //清空内容 
    $jsontip.empty();
    //將獲取到的json格式數據放到div中
    $.each(data, function (infoIndex, info) {
      strHtml += info["headline"] + "<hr>";
      console.log(strHtml);
    })
    //用split去切割開來
    if(strHtml.indexOf('<hr>') != -1){
      var ary = strHtml.split('<hr>')
      console.log(ary);
    }
    //顯示處理後的數據
    var imgnumber = Math.floor(Math.random()*10);
    console.log(imgnumber);
    $jsontip.html(ary[imgnumber]);
  })
})