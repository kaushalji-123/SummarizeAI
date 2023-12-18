import React from 'react'
const hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between mb-7 bg">
            <div className="logo ">
            <img src="./src/assets/summlogo.png" alt="sumz_logo"
             className="w-28"/>
             </div>
             <button className="nav_button" href="https://www.linkedin.com/in/divyanshu-kaushal-73a428209/"> Github </button>
        </nav>
            <h1 className="head_text"> Summarize Artices with
            <br className="max-md:hidden"/> 
            <span
             className="orange_gradient">OpenAi GPT-4 </span>
             </h1>
             <h2 className="desc">
             Effortlessly summarize any web or article link with this intelligent tool. It generates concise, meaningful summaries, providing a quick reference to key points within articles, ultimately saving valuable time.
             </h2>
    </header>
  )
}

export default hero