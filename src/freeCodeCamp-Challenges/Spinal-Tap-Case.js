// Intermediate Algorithm Scripting: Spinal Tap Case
// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str.split(/(?=[A-Z])|\_|\W/)
    .join("-")
    .toLowerCase();
  }
  
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  