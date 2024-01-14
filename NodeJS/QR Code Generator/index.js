import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {"message":"Type in your URL",
    "name":"URL"
},
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-img.png'));
    fs.writeFile("user.txt",url,(err)=>{
        if (err) throw err;
        console.log('Saved!');
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });