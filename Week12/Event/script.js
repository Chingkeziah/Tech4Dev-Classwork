// two parameters are passed here. the event and a call back function

// function handleClick(){
//     console.log("you clicked, isn't it?")
// }
// window.addEventListener("click, handleClick()")

// or 
let btn = document.querySelector("button")
// remember that getElementById affects just one element while querySelector affects just the first element of that type on a page
// window. applies to the entire document so  using btn. narrows it down to a particular element you want the eventlistener to  apply to
// btn.addEventListener("click", () => {
//     console.log("you clicked a button, didn't you?")
// })

// how to remove an evenlistener from an element
// removing an evenlistener allows you a user to perform an operation just once. 
// the same function which was used to addeventlistener must be the same use to remove it. reason why we use btn on bot operations
function Once(){
    console.log("clicked me.")
    // ensure to add the removeeventlistener after you've added your event, it functions just like return
    btn.removeEventListener("click", Once)
}
btn.addEventListener("click", Once)
// notice that the buttonn was clicked just once and after that it couldn't be clicked again
// no need to invoke the function here like we always do because invoking it here will cause an infinite loop in your console

// btn.addEventListener("mousedown", e => {
//     if(e.btn == 0){
//         console.log("left button")
//     } else if(e.btn == 1){
//         console.log("midle button")
//     } else if(e.btn == 2){
//         console.log("right button")
//     }
// })

// Event bubbling allows the child of a parent to execute its event as well as that of the parent
// in order to prevent this we use stop.propagation to prevent the parent from responding to what doesn't concern it
let p = document.querySelector("p")

p.addEventListener("mousedown", () => {
    console.log("handler for the paragraph")
})
btn.addEventListener("mousedown", event => {
    console.log("handler of the button")
    if (event.btn == 2) even.stopPropagation()
})

// preventing default actions of elements
// link example
let url = document.querySelector('a')
url.addEventListener('click', e => {
    // here, clicking the link displays an alert due to the fact that we added an alert and prevented the default event
    alert("i was told not to gree for anybody")
    e.preventDefault()
})


// key events
// key events happen when you press a key on your keyboard 
// for example; when you press button k it returns a keydown and once you release the button, the even is called a keyup event

window.addEventListener("keydown", kezy => {
    if(kezy.key == "k"){
        document.body.style.background = "green"
        document.body.style.color = "white"
    }
})
window.addEventListener("keyup", kezy => {
    if(kezy.key == "k"){
        document.body.style.background = "red"
        document.body.style.color = "black"
    }
})
// anytime k is pressed down the background turns green and text white and when up the color is black and the background turns red


// mouse events
// added dots anytime you click
// you can also change it mouse move etc
window.addEventListener("click", e => {
    let dot = document.createElement('div')
    dot.className = "dot"
    dot.style.left = (e.pagex - 4) + "px"
    dot.style.top = (e.pagey - 4) + "py"
    document.body.appendChild(dot)
})

// focus event
