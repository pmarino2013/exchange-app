export const getAssets = async () => {
  let cantidad;
  try {
    const resp = await fetch("https://api.coincap.io/v2/assets?limit=2000");
    const data = await resp.json();

    console.log(data.data.length);
    cantidad = data.data.length;
  } catch (error) {
    console.log(error);
  }

  return cantidad;
};
