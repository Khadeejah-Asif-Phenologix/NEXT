import { ImageSlider } from "@/components/ImageSlider";
import { ServerSideFunction } from "../utils/server-utils"

export default function ServerRoutePage(){
    console.log("Server Route Rendered...");
    const result = ServerSideFunction();
    return(
        <div>
            <h1>Server Route Page</h1>
            <p>{result}</p>
            <ImageSlider/>
        </div>
    )
}