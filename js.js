function animationForm(){

    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach( arrow => {
        arrow.addEventListener("click", () => {
            console.log("Hello");
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            }
        });
    });
}

function validateUser(user){
    if( user.value.length < 6 ){
        console.log("not enough characters");
        error("rgb(189,87,87)");
    }
    else{
        error("rgb(65, 174, 182)");
        return true;
    }
}

functionvalidateEmail()

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}

animationForm(); 
