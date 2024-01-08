import DOMPurify from "dompurify";
import { marked } from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/tokyo-night-dark.min.css';
export default function Preview(props) {
    marked.setOptions({
        highlight: function (code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-'
      });
    //const parsed = marked.parse(props.markdown);
    const parsed = DOMPurify.sanitize(marked.parse(props.markdown));
    return (
    <div>
        <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
            Preview
        </div>
        <div className=" p-6 prose prose-invert" dangerouslySetInnerHTML={{__html:parsed}}  />
    </div>)


}