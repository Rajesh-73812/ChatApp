import React from 'react'
import ChatComponentGemini from './components/ChatComponentGemini'

const Page2 = () => {
  return (
    <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl">GPT-4 Streaming Chat Application</h2>
        <ChatComponentGemini />
      </div>
    </main>
    </div>
  )
}

export default Page2