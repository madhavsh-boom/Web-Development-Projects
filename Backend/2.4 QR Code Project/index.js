import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer
.prompt([
    {"message": "Type in your URL",
        "name" : "URL"
    }
])
.then((answer) => {
    const url = "https://" + answer.URL
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_image.png"))

    fs.writeFile("url.txt",url,(err) => {
        if(err) throw err;
        console.log("url saved in the file!!")
    })
})
.catch((error) => {
    if(error.isTtyError){

    }else {

    }
});


