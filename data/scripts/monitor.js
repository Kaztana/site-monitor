import fs from "fs";

const result = [
 {
   name:"Google",
   status:"正常"
 }
];

fs.writeFileSync(
 "./data/result.json",
 JSON.stringify(result,null,2)
);
