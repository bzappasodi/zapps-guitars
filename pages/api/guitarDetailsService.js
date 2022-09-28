


async function getGuitars() {
    const resp = await fetch(
        "https://zappsguitars.s3.amazonaws.com/guitars.json"
    );
    await resp.json();
}
