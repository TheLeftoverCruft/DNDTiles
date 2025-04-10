let length = 0;
let width = 0;
let counter = 1;

//file increment
function changeValue(amount) {
    if ((counter+amount*2)>0) {
        counter += amount*2;
        updateDisplay();
    }
}

function resetCounter() {
  counter = 1;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("counterInput").value = counter;
  createTiles(counter,counter)
}

function updateCounterFromInput() {
  const inputVal = parseInt(document.getElementById("counterInput").value, 10);
  
  if (!isNaN(inputVal)&&inputVal>3) {
    counter = inputVal;
    console.log("check1")
  } else {
    counter = 1;
    console.log("check2")
  }
  updateDisplay();
}

function createTiles(length,width) {
  tilesize=75
  gapsize=5

  max=7
  if (length>max) {
    gapsize=(gapsize*max/length)
    tilesize=(tilesize*max/length)


    
  }
  tilesizevh=tilesize+"px"
  gapsizevh=gapsize+"px"

  console.log(gapsize,tilesize)
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns="repeat(" + width+ ", "+tilesizevh+")"
  grid.style.gridTemplateRows="repeat("+width+", "+tilesizevh+")"
  grid.style.gap=gapsizevh

  try {
    if (grid.getElementsByClassName("tile").length>0) {
        console.log(grid.getElementsByClassName("tile"))

        grid.innerHTML = "";
    }
  } catch (error) {
    console.log(grid.getElementsByClassName("tile"))
  } 

  for (let i = 0; i < length; i++) {
    for (let k = 0; k < width; k++) {
      let tile = document.createElement("div");
      tile.className = "tile";
      tile.id = "tile" + (i-(length-1)/2).toString() + "." + (k-(width-1)/2).toString();
      tile.addEventListener("click", function () {
        popupbaraction((i-(length-1)/2), (k-(width-1)/2));
      });
      tile.style.width=tilesizevh
      tile.style.height=tilesizevh
      tile.style.borderWidth=gapsize/20+"px"
      grid.appendChild(tile);
      const circle = document.createElement("div");
      circle.className = "charcircle";
      circle.id = "charcircle" + (i-(length-1)/2).toString() + "." + (k-(width-1)/2).toString();
      tile.appendChild(circle);
    }
  }

  // document.getElementById("tile2.2").style.backgroundColor="red"
}
// function changecolour(colortileclass) {
//     colortile=colortileclass.split(" ")[1]
//     // console.log(colortileclass.split(" ")[1])
//     // console.log(window.getComputedStyle(document.getElementById(colortile), null).getPropertyValue("background-color"))
//     // console.log(document.cookie)

//     const myArray = (document.cookie).split("=");
//     let tilenum = myArray[1];
//     const color_of_tile = window.getComputedStyle(document.getElementById(colortile), null).getPropertyValue("background-color");
//     const image_of_tile = window.getComputedStyle(document.getElementById(colortile), null).getPropertyValue("background-image");
//     const tile = document.getElementById(tilenum);

//     tile.style.backgroundColor=color_of_tile
//     tile.style.backgroundImage=image_of_tile
//     console.log(tile.className)
//     classesfortile=tile.className.split(" ")
//     console.log(classesfortile[1])
//     if (classesfortile[1]==null) {
//         tile.classList.add(colortile);

//     }
//     else {
//         tile.classList.remove(classesfortile[1]); // Remove mystyle class from DIV
//         tile.classList.add(colortile); // Add newone class to DIV
//     }

// }
function toggleSidebar() {
  var popupBar = document.getElementById("characterbar");
  var sidebarleft = document.getElementById("sidebar");
  var sidebarright = document.getElementById("sidebar2");
  popupBar.classList.toggle("open");
  if (popupBar.classList.contains("open")) {
    popupBar.classList.toggle("open");
  }
  if (!sidebarleft.classList.contains("open")) {
    sidebarleft.classList.toggle("open");
  }
  if (sidebarright.classList.contains("open")) {
    sidebarright.classList.toggle("open");
  }
}
function toggleSidebar2() {
  var popupBar = document.getElementById("characterbar");
  var sidebarleft = document.getElementById("sidebar");
  var sidebarright = document.getElementById("sidebar2");
  popupBar.classList.toggle("open");
  if (popupBar.classList.contains("open")) {
    popupBar.classList.toggle("open");
  }
  if (sidebarleft.classList.contains("open")) {
    sidebarleft.classList.toggle("open");
  }
  if (!sidebarright.classList.contains("open")) {
    sidebarright.classList.toggle("open");
  }
}

function readTextFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    console.log(e.target.result); // Logs file content to console
    envcreate(e.target.result);
  };
  reader.readAsText(file);
}

document.getElementById("fileInput").addEventListener("change", function () {
  if (this.files.length > 0) {
    readTextFile(this.files[0]);
  }
});

function envcreate(content) {
  array = content.split("\n");
  // console.log(array[1])
  for (let i = 0; i < array.length - 1; i++) {
    seperated = array[i].split("=");
    console.log(seperated[1]);
    try {
      document.getElementById(seperated[0]).style.backgroundImage = window
        .getComputedStyle(document.getElementById(seperated[1]), null)
        .getPropertyValue("background-image");
      document.getElementById(seperated[0]).style.backgroundImage;
      console.log(
        window
          .getComputedStyle(document.getElementById(seperated[1]), null)
          .getPropertyValue("background-image")
      );
      document.getElementById(seperated[0]).style.backgroundColor = window
        .getComputedStyle(document.getElementById(seperated[1]), null)
        .getPropertyValue("background-color");

      tile = document.getElementById(seperated[0]);
      classesfortile = tile.className.split(" ");
      console.log(classesfortile[1]);
      console.log(seperated[1]);
      if (classesfortile[1] == null) {
        tile.classList.add(seperated[1]);
      } else {
        tile.classList.remove(classesfortile[1]); // Remove mystyle class from DIV
        tile.classList.add(seperated[1]); // Add newone class to DIV
      }
    } catch {}
  }
}
function env_to_text() {
  envcont = "";
  for (let i = 0; i < length; i++) {
    for (let k = 0; k < length; k++) {
      tile = "tile" + i.toString() + "." + k.toString();
      envcont =
        envcont +
        tile +
        "=" +
        document.getElementById(tile).className.split(" ")[1] +
        "\n";

      console.log(i, k);
    }
  }
  return envcont;
}
function envsave() {
  text_content = env_to_text();

  // Ask for file name
  let fileName = prompt(
    "Enter the file name (without extension):",
    "myTextFile"
  );

  // If user cancels or leaves it empty, use default name
  if (!fileName) return;

  // Get text from textarea

  // Create a Blob (Binary Large Object) containing the text
  const blob = new Blob([text_content], { type: "text/plain" });

  // Create a temporary <a> element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob); // Convert blob to URL

  // Set filename and extension
  link.download = fileName + ".txt";

  // Trigger the download
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
}
function createCharacter() {
  const characterbar = document.getElementById("characterbar");
  let characterpopup = document.createElement("div");
  characterpopup.className = "character";
  let charactername = prompt("Enter the charactername", "Tav");
  characterpopup.id = "Character: " + charactername;
  characterpopup.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  characterpopup.addEventListener("click", function () {
    toggleCharacterPopup(this.id);
  });
  characterbar.appendChild(characterpopup);
  characterpopup.innerHTML = "<p>" + charactername + "</p>";
}

function togglePopupBar() {
  var popupBar = document.getElementById("characterbar");
  var sidebarleft = document.getElementById("sidebar");
  var sidebarright = document.getElementById("sidebar2");
  popupBar.classList.toggle("open");
  if (!popupBar.classList.contains("open")) {
    popupBar.classList.toggle("open");
  }
  if (sidebarleft.classList.contains("open")) {
    sidebarleft.classList.toggle("open");
  }
  if (sidebarright.classList.contains("open")) {
    sidebarright.classList.toggle("open");
  }
}
function toggleCharacterPopup(id) {
  console.log(id);
  var popupBar = document.getElementById(id);
  popupBar.classList.toggle("open");

  const divs = document.querySelectorAll(".character");
  divs.forEach(function (div) {
    console.log(div);
    console.log(div.id);
    if ((div.id != id) & div.classList.contains("open")) {
      div.classList.toggle("open");
      console.log("check1");
    }
  });
}
function toggleElementsPopup(id) {
  console.log(id);
  var popupBar = document.getElementById(id);
  popupBar.classList.toggle("open");

  const divs = document.querySelectorAll(".color_tile");
  divs.forEach(function (div) {
    console.log(div);
    console.log(div.id);
    if ((div.id != id) & div.classList.contains("open")) {
      div.classList.toggle("open");
      console.log("check1");
    }
  });
}

function popupbaraction(i, k) {
  //check which popubar is open
  const elements = document.querySelectorAll(`.${"open"}.${"bar"}`);

  elements.forEach((el) => {
    if (el.id == "characterbar") {
      movecharacter(i, k);
    } else if (el.id == "sidebar") {
      changecolour(i, k);
    } else {
    }
  });
}

function movecharacter(i, k) {
  const div = document.getElementById("characterbar");
  if (!div) {
    console.error("Div not found");
    return null;
  }

  const target = div.querySelector(`.${"open"}`);
  //If everything goes right
  if (target) {
    console.log("Found element ID:", target.id);
    const circle = document.getElementById(
      "charcircle" + i.toString() + "." + k.toString()
    );

    //Removes old circle to place new colour, moves chgaracter
    const elements = document.querySelectorAll(`.${"charcircle"}`);

    elements.forEach((el) => {
      if (el.id) {
        const currentColor = window.getComputedStyle(el).backgroundColor;

        // Normalize color strings for comparison
        const normalize = (color) => color.replace(/\s+/g, "").toLowerCase();

        if (
          normalize(currentColor) === normalize(target.style.backgroundColor)
        ) {
          el.style.backgroundColor = "";
        }
      }
    });

    circle.style.backgroundColor = target.style.backgroundColor;
    return target.id;

    // If no character is selected
  } else {
    console.log("No element with the specified class found in the div.");
    return null;
  }
}

function changecolour(i, k) {
  const div = document.getElementById("sidebar");
  if (!div) {
    console.error("Div not found");
    return null;
  }

  const target = div.querySelector(`.${"open"}`);
  //If everything goes right

  if (target) {
    console.log("Found element ID:", target.id);
    console.log(i,k)
    const tile = document.getElementById(
      "tile" + i.toString() + "." + k.toString()
    );

    // console.log(colortileclass.split(" ")[1])
    // console.log(window.getComputedStyle(document.getElementById(colortile), null).getPropertyValue("background-color"))
    // console.log(document.cookie)

    const color_of_tile = window
      .getComputedStyle(document.getElementById(target.id), null)
      .getPropertyValue("background-color");
    const image_of_tile = window
      .getComputedStyle(document.getElementById(target.id), null)
      .getPropertyValue("background-image");

    classesfortile = tile.className.split(" ");
    tile.style.backgroundColor = color_of_tile;
    tile.style.backgroundImage = image_of_tile;

    if (classesfortile[1] == null) {
      tile.classList.add(target.id);
    } else {
      tile.classList.remove(classesfortile[1]); // Remove mystyle class from DIV
      tile.classList.add(target.id); // Add newone class to DIV
    }
    return target.id;

    // If no character is selected
  } else {
    console.log("No element with the specified class found in the div.");
    return null;
  }
}

//shit i want to run on page open
updateCounterFromInput()