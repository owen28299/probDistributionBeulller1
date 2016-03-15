var students = {
  1 : 0,
  2 : 0,
  3 : 0,
  4 : 0,
  5 : 0
};

var selections = 10;
var tests = 100000;

var highest = 0;

var mostTimesPicked = {
  1 : 0,
  2 : 0,
  3 : 0,
  4 : 0,
  5 : 0,
  6 : 0,
  7 : 0,
  8 : 0,
  9 : 0,
  10 : 0
};


function oneInstance() {

  students =  {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0
  };

  for(var i = 0; i < selections; i++){
    var num = Math.floor(Math.random()*5) + 1;
    students[num] += 1;
  }

}

function runTest(){

  oneInstance();

  highest = 0;

  for (var x in students){
    if (students[x] > highest){
      highest = students[x];
    }
  }

  mostTimesPicked[highest] += 1;


}

for (var j = 0; j < tests; j++){
  runTest();
}

console.log(mostTimesPicked);


