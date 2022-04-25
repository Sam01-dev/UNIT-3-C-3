// Store the wallet amount to your local storage with key "amount"

function submit(){

    let inp =+ document.getElementById("amount").value;
  
    let a = localStorage.getItem("amount")
    a=+ a
    a = a + inp
  
    localStorage.setItem("amount",a)
    
       
}

    let wallet = document.getElementById("wallet")
    let a = localStorage.getItem("amount")
    wallet.innerText = a


  
    let movies = document.getElementById("book_movies")
  
    movies.onclick = function(){
  
      window.location.href = "movies.html"
    }
