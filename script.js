// Step 01: Listing Element
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get Input
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("contact");
    var eduElement = document.getElementById("edu");
    var expElement = document.getElementById("exp");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && eduElement && expElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = eduElement.value;
        var exp = expElement.value;
        var skill = skillElement.value;
        //Get Output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> <span id= \"editName\" class = \"editable\">".concat(name_1, " </span> </p>\n<p><strong>Email:</strong> <span id= \"editEmail\" class = \"editable\">").concat(email, "</span> </p>\n<p><strong>Phone Number:</strong> <span id= \"editNumber\" class = \"editable\">").concat(phone, "</span> </p>\n\n\n<h3>Education:</h3>\n<p id= \"editEducation\" class = \"editable\">").concat(education, "</p>\n\n<h3>Experience:</h3>\n<p id= \"editExperience\" class = \"editable\">").concat(exp, "</p>\n\n<h3>Skills:</h3>\n<p id= \"editSkill\" class = \"editable\">").concat(skill, "</p>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('Information missing');
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currElement = element;
            var currValue = currElement.textContent || "";
            //Content Replace for make it editable
            if (currElement.tagName === "p" || currElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = "text";
                input_1.value = currValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currElement.textContent = input_1.value;
                    currElement.style.display = 'inline';
                    input_1.remove();
                });
                currElement.style.display = "none";
                (_a = currElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currElement);
                input_1.focus();
            }
        });
    });
}
