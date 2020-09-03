class Student{
    constructor( course,university, fullName){
       this.university = university;
       this.course = course;
       this.fullName= fullName;
       this._marks=[4,5,5,4];
       this.student = true;
   }
  getInfo() {
      return `Студент ${this.course}у ${this.university} ,${this.fullName}.`
  }
}
export{Student};