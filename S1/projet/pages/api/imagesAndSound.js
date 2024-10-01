import fs from 'fs';

export default async function handler(req, res){
    if(req.method === "GET"){
        //const pictures = fs.readdirSync("./public/img/");
        //const sounds = fs.readdirSync("./public/sounds/");

        const pictures = [
            "bigmouthgoofy.jpg",
            "fathergoofy.jpg",
            "hahagoofy.jpg",
            "shotgungoofy.jpg",
            "traingoofy.jpg",
            "vroomgoofy.jpg",
            "yoshi.png",
            "endermangoofy.jpg",
            "pcgoofy.jpg",
            "railgoofy.jpg",
            "kaarischickengoofy.jpg",
            
        ];

        const elementLs = [];

        pictures.forEach(img => {
            let soundUrl = img.split(".")[0]+".mp3";
            /*sounds.forEach(sound => {
                if(img.split(".")[0] == sound.split(".")[0]){
                    soundUrl = sound;
                }
            });*/
            elementLs.push({
                imgurl: img,
                soundurl: soundUrl
            })
        })

        res.status(200).json(elementLs);
    }
}