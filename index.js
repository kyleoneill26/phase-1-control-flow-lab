function scuberGreetingForFeet(a){
  if (a <= 400){
    return 'This one is on me!';
  } else if (400 <= a && a <= 2000){
    return 'That will be twenty bucks.';
  } else if (2000 <= a && a <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(amount){
  if (amount === 'generous'){
    return 'Thank you so much.'
  } else if (amount === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
    
  
}