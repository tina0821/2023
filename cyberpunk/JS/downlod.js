const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// 介紹的動畫
document.querySelector("#contact").addEventListener("click", function () {
    document.querySelector("#glass").classList.add('glass')
    console.log(document.querySelector("#glass"))
});
function qqq() {

    document.querySelector("#glass").classList.add('glass')
    setTimeout(() => {
        document.querySelector("#glass").classList.remove('glass')
    }, 3000
    )
};

// 隨機
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}




  function share() {
    const url = "https://youtu.be/h4VJGNNSQnw"; // 將此替換為你要分享的 URL
    const title = "分享標題"; // 將此替換為你要分享的標題
    const description = "分享描述"; // 將此替換為你要分享的描述
  
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
  
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&title=${encodedTitle}&description=${encodedDescription}`;
  
    window.open(shareUrl, "_blank", "width=600,height=400");
  }

//   下載圖片

  const downloadLink = document.getElementById('download-link');
  downloadLink.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默認行為
    window.location.href = downloadLink.href; // 跳轉到圖片 URL 下載
  });
