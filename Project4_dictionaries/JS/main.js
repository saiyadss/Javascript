// create my dictionary list //
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    // deletes the value //
    delete Animal.Species;
    document.getElementById("Dictionary").innerHTML = Animal.Species;
}