//target the button
const button = document.getElementById("button");
const colors = [ 'red', 'teal', 'blue', 'green', 'purple'];

ColorChange();

function ColorChange() {
    button.addEventListener("click", () => {
        const genCol = parseInt(Math.random()*colors.length);
        document.body.style.backgroundColor = colors[genCol];
        
    });
 }