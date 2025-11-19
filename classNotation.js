/**
 * Define the Course and Assignment concepts using the class notations
 */
class Assignment {        //creates a class called Assignment
 
    constructor(title, dueDate) {   //the constructor of the class takes in the arguments of title and dueDate and assigns them to the instance using this.
        this.title = title;
        this.dueDate = dueDate;
    }


    printAssignment() {     //method to print the assignment details with the correct formatting
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}


class Course {      //creates a class called Course
 
    constructor(courseName, instructor, creditHours, assignments) { //constructor includes all the arguments passed through assigned to repective variable name
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments; //assignments is the array used to store assignment objects
    }

 
    courseInfo() {                 //method to print out the course details with corect formatting using console.log
        console.log(
            'Course: ' + this.courseName +           //prints out info
            ' | Instructor: ' + this.instructor +
            ' | Credit Hours: ' + this.creditHours
        );

        console.log('Assignments >>>');           
        for (let a of this.assignments) {      //goes through all the assignments that are in the assignments array and prints them with the method found inside Assignment
            a.printAssignment();
        }
    }
}

let a1 = new Assignment('Project Proposal', 'Jan 15'); //sets all the respective information for each assignment
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1, a2]);   //sets all the information into the c1 and c2 objects
let c2 = new Course('Data Science', 'Dr. Evil', 6, [a3, a4]);

c1.courseInfo();  //calls the method "courseInfo to" to print out everything
c2.courseInfo();


