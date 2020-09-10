
function renderStudents(students) {
    let rollCall = '';
    `<header> Roll Call! </header>`
    for (let count = 0; count < students.length; count++) {
        const student = students[count]
        if (student.isPresent === true){
            rollCall += `
                
                    <div>
                        
                        <h2 style= "background-color:green;"> ${student.name} <br> <p style="font-size:20px"> Present </p></h2>
                    </div>
                `}
        else{ 
        rollCall += `
                
        <div>
            
            <h2 style= "background-color:red;"> ${student.name} <br> <p style="font-size:20px"> Absent </p></h2>
        </div>
    `}


    }


    return `
        <div class="text-center mt-5">
            <h1>Roll Call! <h1>    
            ${rollCall}
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}