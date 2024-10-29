// alert when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
    alert("The DOM has loaded");

    // changed background color to red if "red" is typed
    const redInput = document.getElementById("red-input");

    function handleRedInput() {
        if (redInput.value.trim().toLowerCase() === "red") {
            redInput.style.backgroundColor = "red";
        } else {
            redInput.style.backgroundColor = "transparent";
        }
    }
    redInput.addEventListener("input", handleRedInput);

    // add list item when #add-item button is clicked
    const addItemButton = document.getElementById("add-item");
    const listAddInput = document.getElementById("list-add");
    const list = document.querySelector("section#section-2 ul");

    function handleAddItem() {
        const newItem = document.createElement("li");
        newItem.innerText = listAddInput.value;
        list.appendChild(newItem);
        listAddInput.value = ""; // clear the input after adding the item
    }
    addItemButton.addEventListener("click", handleAddItem);

    // change background color of <section> when color is selected
    const colorSelect = document.getElementById("color-select");
    const section3 = document.getElementById("section-3");

    function handleColorSelect() {
        section3.style.backgroundColor = colorSelect.value;
    }
    colorSelect.addEventListener("input", handleColorSelect);

    // remove event listeners when #remove-listeners is clicked
    const removeListenersButton = document.getElementById("remove-listeners");
    removeListenersButton.addEventListener("click", () => {
        redInput.removeEventListener("input", handleRedInput);
        addItemButton.removeEventListener("click", handleAddItem);
        colorSelect.removeEventListener("input", handleColorSelect);
    })

});
