import { SparklesIcon, UserIcon } from '@heroicons/react/24/outline'
import MessageContent from './MessageContent';

export default function MessageLine ( {message} ) {
    const isUser = message.role === 'user';

    return (
        <div className={`flex align-start ${isUser && ("justify-end")}`}>
            {
               !isUser && (
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center mr-3 bg-gray-300">
                        <SparklesIcon className="w-6 h-6" />
                    </span>
                )
            }
            <div className={`max-w-[80%] px-4 py-2 rounded-sm ${!isUser? "bg-gray-300": "bg-blue-200"}`}>
                <MessageContent message={message}/>
            </div>
            {
                isUser && (
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center ml-3 bg-blue-200">
                        <UserIcon className="w-6 h-6" />
                    </span>
                )
            }
        </div>
    );
}