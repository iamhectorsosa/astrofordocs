import type { APIContext } from "astro";

export async function get({ redirect }: APIContext) {
    return redirect("about/overview", 308);
}
