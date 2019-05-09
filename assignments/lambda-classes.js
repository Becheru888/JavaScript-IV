// CODE here for your Lambda Classes
class Person{
    constructor(name, location, age, gender){
       this.name = name;
       this.location = location;
       this.age = age;
       this.gender = gender 
    }

    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`   
    }
}




class Instructor extends Person{
    constructor(name, location, age, gender, specialty, favLanguage,catchPhrase){
    super(name, location, age, gender)
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person{
    constructor(name, location, age, gender, previousBackground, className, favSubject){
        super(name, location, age, gender)
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubject = favSubject
    }

    listSubjects(){
        console.log(`${this.favSubject}` + `<br>`)
    }

    PRAssignment(subject){
        console.log(`${this.name} has submited PR for ${subject}`)
    }

}


class ProjectManager extends Instructor{
    constructor(specialty, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(specialty, favLanguage, catchPhrase)
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }

    standUp(channel){
        console.log(`${this.name} @channel standy time!`)
    }

    debugCode(subject, student){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}













