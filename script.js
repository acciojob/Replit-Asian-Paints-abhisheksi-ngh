//your JS code here. If required.
 const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");
    const gridItems = document.querySelectorAll(".grid-item");

    changeButton.addEventListener("click", () => {
      // Get the input values
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      if (blockId >= 1 && blockId <= 9 && color) {
        // Reset all grid items
        gridItems.forEach(item => item.style.backgroundColor = "transparent");

        // Change the background color of the selected block
        document.getElementById(blockId).style.backgroundColor = color;
      } else {
        alert("Please enter valid block ID and color.");
      }
    });

    resetButton.addEventListener("click", () => {
      // Reset all grid items
      gridItems.forEach(item => item.style.backgroundColor = "transparent");
    });