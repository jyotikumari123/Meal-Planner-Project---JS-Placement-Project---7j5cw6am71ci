const imgBreakfast = document.getElementById("breakfast");
const imgLunch = document.getElementById("lunch");
const imgDinner = document.getElementById("dinner");
const submit = document.getElementById("submit");
const image = document.getElementById("image");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");

submit.addEventListener("click", formSearch );

function calculateCalories(age, weight, height, gender, activityLevel) {
  let light = "";
  let moderate = "";
  let active = "";

  if (activityLevel == "Select activity level") {
    alert("Please Select Activity Level ");
  } else if (activityLevel == "light") {
    light = activityLevel;
  } else if (activityLevel == "moderate") {
    moderate = activityLevel;
  } else if (activityLevel == "active") {
    active = activityLevel;
  }
  var BMR_Female = 0;
  var BMR_Male = 0;
  var dailycaloriesReq = 0;
  const generateMeals = function () {
    BMR_Female = 55.1 + 9.563 * weight + 1.85 * height + 4.476 * age;
    BMR_Male = 66.47 + 13.75 * weight + 5.003 * height + 6.755 * age;

    if (gender == "male" && activityLevel == "light") {
      dailycaloriesReq = BMR_Male * 1.375;
      return dailycaloriesReq;
    } else if (gender == "male" && activityLevel == "moderate") {
      dailycaloriesReq = BMR_Male * 1.55;
      return dailycaloriesReq;
    } else if (gender == "male" && activityLevel == "active") {
      dailycaloriesReq = BMR_Male * 1.725;
      return dailycaloriesReq;
    } else if (gender == "Female" && activityLevel == "light") {
      dailycaloriesReq = BMR_Female * 1.375;
      return dailycaloriesReq;
    } else if (gender == "Female" && activityLevel == "moderate") {
      dailycaloriesReq = BMR_Female * 1.55;
      return dailycaloriesReq;
    } else if (gender == "Female" && activityLevel == "active") {
      dailycaloriesReq = BMR_Female * 1.725;
      return dailycaloriesReq;
    }
  };

  BMR_Female = 55.1 + 9.563 * weight + 1.85 * height + 4.476 * age;
  BMR_Male = 66.47 + 13.75 * weight + 5.003 * height + 6.755 * age;

  if (gender == "male" && activityLevel == "light") {
    dailycaloriesReq = BMR_Male * 1.375;
    fetchData(dailycaloriesReq);
  } else if (gender == "male" && activityLevel == "moderate") {
    dailycaloriesReq = BMR_Male * 1.55;
    fetchData(dailycaloriesReq);
  } else if (gender == "male" && activityLevel == "active") {
    dailycaloriesReq = BMR_Male * 1.725;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activityLevel == "light") {
    dailycaloriesReq = BMR_Female * 1.375;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activityLevel == "moderate") {
    dailycaloriesReq = BMR_Female * 1.55;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activityLevel == "active") {
    dailycaloriesReq = BMR_Female * 1.725;
    fetchData(dailycaloriesReq);
  }
}
