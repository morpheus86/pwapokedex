import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FixedSizeGrid as Grid } from "react-window";

const CardList = ({ pokemons, search }) => {
  const Cell = props => {
    const { columnIndex, rowIndex, style } = props;
    const columnCount = 5;
    const itemKey = columnIndex + rowIndex * columnCount;
    const idx =
      pokemons && pokemons[itemKey]
        ? pokemons[itemKey].url.split("/")[
            pokemons[itemKey].url.split("/").length - 2
          ]
        : null;
    const name = pokemons && pokemons[itemKey] ? pokemons[itemKey].name : null;
    const id = pokemons && pokemons[itemKey] ? pokemons[itemKey].id : null;

    return (
      <Link to={`/pokemon/${name}/${itemKey + 1}`}>
        <Card id={id} name={name} idx={idx} style={style} />
      </Link>
    );
  };

  return search.length === 0 ? (
    <Grid
      className="tc grow br3 pa3 ma2 dib"
      width={1000}
      height={800}
      columnCount={5}
      columnWidth={200}
      rowCount={20}
      rowHeight={200}
      overscanRowsCount={3}
    >
      {Cell}
    </Grid>
  ) : (
    <div>
      {pokemons.length ? (
        pokemons.map((poke, i) => {
          const pokemonIdx = pokemons[i].url.split("/")[
            pokemons[i].url.split("/").length - 2
          ];
          return (
            <Link to={`/pokemon/${pokemons[i].name}/${i + 1}`} key={i}>
              <Card id={poke.id} name={poke.name} idx={pokemonIdx} />
            </Link>
          );
        })
      ) : (
        <div>You have not created this pokemon yet ...</div>
      )}
    </div>
  );
};

export default CardList;
