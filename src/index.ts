import { Hono } from "hono";
const app = new Hono();


// a funnction to calculate the reading time 
let defaultReadingSpeed =238;
function calculateReadingTime(sentence:string,wpm:number){
  const wordsCount:number = sentence.split(/\s+/).length;
  const minutes:number = wordsCount / wpm;
  const seconds:number = minutes * 60;
  return {
    wordsCount,
    minutes,
    seconds,  
    wpm,
  };
}
let testStr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique laboriosam quidem dolorum amet nulla saepe quae voluptate quia veniam, vero reprehenderit qui eaque iste alias sit quaerat voluptas corporis ea? Dolorum minus iste mollitia dolor laboriosam commodi laudantium nisi, laborum perferendis? Maxime magni minima sequi eos aliquam tempora nam iste, voluptatibus cum accusantium blanditiis sunt distinctio corrupti unde consequatur natus rem? Dolorum hic exercitationem non possimus fugiat ea consectetur ullam fugit ipsa. Magnam quae obcaecati sapiente animi voluptates nobis quisquam! Commodi ad laudantium harum nemo non minima animi minus maxime blanditiis eveniet voluptate possimus architecto aperiam dolores tempora fugiat, impedit cupiditate adipisci, deserunt ratione molestiae qui quibusdam. Perferendis veritatis optio a. Omnis aspernatur dolore fugiat reprehenderit corrupti ea adipisci, praesentium autem, exercitationem unde consequatur provident laboriosam temporibus? Quasi provident illum nesciunt, voluptatibus nam veniam, labore repellat, ad odit possimus quaerat facere tenetur quae magnam dignissimos at illo cum minima obcaecati. Non nostrum voluptate facere ducimus doloribus, autem voluptates quia dicta cupiditate architecto, consectetur tempora laboriosam dolorem sequi in. Alias atque obcaecati corporis. Assumenda quibusdam voluptatibus, ducimus commodi culpa ratione quidem id, fugit beatae praesentium quo nemo eaque voluptate rerum. Eius quas, eligendi maiores atque, delectus ut possimus autem cumque tempore quidem odit, ipsam obcaecati ea corrupti ad magnam. Soluta eligendi iusto amet quis non quaerat doloremque, nisi voluptatum, obcaecati adipisci, deserunt similique provident unde asperiores expedita! Assumenda facilis quos delectus veniam vitae unde, similique illo facere repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique laboriosam quidem dolorum amet nulla saepe quae voluptate quia veniam, vero reprehenderit qui eaque iste alias sit quaerat voluptas corporis ea? Dolorum minus iste mollitia dolor laboriosam commodi laudantium nisi, laborum perferendis? Maxime magni minima sequi eos aliquam tempora nam iste, voluptatibus cum accusantium blanditiis sunt distinctio corrupti unde consequatur natus rem? Dolorum hic exercitationem non possimus fugiat ea consectetur ullam fugit ipsa. Magnam quae obcaecati sapiente animi voluptates nobis quisquam! Commodi ad laudantium harum nemo non minima animi minus maxime blanditiis eveniet voluptate possimus architecto aperiam dolores tempora fugiat, impedit cupiditate adipisci, deserunt ratione molestiae qui quibusdam. Perferendis veritatis optio a. Omnis aspernatur dolore fugiat reprehenderit corrupti ea adipisci, praesentium autem, exercitationem unde consequatur provident laboriosam temporibus? Quasi provident illum nesciunt, voluptatibus nam veniam, lpossimus quaerat facere tenetur quae magnam dignissimos at illo cum minima obcaecati. Non nostrum voluptate facere ducimus doloribus, autem voluptates quia dicta cupiditate architecto, consectetur tempora laboriosam dolorem sequi in. Alias atque obcaecati corporis. Assumenda quibusdam voluptatibus, ducimus commodi culpa ratione quidem id, fugit beatae praesentium quo nemo eaque voluptate rerum. Eius quas, eligendi maiores atque, delectus ut possimus autem cumque tempore quidem odit, ipsam obcaecati ea corrupti ad magnam. Soluta eligendi iusto amet quis non quaerat doloremque, nisi voluptatum, obcaecati adipisci, deserunt similique provident unde asperiores expedita! Assumenda facilis quos delectus veniam vitae unde, similique illo facere repudiandae?";
const x=calculateReadingTime(testStr,defaultReadingSpeed);
  console.log(x);
  

app.get("/", (c) => {
  const sentence = c.req.query("sentence");
  const wpm = c.req.query("wpm");
  if(!sentence){
    return c.json({message:"Please provide a sentence"},400);
  }
  console.log(sentence);
  
  return c.text("Hello World!");
});

export default app;