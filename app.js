
const wrapper = document.querySelector('.wrapper')

wrapper.innerHTML =`
<div class="wrapperUser">
</div>
`

async function getUsers() {
  try{
    const wrapperUser = querySelector(".wrapperUser")
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await result.json()
    data.forEach(posts => {
      const card = document.createElement('div')
      card.innerHTML =  `
      <div class='pictureForCards'>
        <img src="../HW/img/artNar" alt="">
        <div>
          <div class="card">
          <div class= 'cardInfo'>
          <h3>${posts.title}:</h3>
          <p>${posts.body}</p>
          </img>
          </div>
          </div>
        `
        wrapperUser.append(card)
    });

  }catch(e) {
    console.log('fckn');
  }finally{
    console.log('finally');
  }
}

getUsers()