
"use client";
import {useState} from "react";

export default function Home(){
 const [result,setResult]=useState("");
 async function ai(){
   const r=await fetch("/api/ai",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({weak:"数学函数"})
   });
   const d=await r.json();
   setResult(d.answer);
 }
 return <main style={{padding:40,fontFamily:"sans-serif"}}>
 <h1>🎓 Gaokao AI Coach 2027</h1>
 <h2>广东高考私人AI备战系统</h2>

 <section>
 <h3>智能题库</h3>
 <button onClick={ai}>生成我的专项训练</button>
 <p>{result}</p>
 </section>

 <section>
 <h3>AI错题本</h3>
 <p>自动分类：函数 / 导数 / 电磁学 / 实验题</p>
 </section>

 <section>
 <h3>学习计划</h3>
 <p>AI每日计划：数学90分钟 英语40分钟 物理60分钟</p>
 </section>

 <section>
 <h3>成绩分析</h3>
 <p>预测分数：586 → 目标650</p>
 </section>
 </main>
}
