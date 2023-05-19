const fs = require("fs");
const {createClient} = require("contentful");

const client = createClient ({
    space : "2gmj7mnwoa4a",
    enironment:"master",
    accessToken: "reCl7P0HoeHM8_NL-JGeLPdSkrE4EHBVdl6-wDhcGIM",
});

 client.getEntries().then((data) => {
const [siteEntry] = data.items.filter(
(entry) => entry.sys.contentType.sys.id ==="Mysite"
);
console.log("posts",posts);
const jsonString = JSON.stringify(siteEntry, null, 2);
const filePath = "./public/data.json";

fs.writeFile(filePath, jsonString, (err) => {
    if(err){
        console.error("Failed to save JSON data", err);

    } 
    else {
        console.log("JSON data saved to file:", filePath);
    }
});    
});
