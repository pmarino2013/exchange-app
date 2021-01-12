export const getExchange = async () => {
  let cantidad;
  try {
    const resp = await fetch("https://api.coincap.io/v2/exchanges");
    const data = await resp.json();

    cantidad = data.data.length;
  } catch (error) {
    console.log(error);
  }

  return cantidad;
};
