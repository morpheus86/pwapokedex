import React, { PureComponent, Suspense, memo } from "react";
import { Link } from "react-router-dom";

const Card = React.lazy(() => import("./Card"));

class CardList extends PureComponent {
  render() {
    const { pokemons } = this.props;
    // const ItemRenderer = memo((props) => {
    //   const { columnIndex, data, rowIndex, style } = props;
    //   const createItemData = memoize((data) => data);
    //   const datas = createItemData(data);
    //   const columnCount = 5;
    //   const itemKey = columnIndex + rowIndex * columnCount;

    //   const idx =
    //     datas && datas[itemKey]
    //       ? datas[itemKey].url.split("/")[
    //           datas[itemKey].url.split("/").length - 2
    //         ]
    //       : null;
    //   const name = datas && datas[itemKey] ? datas[itemKey].name : null;
    //   const id = datas && datas[itemKey] ? datas[itemKey].id : null;
    //   return (
    //     <Link to={`/pokemon/${name}/${idx}`}>
    //       <Card id={id} name={name} idx={idx} style={style} />
    //     </Link>
    //   );
    // });

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            {pokemons.length ? (
              pokemons.map((poke, i) => {
                const pokemonIdx = pokemons[i].url.split("/")[
                  pokemons[i].url.split("/").length - 2
                ];
                return (
                  <Link
                    className="fl w-15 pa2"
                    to={`/pokemon/${pokemons[i].name}/${i + 1}`}
                    key={i}
                  >
                    <Card id={poke.id} name={poke.name} idx={pokemonIdx} />
                  </Link>
                );
              })
            ) : (
              <div>You have not created this pokemon yet ...</div>
            )}
          </div>
        </div>
      </Suspense>
    );
  }
}

export default memo(CardList);
