//uuid module
// import { v4 } from "https://deno.land/std@0.129.0/uuid/mod.ts";
//
//
// const uid = v4.generate();
// console.log(uid);

//writeJSon readJson
// import { readJson, writeJson } from 'https://deno.land/x/jsonfile/mod.ts';
//
// const jsonObj = await readJson("./ninja.json");
// console.log(jsonObj);
//
// const books = [
//     {
//     title: "The Art of Computer Programming", author: "Donald E. Knuth",},
//     {title: "The Art of Computer Programming", author: "Donald E. Knuth",}
// ];
// await  writeJson("books.json", books, {spaces: 2 });
// console.log('created books.json ')

//http module(server)
import { serve } from "https://deno.land/std@0.129.0/http/server.ts";

serve(() => new Response("Hello Ninja"));
for await  (const req of serve({ port: 8000 })) {
    req.respond({ body: "Hello Ninja" });
}
console.log("http://localhost:8000/");