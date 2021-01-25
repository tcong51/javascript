//student manager app

// 1.show all student
//2.Create a new student
//3.Save & exit

var readLineSync= require('readline-sync');
var fs = require ('fs');
var students =[];

function loadData(){
    var data = fs.readFileSync('./data.json');
    students =  JSON.parse (data);
}
 function showStudent(){
    for (var st of students){
        console.log(st.name , st.age);
    }
}
function showStudentMinMax(st){
  var afer=  st.sort(function(a,b){
        return a.age - b.age;
    });
    // console.log(af);
    for (var sta of afer){
        console.log(sta.name , sta.age);
    }

}
function showStudentMaxMin(st){
    var afer=  st.sort(function(a,b){
          return b.age - a.age;
      });
      // console.log(af);
      for (var sta of afer){
          console.log(sta.name , sta.age);
      }
  
  }
function showCreateStudent(){
    var name = readLineSync.question("Name?");
    var age = readLineSync.question("Age?");
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}
function saveAndExit(){
    var content =JSON.stringify(students);
    fs.writeFileSync('./data.json',content,{encoding: 'utf8'});
}
function showMenu(){
    console.log("1.show all student");
    console.log("2.Create a new student");
    console.log("3.Save & exit");
    var option = readLineSync.question('> ');
    switch(option){
        case '1':
            console.log("1.MinMax");
            console.log("2.MaxMin");
            var op = readLineSync.question('> ');
            switch(op){
                case '1':
                    showStudentMinMax(students);
                    showMenu();
                    break;
                case '2':
                    showStudentMaxMin(students);
                    showMenu();
                    break;
                default:
                        console.log("Wrong option");
                        showMenu();
                        break;
            }
            // showStudent();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log("Wrong option");
            showMenu();
            break;
    }
}
function main(){
    loadData();
    showMenu();
    
    
}
 
main();