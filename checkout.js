// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet = document.getElementById("wallet")

  let b =+ localStorage.getItem("amount")

  wallet.innerText = b


  let movie = document.getElementById("movie")

  let a = JSON.parse(localStorage.getItem("movie"))

  console.log(a)

  
    a.forEach(el => {

      let div = document.createElement("div")

    let poster = document.createElement("img")
    poster.src = el.poster

    let name = document.createElement("p")
    name.innerText  =el.name
    
    div.append(poster,name)

    movie.append(div)
      
    });

    
    function Confirm(){

      let num =+ document.getElementById("number_of_seats").value

      let am = b

      let total = num*100;

      if(total <= am)
      {
        alert("Booking Successful!")

        am = am - total

        wallet.innerText = am

        let w = localStorage.getItem("amount")

        w = am

        localStorage.setItem("amount",w)
      }
      else if(total > am)
      {
        alert("Insufficient Balance!")
      }


    }

    
 

