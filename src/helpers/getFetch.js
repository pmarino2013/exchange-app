export const getData = async () => {
  let respuesta = {
    datos: [],
    loading: true,
    error: null,
  };
  try {
    const resp = await fetch(
      `https://api.coincap.io/v2/assets?limit=${limite}`
    );
    const data = await resp.json();
    // console.log(data.data.length);
    respuesta = {
      datos: data.data,
      loading: false,
      error: null,
    };
  } catch (error) {
    // console.log(error);
    respuesta = {
      datos: [],
      loading: false,
      error: error,
    };
  }
  return respuesta;
};

export const getAssets = async () => {
  let cantidad;
  try {
    const resp = await fetch("https://api.coincap.io/v2/assets?limit=2000");
    const data = await resp.json();

    cantidad = data.data.length;
  } catch (error) {
    console.log(error);
  }

  return cantidad;
};

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
