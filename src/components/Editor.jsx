
export default function Editor(props){
    return(
        <div className="border-r-2 border-gray-600">
        <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
            MarkDown
        </div>
        <textarea className="w-full h-full bg-gray-800 outline-none p-6" onChange={(e)=>props.setMarkdown(e.target.value)}>{props.markdown}</textarea>
        </div>
        
    )
}