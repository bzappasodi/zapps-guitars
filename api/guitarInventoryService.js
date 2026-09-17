export async function getGuitars() {
  try {
    const resp = await fetch(
      "json/guitars.json"
    );
    if (resp.ok) {
      return await resp.json();
    }
  } catch (e) {
    console.log("Error " + e);
  }
}



