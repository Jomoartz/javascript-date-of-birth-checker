function dateOfBirth (age){

if (age<23){

   var younger_than23= 23-age;

   var current_age= 2000+younger_than23;

  return "You were born in " + current_age;

  }

  

 else if (age>23){

  var older_than23 = age-23;

  var current_age= 2000-older_than23;

  return  "you were born in " + current_age;

  }

else if (age != typeof(1)){

  return  "input your age in years only.";

  }

else {

   return "you were born in 2000"; }

}

console.log(/*input your date of birth here */

	dateOfBirth());
