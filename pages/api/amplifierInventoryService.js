export async function getAmplifiers() {
    try {
        const resp = await fetch(
            "https://zappsguitars.s3.amazonaws.com/amps.json"
        );
        if (resp.ok) {
            return await resp.json();
        }
    } catch (e) {
        console.log("Error " + e)
    }
}

