export async function getGuitars() {
    try {
        const resp = await fetch(
            "https://zappsguitars.s3.amazonaws.com/guitars.json"
        );
        if (resp.ok) {
            return await resp.json();
        }
    } catch (e) {
        console.log("Error " + e)
    }
}

