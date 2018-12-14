import { Pokedex, Pokemon } from "pokedex";

import utils from "./utils";

const pokedex = new Pokedex();

const makeCaption = (pokemon: Pokemon): string =>
  `#${pokemon.id} ${utils.toTitleCase(pokemon.name)}\nHeight: ${pokemon.height /
    10} m\nWeight: ${pokemon.weight / 10} kg`;

const pokedexByName = bot => (msg: Message, match: RegExpMatchArray) => {
  const pokemon = pokedex.pokemon(match[1].toLowerCase());
  bot.sendVideo(msg.chat.id, pokemon.sprites.animated, {
    caption: makeCaption(pokemon)
  });
};

const pokedexById = bot => (msg: Message, match: RegExpMatchArray) => {
  const pokemon = pokedex.pokemon(+match[1]);
  bot.sendVideo(msg.chat.id, pokemon.sprites.animated, {
    caption: makeCaption(pokemon)
  });
};

export default { byId: pokedexById, byName: pokedexByName };
