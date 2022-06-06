

const obj=async()=>{
    try {
        let res=await fetch(
            "https://masai-vouchers-api.herokuapp.com/api/vouchers"
        );
        let join =await res.json();
        console.log(join);
        let data=join[0].vouchers;
        console.log(data)
        append(data);
        showAmount();
    }catch(err){
        console.log(err)
    }
    

}
obj()



function append(data)
{

    document.querySelector("#voucher_list").innerHTML=null
    data.map(function(ele){
        let div = document.createElement("div")
        div.setAttribute("class","voucher")

        let img = document.createElement('img')
        img.src = ele.image

        let p1 = document.createElement('h2')
        p1.innerText = ele.name
        

        let p2 = document.createElement('p')
        p2.innerText = ele.price
        

        let btn = document.createElement("button")
        btn.innerText = "Buy"
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function(){
            addproducts(ele)
        });
        div.append(img,p1,p2,btn)
        document.querySelector("#voucher_list").append(div)
    })
}


function addproducts(data){
   amount =Number(amount)

   if(amount<data.price)
   {
       alert("Sorry! insufficient balance")
   }

  else{
    item.push(data)
    console.log(item)
    amount=amount-data.price
    showAmount();
    localStorage.setItem("purchase",JSON.stringify(item))
  }
  window.localStorage.herf=`purchase.html`
}

function showAmount(){
    amount =Number(amount)

    console.log(amount)

    document.querySelector("wallet_balance").innerHTML=amount
}