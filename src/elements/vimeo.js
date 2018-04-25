import React from "react";

import Vimeo from "@u-wave/react-vimeo";

const VimeoPlayer = (props) => {
    console.log("vimeo props id", props.id);
    return (
    <div class="vimeo-container">    
        <Vimeo video={ props.id } />
    </div>
    )
}

export default VimeoPlayer;