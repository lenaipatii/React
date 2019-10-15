/* 

The getter method should return the level of a student, 
based on how many credits (this.credits) they have.

If student has more than 90 credits, they are a 'Senior'.
If the student has 90 or fewer credits, but more than 60 (>= 61), they are a 'Junior'.
If the student has 60 or fewer credits, but more than 30 (>= 31), they are a 'Sophomore'.
If the student has 30 or fewer credits, they are a 'Freshman'

*/

class Student {
    constructor ( gpa, courses ) {
        this.gpa = gpa;
        this.courses = courses;
    }

    get level() {
        let credits = 0;

        if ( this.credits > 90 ) {
            return 'Senior';
        } else if ( this.credits <= 90 && this.credits >= 61 ) {
            return 'Junior';
        } else if ( this.credits <= 60 && this.credits >= 31 ) {
            return 'Sophomore';
        } else if ( this.credits <= 30 ) {
            return 'Freshman';
        } else {
            return 'Student';
        }
    }

    // Inside the major() setter method, set the student's major to a backing property "major". 
    // If the student's level is Junior or Senior, the value of the backing property should be equal to the parameter passed to the setter method. 
    // If the student is only a Freshman or Sophomore, set the "major" backing property equal to 'None'.

    set major( major ) {

        if ( this.level === 'Senior' || this.level === 'Junior' ) {
            this._major = major;
            return this._major;
        } else {
            this._major = 'none';
            return this._major;
        }
    }

    get major() {
        return this._major;
    }

    printGPA() {
        console.log( this.gpa );
    }
}

const ashley = new Student( 3.9 );