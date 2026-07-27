
import OpenAI from "openai";

export async function POST(req){
 const body=await req.json();

 // 真实部署时填写 OPENAI_API_KEY
 // const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});

 return Response.json({
   answer:`AI建议：针对${body.weak}，未来7天完成基础题、强化题、真题训练闭环。`
 });
}
