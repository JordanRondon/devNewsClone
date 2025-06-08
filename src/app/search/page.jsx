import { ChatBubbleOvalLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function searchPage () {

    return (<>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <ChatBubbleOvalLeftIcon className='w-8 h-8'/>
            AI-Powered Search
        </h1>
        <p className="text-gray-600 mb-10">Chat with our AI to discover articles based on your interests</p>
        <div className="border border-gray-300 rounded-md px-6 py-6">
            <h2 className="text-lg font-bold">Chat Assistant</h2>
            <div className="h-100"></div>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Ask about topics you're interested in..."
                    className="w-full border border-gray-300 rounded-sm px-3 py-2"
                />
                <button className="border border-gray-500 bg-gray-500 text-white px-4 py-1 rounded-md hover:bg-gray-600 transition-colors">
                    <PaperAirplaneIcon className='w-5 h-5'/>
                </button>
            </div>
        </div>
    </>);
}