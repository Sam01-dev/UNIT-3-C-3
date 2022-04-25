// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;

  let h1 = document.getElementById("wallet")

  let a =+ localStorage.getItem("amount")

  h1.innerText = a;


  function test(){
    
    

      let inp = document.getElementById("search").value;

      fetch(`https://www.omdbapi.com/?apikey=3f13276c&s=${inp}`)
      .then(function(res){
        return res.json()
      })
      .then(function(res){
        console.log(res)
        appendData(res.Search)
        
      })
      .catch(function(err){
        console.log(err)
      })
      

  }

  function appendData(data){

  let movies = document.getElementById("movies")

  movies.innerHTML = null

  data.forEach(el => {

  let div = document.createElement("div")

  let name = document.createElement("p")
  name.innerText = el.Title

  let poster = document.createElement("img")
  poster.src = el.Poster

  let book = document.createElement("button")
  book.className = "book_now"
  book.innerText = "Book Now"
  book.onclick = function go(){

    let arr = [];

    let poster = el.Poster
    let name = el.Title

    let obj = {

      poster : poster,
      name : name
    }

    arr.push(obj)

    localStorage.setItem("movie",JSON.stringify(arr))

    window.location.href = "checkout.html"
  }

  div.append(poster,name,book)

  movies.append(div)

});
}

function main(){

  let data = test()

  if(data === undefined)
  {
    return false
  }

  appendData(data)
}

function debounce(func,delay){

  if(id){
    clearTimeout(id)
  }

  id= setTimeout(function(){
    func()
  },delay)


}

  
