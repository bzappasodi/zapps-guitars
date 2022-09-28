
export async function getGuitars () {
    console.log("hi there")
    const resp = await fetch(
        "https://zappsguitars.s3.amazonaws.com/guitars.json"
    );
   return await resp.json();
}

