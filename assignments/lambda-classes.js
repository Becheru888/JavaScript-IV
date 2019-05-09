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
        console.log(`${this.favSubject}`)
    }

    PRAssignment(subject){
        console.log(`${this.name} has submited PR for ${subject}`)
    }

}


class ProjectManager extends Instructor{
    constructor(name, location, age, gender,specialty, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(name, location, age, gender,specialty, favLanguage, catchPhrase)
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }

    standUp(channel,name){
        console.log(`${name} ${channel} @channel standy time!`)
    }

    debugCode(subject, student){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}


const instructor1 = new Instructor('Gabe', 'UK', '31','Male','Js Dveloper','JavaScript','The force be with you.')
const instructor2 = new Instructor('Adrian', 'Poland', '26','Male','Js Dveloper','Java','Learn Learn Learn')
const student1 = new Student('Remi', 'London', '26', 'Male', 'Sales Consultant', 'FullStackWeb', 'JavaScript')
const student2 = new Student('Victor', 'America', '21', 'Male', 'Student', 'FullStackWeb', 'Less, Css')
const projectManager1 = new ProjectManager('Borja','Spain', '26' ,'Male','JavaDeveloper','Javascript','Just Relax','WEBEU2','Gabe')
const projectManager2 = new ProjectManager('Sophie','UK', '29' ,'Female','C#Developer','C#','Make you homework','WEBEU2','Adrian')


//Person Methodes called

console.log(student1.speak())
console.log(instructor1.speak())
console.log(projectManager1.speak())

//Intructor Methodes called

instructor1.demo('JavaScript')
instructor1.grade(student1,'Javascript')

//Student Methodes called

student1.listSubjects()
student2.listSubjects()
student1.PRAssignment('JavaScript')

//ProjectManager Methodes called

projectManager1.standUp('Remi','Help Channel')
projectManager2.debugCode('JavaScript III',student1)












