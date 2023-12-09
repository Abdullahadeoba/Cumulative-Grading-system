function calc() {
    if (studentName.value == '' && biology.value == '' && physics.value == '' && chemistry.value == '' && math.value == '' && geo.value == '' && studentID.value == '' && eng.value == '') {
        err.style.display = "block"
    } else {
        var confirmation = confirm("Are you sure you want to proceed?")
        if (confirmation == true) {
            err.style.display = "none"
            var sum = Number(biology.value) + Number(physics.value) + Number(chemistry.value) + Number(math.value) + Number(geo.value) + Number(eng.value)
            var cumu = ((sum/600) * 100).toFixed(2)
           if (sum > 600){
            alert("Bro fear god") 
             } else{
            intro.innerHTML = "Welcome " + document.getElementById('studentName').value
            note.innerHTML = "It is my utmost pleasure to sincerely appreciate your efforts for this semester. Please, find below how you have performed. Best regards👋."
       
             if(cumu >= 0 && cumu <40) {
                result.innerHTML = "Your score is " + cumu + "%. Unfortunately, you will not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you and best wishes."
                result.style.color = "black"
            } else if (cumu >= 40 && cumu < 60) {
                result.innerHTML = "Your score is " + cumu + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
                note.innerHTML = "You are still in the average part.Try harder next semester.Thanks🤣😂"
                result.style.color = "yellow"
            } else if (cumu >= 60 && cumu < 70) {
                result.innerHTML = "Your score is " + cumu + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
                result.style.color = "yellow"
            } else if (cumu >= 70 && cumu < 100) {
                result.innerHTML = "Your score is " + cumu + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
                result.style.color = "yellow"
            }
            }   
           

            document.getElementById('biology').value = ""
            document.getElementById('studentName').value = ""
            document.getElementById('physics').value = ""
            document.getElementById('chemistry').value = ""
            document.getElementById('math').value = ""
            document.getElementById('geo').value = ""
            document.getElementById('eng').value = ""
            document.getElementById('studentID').value = ""
        } else {
            console.log(("check again"));
        }
    }
}
