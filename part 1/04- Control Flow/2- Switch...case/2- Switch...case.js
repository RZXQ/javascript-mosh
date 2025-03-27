// ===========================================================
//                      Switch Statement with Roles
// ===========================================================

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User"); // Log a messag
    break;

  // Note: The 'default' case is optional in a switch statement
  // If omitted and no cases match, the switch block will simply exit without executing any code
  default:
    console.log("Unknown User");
  // Note: The 'break' statement is optional here because 'default' is the last case
  // Since there's no code after this, the switch block will exit naturally
}
