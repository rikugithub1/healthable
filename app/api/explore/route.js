import Post from "@/models/post";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";
import { sampledata } from "@/utils/seed";

export const GET = async (req, { params }) => {
    const query = req.nextUrl.searchParams.get("q");
    const tag = req.nextUrl.searchParams.get("tag");
    console.log("Called Query : ", query)
    console.log("Called Tag: ", tag)

    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     next: { revalidate: 60 }, // Revalidate every 60 seconds
    // })
    // const data = await res.json()
    
    // return NextResponse.json(data)
      
    return new Response(JSON.stringify({ posts: sampledata }), { status: 200 })

    // try {
    //     await connectToDB()


    //     // const prompt = await Query.findById(params.id).populate("creator")
    //     if (!prompt) return new Response("Prompt Not Found", { status: 404 });

    //     return new Response(JSON.stringify(prompt), { status: 200 })

    // } catch (error) {
    //     return new Response("Internal Server Error", { status: 500 });
    // }
}
