// Functional Programming: 
//Apply Functional Programming to Convert Strings to URL Slugs 
// The global variable


var globalTitle = "Winter Is Coming";
// Only change code below this line
function urlSlug(title) {
    let newTitle = title.trim();
    return newTitle.split(/\s+/g).join("-").toLowerCase();
}

urlSlug("Winter Is Coming") //should return "winter-is-coming".