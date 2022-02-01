function scuberGreetingForFeet(feet){
  if(feet<400){
    return "This one is on me!";
  } else if (feet > 2500){
    return 'No can do.';
  } else if (feet > 2000){
    return 'I will gladly take your thirty bucks.';

  }
}

function ternaryCheckCity(cityName){
  const response = cityName == "NYC" ? 'Ok, sounds good.' : "No go.";
  return response; 
}

function switchOnCharmFromTip(generosity){
  switch(generosity){
    case("generous"):
      return 'Thank you so much.';
      break;
    case("not as generous"):
      return "Thank you.";
      break;
    default:
      return "Bye."
      break;
  }

}