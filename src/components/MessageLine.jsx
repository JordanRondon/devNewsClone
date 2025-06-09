import { SparklesIcon, UserIcon } from '@heroicons/react/24/outline'

export default function MessageLine ( {message} ) {
    return (
        <div className={`flex align-start ${message.user && ("justify-end")}`}>
            {
               !message.user && (
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center mr-3 bg-gray-300">
                        <SparklesIcon className="w-6 h-6" />
                    </span>
                )
            }
            <div className={`max-w-[80%] px-4 py-2 rounded-sm ${!message.user? "bg-gray-300": "bg-blue-200"}`}>
                <p>{message.text}</p>
            </div>
            {
                message.user && (
                    <span className="inline-flex w-8 h-8 rounded-full items-center justify-center ml-3 bg-blue-200">
                        <UserIcon className="w-6 h-6" />
                    </span>
                )
            }
        </div>
    );
}