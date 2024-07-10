
export async function GET() {
      return new Response('hello world this is me from api')
    }
    

export async function POST(req) {
  const Comment = await req.json();

  console.log(Comment.text)

  return new Response(JSON.stringify(Comment.text),{
    headers:{
      "Content-Type":"application/json"
    }
  })
    }
    

