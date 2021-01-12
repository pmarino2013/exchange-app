export const getMarkets = async () => {
  let cantidad;
  try {
    const resp = await fetch(`https://api.coincap.io/v2/markets`);
    const data = await resp.json();

    cantidad = data.data.length;
  } catch (error) {
    console.log(error);
  }

  return cantidad;
};
