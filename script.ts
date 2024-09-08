// Step 01: Listing Element

document.getElementById("resumeForm")?.addEventListener('submit', function(event){
    event.preventDefault();



// Get Input
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("contact") as HTMLInputElement;
const eduElement = document.getElementById("edu") as HTMLInputElement;
const expElement = document.getElementById("exp") as HTMLInputElement;
const skillElement = document.getElementById("skill") as HTMLInputElement;



if(nameElement && emailElement && phoneElement && eduElement && expElement && skillElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = eduElement.value;
    const exp = expElement.value;
    const skill = skillElement.value;


    
//Get Output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> <span id= "editName" class = "editable">${name} </span> </p>
<p><strong>Email:</strong> <span id= "editEmail" class = "editable">${email}</span> </p>
<p><strong>Phone Number:</strong> <span id= "editNumber" class = "editable">${phone}</span> </p>


<h3>Education:</h3>
<p id= "editEducation" class = "editable">${education}</p>

<h3>Experience:</h3>
<p id= "editExperience" class = "editable">${exp}</p>

<h3>Skills:</h3>
<p id= "editSkill" class = "editable">${skill}</p>
`;



const resumeOutputElement = document.getElementById("resumeOutput")

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
}else {
    console.error('Information missing');
    
}


}
});


function makeEditable(){
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener('click' , function(){
            const currElement = element as HTMLElement;
            const currValue = currElement.textContent || "";


            //Content Replace for make it editable

            if (currElement.tagName === "p" || currElement.tagName === "SPAN") {
                const input = document.createElement('input')
                input.type = "text"
                input.value = currValue
                input.classList.add('editing-input')

                input.addEventListener('blur' , function(){
                    currElement.textContent = input.value;
                    currElement.style.display = 'inline'
                    input.remove()
                })


                currElement.style.display = "none"
                currElement.parentNode?.insertBefore(input, currElement)
                input.focus()
            }

        })
    })
}



