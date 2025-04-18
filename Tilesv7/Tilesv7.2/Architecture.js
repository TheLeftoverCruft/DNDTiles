function toggleArchitecturePopup(id) {
    
    var walls = document.getElementById(id);
    walls.classList.toggle("open");
    highlightwalls(id);
  
    const divs = document.querySelectorAll(".wall_tile");
    divs.forEach(function (div) {
      console.log(div);
      console.log(div.id);
      if ((div.id != id) & div.classList.contains("open")) {
        div.classList.toggle("open");
        console.log("check1");
      }
    });
  }
  function highlightwalls(id) {
    var wallsopencheck = document.getElementById(id);

    if (wallsopencheck.classList.contains("open")){
    const walls = document.getElementsByClassName("wall");
    for (const wall of walls) {
      wall.style.backgroundColor = "#555";
    }
    }
    else {
      const walls = document.getElementsByClassName("wall");
      for (const wall of walls) {
        wall.style.backgroundColor = "";
      }
      }
  
  }

  function changewallcolour(location, i, k) {
    const div = document.getElementById("sidebar3");
    if (!div) {
      console.error("Div not found");
      return null;
    }
  
    const target = div.querySelector(`.${"open"}`);
    //If everything goes right
  
    if (target) {
      console.log("Found element ID:", target.id);
      console.log(i,k);
      const wall = document.getElementById(
        "wall_" +location+ i.toString() + "." + k.toString()
      );
      
  
      // console.log(colorwallclass.split(" ")[1])
      // console.log(window.getComputedStyle(document.getElementById(colorwall), null).getPropertyValue("background-color"))
      // console.log(document.cookie)
  
      const color_of_wall = window
        .getComputedStyle(document.getElementById(target.id), null)
        .getPropertyValue("background-color");
      const image_of_wall = window
        .getComputedStyle(document.getElementById(target.id), null)
        .getPropertyValue("background-image");
  
      classesforwall = wall.className.split(" ");
      wall.style.backgroundColor = color_of_wall;
      wall.style.backgroundImage = image_of_wall;

      if (classesforwall[2] == null) {
        wall.classList.add(target.id);
      } else {
        wall.classList.remove(classesforwall[2]); // Remove mystyle class from DIV
        wall.classList.add(target.id); // Add newone class to DIV
      }
      return target.id;
  
      // If no character is selected
    } else {
      console.log("No element with the specified class found in the div.");
      return null;
    }
  }