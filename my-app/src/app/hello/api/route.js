import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request){

    const requestHeaders = new Headers(request.headers);
    const headerList = await headers();

    const theme = request.cookies.get("theme");
    console.log(theme);
    
    // cookies().set("ValuesPerPage","20");

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    return new Response('<h1>Hello World!!</h1>',{
        headers : {
            "Content-Type" : "text/html",
            "Set-Cookie" : "theme=dark",
        }
    });
}