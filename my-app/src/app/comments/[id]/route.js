import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(request, { params }) {
  const { id } = await params;

  if(parseInt(id) > comments.length)
  {
    redirect("/comments");
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return new Response(
      JSON.stringify({ error: "Comment not found" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(comment), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}


export async function PATCH(request, {params})
{
    const body = await request.json();
    const { text } = body;
    const { id } = await params;
    
    const index = comments.findIndex((comment) => comment.id === parseInt(id));

    comments[index].text = text;

    return new Response(JSON.stringify(comments[index]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
}

export async function DELETE(request, {params} )
{
    const {id} = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index, 1);

    return new Response(JSON.stringify(deletedComment), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
}