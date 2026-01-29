//Assignment 1: User Profile Manager
const user = {
    id: 101,
    name:"Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
}

console.log(user.name );
console.log(user['email']);

user.lastLogin = "2026-01-01";

user.role="admin";

delete user.isActive;

console.log(Object.keys(user));


//Assignment 2: Exam Result Summary
const marks= {
    maths:78,
    physics:65,
    chemistry:82,
    english:55,
    gettotal: function(){
        return this.maths + this.physics + this.chemistry + this.english;
        
    },
    maximum: function(){
        return Math.max(this.maths, this.physics, this.chemistry, this.english);
    }
};
marks.gettotal()
console.log("Total Marks: " + marks.gettotal());
console.log("Average Marks: " + (marks.gettotal() / 4));

console.log("Highest Marks Subject: " + marks.maximum());

marks.computer = 90; 

console.log(marks);


//Assignment 3: Application Settings Controller
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


settings.theme= "dark"; 
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);