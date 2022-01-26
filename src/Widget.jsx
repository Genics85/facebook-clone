import React from "react";
import "./widget.css"

function Widget(){
    return <div className="widget">
 <iframe 
 src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FCleverProgrammerr%2Fposts%2F1417605531975510&show_text=true&width=500" 
 width="500" 
 height="793" 
 style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>;
}

export default Widget