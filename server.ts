import { serve } from "https://deno.land/std@0.182.0/http/server.ts";

function handler(_req: Request): Response {
    return new Response("Hello World");
}

console.log("Server running on port 8000");
serve(handler);