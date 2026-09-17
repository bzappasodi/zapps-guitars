export async function getAmplifiers() {
  try {
    const resp = await fetch("json/amps.json");
    if (resp.ok) {
      return await resp.json();
    }
  } catch (e) {
    console.log("Error " + e);
  }
}
