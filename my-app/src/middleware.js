import { NextResponse } from "next/server";

export function middleware(request){

    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");

    if(!themePreference)
    {
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-headers","custom-value");

    return response;

    // if (request.nextUrl.pathname === "/about")
    // {
    //     // return NextResponse.redirect(new URL("/hello" , request.url));
    //     return NextResponse.rewrite(new URL("/hello" , request.url));
    // }

    // return NextResponse.redirect(new URL("/" , request.url));
}

// export const config = {
//     matcher : "/about",
// };