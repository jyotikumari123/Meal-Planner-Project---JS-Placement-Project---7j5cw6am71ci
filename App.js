const imgBreakfast = document.getElementById("breakfast");
const imgLunch = document.getElementById("lunch");
const imgDinner = document.getElementById("dinner");
const submit = document.getElementById("submit");
const image = document.getElementById("image");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const gender=document.getElementById("gender");

submit.addEventListener("click", formSearch );

function calculateCalories(age, weight, height, gender, activity) {
  let light = "";
  let moderate = "";
  let active = "";
  let male = "";
  let female = "";
  let other = "";
  if (gender == "none") {
    alert("Please Select Gender");
  } else if (gender == "male") {
    male = gender;
  } else if (gender == "female") {
    female = gender;
  } else if (gender == "other") {
    other = gender;
  }

  if (activity == "none") {
    alert("Please Select Activity Level ");
  } else if (activity == "light") {
    light = activity;
  } else if (activity == "moderate") {
    moderate = activity;
  } else if (activity == "active") {
    active = activity;
  }
  var BMR_Female = 0;
  var BMR_Male = 0;
  var dailycaloriesReq = 0;
  const generateMeals = function () {
    BMR_Female = 55.1 + 9.563 * weight + 1.85 * height + 4.476 * age;
    BMR_Male = 66.47 + 13.75 * weight + 5.003 * height + 6.755 * age;

    if (gender == "male" && activity == "light") {
      dailycaloriesReq = BMR_Male * 1.375;
      return dailycaloriesReq;
    } else if (gender == "male" && activity == "moderate") {
      dailycaloriesReq = BMR_Male * 1.55;
      return dailycaloriesReq;
    } else if (gender == "male" && activity == "active") {
      dailycaloriesReq = BMR_Male * 1.725;
      return dailycaloriesReq;
    } else if (gender == "Female" && activity == "light") {
      dailycaloriesReq = BMR_Female * 1.375;
      return dailycaloriesReq;
    } else if (gender == "Female" && activity == "moderate") {
      dailycaloriesReq = BMR_Female * 1.55;
      return dailycaloriesReq;
    } else if (gender == "Female" && activity == "active") {
      dailycaloriesReq = BMR_Female * 1.725;
      return dailycaloriesReq;
    }
  };

  BMR_Female = 55.1 + 9.563 * weight + 1.85 * height + 4.476 * age;
  BMR_Male = 66.47 + 13.75 * weight + 5.003 * height + 6.755 * age;

  if (gender == "male" && activity == "light") {
    dailycaloriesReq = BMR_Male * 1.375;
    fetchData(dailycaloriesReq);
  } else if (gender == "male" && activity == "moderate") {
    dailycaloriesReq = BMR_Male * 1.55;
    fetchData(dailycaloriesReq);
  } else if (gender == "male" && activity == "active") {
    dailycaloriesReq = BMR_Male * 1.725;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activity == "light") {
    dailycaloriesReq = BMR_Female * 1.375;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activity == "moderate") {
    dailycaloriesReq = BMR_Female * 1.55;
    fetchData(dailycaloriesReq);
  } else if (gender == "Female" && activity == "active") {
    dailycaloriesReq = BMR_Female * 1.725;
    fetchData(dailycaloriesReq);
  }
}
