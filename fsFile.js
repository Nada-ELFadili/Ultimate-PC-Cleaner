const fs = require("fs");
const path = require("path");
var rimraf = require("rimraf");

const directory = "C:/Users/Youcode/Desktop/temp/";
const cookie = "C:/Users/Youcode/AppData/Roaming/Mozilla/Firefox/Profiles/";
// const btnDelete = document.getElementById('cookies');
document.getElementById("btn2").style.display = "none";
document.getElementById("icon").style.display = "none";



let i = 0;


const analyse = () => {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    document.getElementById("myProgress").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("icon").style.display = "none";

    let width = 1;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        // -----------------------------------
        fs.readdir(directory, (err, files) => {
          if (err) throw err;
          if (files.length === 0) {
            document.getElementById("txt").innerHTML = "No file found!";
            document.getElementById("btn2").style.display = "block";
            document.getElementById("icon").style.display = "block";
            return;
          } else {
            for (const file of files) {
              document.getElementById("txt").innerHTML =
                files.length + " files founded!";
                document.getElementById("btn2").style.display = "block";
                document.getElementById("icon").style.display = "block";
              fs.readdir(path.join(directory, file), (err) => {
                if (err) throw err;
                return;
              });
            }
          }
        });

        // -----------------------------------
        clearInterval(id);
        i = 0;
        elem.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};


const deleted = () => {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    document.getElementById("myProgress").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("icon").style.display = "none";

    let width = 1;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        // -----------------------------------
        fs.readdir(directory, (err, files) => {
          if (err) throw err;
          if (files.length === 0) {
            document.getElementById("txt").innerHTML = "No file found!";
            document.getElementById("btn2").style.display = "block";
            document.getElementById("icon").style.display = "block";
            return;
          } else {
            for (const file of files) {
              document.getElementById("txt").innerHTML =
                files.length + " files deleted!";
              rimraf(path.join(directory, file), (err) => {
                if (err) throw err;
                document.getElementById("btn2").style.display = "block";
                document.getElementById("icon").style.display = "block";
                return;
              });
            }
          }
        });

        // -----------------------------------
        clearInterval(id);
        i = 0;
        elem.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};

const nettoyer = () => {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    document.getElementById("myProgress").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("icon").style.display = "none";

    let width = 1;
    let id = setInterval(frame, 20);

    function frame() {
      if (width >= 100) {
        // -----------------------------------
        fs.readdir(directory, (err, files) => {
          if (err) throw err;
          if (files.length === 0) {
            document.getElementById("txt").innerHTML = "No file found!";
            document.getElementById("btn2").style.display = "block";
            document.getElementById("icon").style.display = "block";
            return;
          } else {
            for (const file of files) {
              document.getElementById("txt").innerHTML =
                files.length + " files deleted!";
              rimraf(path.join(directory, file), (err) => {
                if (err) throw err;
                document.getElementById("btn2").style.display = "block";
                document.getElementById("icon").style.display = "block";
                return;
              });
            }
          }
        });

        // -----------------------------------
        clearInterval(id);
        i = 0;
        elem.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};

const home = () =>{
  location.reload(); 
}


function openWindow() {
  openedWindow = window.open('index.html');
}

const quit = () => {
 window.close();
  
}

const cookies= () => {
  if (i == 0) {
  i = 1;
  let elem = document.getElementById("myBar");
  document.getElementById("myProgress").style.display = "block";
  document.getElementById("btn").style.display = "none";
  document.getElementById("icon").style.display = "none";

  let width = 1;
  let id = setInterval(frame, 20);

  function frame() {
    if (width >= 100) {
      // -----------------------------------
      fs.readdir(cookie, (err, files) => {
        if (err) throw err;
        if (files.length === 0) {
          document.getElementById("txt").innerHTML = "No cookies found!";
          document.getElementById("btn2").style.display = "block";
          document.getElementById("icon").style.display = "block";
          return;
        } else {
          for (const file of files) {
            document.getElementById("txt").innerHTML =
              files.length + " cookies deleted!";
            rimraf(path.join(cookie, file), (err) => {
              if (err) throw err;
              document.getElementById("btn2").style.display = "block";
              document.getElementById("icon").style.display = "block";
              return;
            });
          }
        }
      });
      // -----------------------------------
      clearInterval(id);
      i = 0;
      elem.style.display = "none";
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }

  }
};



