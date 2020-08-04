// Grab the card data
let otherArray = []
let stuff = document.querySelectorAll(".price")
stuff.forEach((element, index) => {
     let theObject = {}
     let name = element.parentElement.firstElementChild.innerHTML
     let image =element.parentNode.previousElementSibling.getAttribute("src")
     let price = element.firstElementChild.innerHTML

     theObject['productName'] = name;
     theObject['price'] = price;
     theObject['imageSrc'] = image;
/// Add the click function to the add to cart button 
     element.nextElementSibling.addEventListener("click", (e) => {
          let objectId = e.target.getAttribute("data-id")
          if(otherArray.indexOf(theObject) == -1){
               otherArray.push(theObject) ;
                addItem(theObject, objectId)
          } 
          event.preventDefault();
     })
     
})
// This adds the item to the table
let addItem = (theObject, objectId) => {
     theObject['id'] = objectId;
     let tableRow = document.createElement("tr");
     let tableData = document.createElement("td");
     tableRow.innerHTML = 
     `
     <td><img src=${theObject.imageSrc} width="100%"/></td>
     <td>${theObject.productName}</td>
     <td>${theObject.price}</td>
     <td>
        <a href="#" class="remove" title="Remove from cart" data-id="${theObject.id}">X</a>
    </td>
     `
     document.querySelectorAll("table#cart-content tbody")[0].appendChild(tableRow)
     /// And activated the delete item button
     buttonActivator()
}

let buttonActivator = () => {
     let removeButtons =  document.querySelectorAll(".remove")

removeButtons.forEach(el => {
     el.addEventListener("click", (e)=>{
          let row = e.target.parentNode.parentNode;
          document.querySelectorAll("table#cart-content tbody")[0].removeChild(row)
          event.preventDefault();
     })
})

}
/// For clearing the entire cart
document.querySelector("a#clear-cart").addEventListener("click", ()=>{
     let rows = document.querySelectorAll("table#cart-content tbody")[0].childNodes
     while(rows)
          document.querySelectorAll("table#cart-content tbody")[0].removeChild(rows[0])  
})
