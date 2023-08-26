//hecho por DIEGO-OFC pro

import axios from "axios";

const handler = async (m, { text }) => {
const bingSearchUrl = "https://www.bing.com/search?q=";

  const term = text.toLowerCase();

  const options = {
    params: {
      q: term,
    },
  };

  try {
    const response = await axios.get(bingSearchUrl, options);

    if (response.status === 400) {
      throw new Error(`Error al buscar "${term}"`);
    }

    const results = response.data.webPages;

    m.reply(`Los resultados de la búsqueda de "${term}" son: ${results}`);
  } catch (error) {
    m.reply(error.message);
  }
};

handler.command = ["bing"];

export default handler;