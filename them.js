const btn= document.querySelector(".icon-bar")
const body= document.querySelector("body")

function btnclick(){
    if(body.classList.contains("main")){

        body.classList.remove("main")
        body.classList.add("green")

    }else if(body.classList.contains("green")){

        body.classList.remove("green")
        body.classList.add("blue")

    }else if(body.classList.contains("blue")){

        body.classList.remove("blue")
        body.classList.add("pink")

    }else if(body.classList.contains("pink")){

        body.classList.remove("pink")
        body.classList.add("main")
    }

}

btn.addEventListener("click",btnclick)