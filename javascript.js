let pluBtn = document.querySelectorAll(".plus-btn");
let expected_technologies = document.querySelector(".expected-technologies"); 
let expected_how_to_use = document.querySelector(".expected-use");
let expected_included = document.querySelector(".expected-including");
let expect_specification = document.querySelector(".expected-specification");


let addModal = true;


    pluBtn[0].addEventListener("click",function(){
        if(addModal)
        {
            expected_technologies.style.display = "flex";
        }
        else{
            expected_technologies.style.display = "none";
        }
    
        addModal = !addModal;
    
    })

   

    pluBtn[1].addEventListener("click",function(){
        if(addModal)
        {
            expected_how_to_use.style.display = "flex";
        }
        else{
            expected_how_to_use.style.display = "none";
        }
    
        addModal = !addModal;
    
    })
    pluBtn[2].addEventListener("click",function(){
        if(addModal)
        {
            expected_included.style.display = "flex";
        }
        else{
            expected_included.style.display = "none";
        }
    
        addModal = !addModal;
    })


    pluBtn[3].addEventListener("click",function(){
        if(addModal)
        {
            expect_specification.style.display = "flex";
        }
        else{
            expect_specification.style.display = "none";
        }
    
        addModal = !addModal;
    })
    
    