var arrayNameOfTheStudent = [];

function submit(){
    var displayStudentArray = [];
    
    for (i = 1; i <= 4; i++){
        var nameOfTheStudent = document.getElementById("name_of_the_student_"+i).value;
        console.log(nameOfTheStudent);
        arrayNameOfTheStudent.push(nameOfTheStudent);
    }
    console.log(arrayNameOfTheStudent);
    arrayLength = arrayNameOfTheStudent.length;
    console.log(arrayLength);

    for (j = 0; j < arrayLength; j++){
        displayStudentArray.push("<h4>NAME - " + arrayNameOfTheStudent[j] + "</h4>");
        console.log(displayStudentArray);
    }

    document.getElementById("display_name_with_commas").innerHTML = displayStudentArray;

    var removeComma = displayStudentArray.join(" ");
    console.log(removeComma);
    document.getElementById("display_name_without_commas").innerHTML = removeComma;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    arrayNameOfTheStudent.sort();
    console.log(arrayNameOfTheStudent);
    var displayStudentArraySorted = [];
    
    arrayLength = arrayNameOfTheStudent.length;
    console.log(arrayLength);

    for (k = 0; k < arrayLength; k++){
        displayStudentArraySorted.push("<h4>NAME - " + arrayNameOfTheStudent[k] + "</h4>");
        console.log(displayStudentArraySorted);
    }
    
    document.getElementById("display_name_with_commas").innerHTML = displayStudentArraySorted;

    var removeComma = displayStudentArraySorted.join(" ");
    console.log(removeComma);
    document.getElementById("display_name_without_commas").innerHTML = removeComma;
}