import { Hono } from "hono";
const app = new Hono();
import { calculateReadingTime } from "./utils";

// a funnction to calculate the reading time 
let defaultReadingSpeed =238;

let testStr="sam obcaecati ea corrupti ad magnam. Soluta eligendi iusto amet quis non quaerat doloremque, nisi voluptatum, obcaecati adipisci, deserunt similique provident unde asperiores expedita! Assumenda facilis quos delectus veniam vitae unde, similique illo facere repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique laboriosam quidem dolorum amet nul cum accusantium blanditiiscum accusantium blanditiis sunt distinctio corrupti unde consequatur natus rem? Dolorum hic exercitationem non possimus fugiat ea consectetur ullam fugit ipsa. Magnam quae obcaecati sapiente animi voluptates nobis quisquam! Commodi ad laudantium harum nemo non minima animi minus maxime blanditiis eveniet voluptate possimus architecto aperiam dolores tempora fugiat, impedit cupiditate , impedit hghyfh  cupiditate adipisci, deserunt ratione molestiae qui quibusdam. Perferendis veritatis optio a. Omnis aspernatur dolore fugiat reprehenderit corrupti ea adipisci, praesentium autem, exercitationem unde consequatur provident laboriosam temporibus? Quasi provident illum nesciunt, voluptatibus nam veniam, lpossimus quaerat facere tenetur quae magnam dignissimos at illo cum minima obcaecati. Non nostrum voluptate facere ducimus doloribus, autem voluptates quia dicta cupiditate architecto, consectetur tempora laboriosam dolorem sequi in. Alias atque obcaecati corporis. Assumenda quibusdam voluptatibus, ducimus commodi culpa ratione quidem id, fugit beatae praesentium quo nemo eaque voluptate rerum. Eius quas, eligendi maiores atque, delectus ut possimus autem cumque tempore quidem odit, ipsam obcaecati ea corrupti ad magnam. Soluta eligendi iusto amet quis non quaerat doloremque, nisi voluptatum, obcaecati adipisci, deserunt similique provident unde asperiores expedita! Assumenda facilis quos delectus veniam vitae unde, similique illo facere repudiandae?";
const x=calculateReadingTime(testStr,defaultReadingSpeed);
  console.log(x);
  
//MARK: Route
// @desc API status
// @route GET /status
// @access public
app.get("/status", (c)  => {return c.json({message:"ok"})});

app.get("/api/calculate", (c)  => {
  const sentence = c.req.query("sentence");
  const wpm = c.req.query("wpm");
  if(!sentence){
    return c.json({message:"Please provide a sentence"},400);
  }
  // console.log(sentence);
  const readingTime = calculateReadingTime(sentence,Number(wpm)||defaultReadingSpeed);
  return c.json({readingTime});
});

app.post("/api/calculate", async(c)  => {
  // return c.json({message:"Api is active",status:"ok"});
  const {sentence,wpm} = await c.req.json();
  if(!sentence){
    return c.json({message:"Please provide a sentence"},400);
  }
  const readingTime = calculateReadingTime(sentence,Number(wpm)||defaultReadingSpeed);
  return c.json({readingTime});
});

export default app;