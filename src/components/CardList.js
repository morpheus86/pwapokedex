import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FixedSizeGrid as Grid } from "react-window";

const CardList = ({ pokemons }) => {
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
    // console.log(props);
    return (
      <Link to={`/pokemon/${pokemons[itemKey].name}/${itemKey + 1}`}>
        <Card id={id} name={name} idx={idx} style={style} />
      </Link>
    );
  };

  return pokemons.length > 0 ? (
    <Grid
      className=""
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
    <div>Loading ...</div>
  );
};

export default CardList;
