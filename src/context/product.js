import { ItemList } from "./itemstate";
import { AddItem } from "./Additem";
export const Product = () => {
  const { state, shop, setShopItem, setTotal, setBill } = ItemList();

  const AddItem = (uid) => {
    let sitem = state.filter((item) =>
      item.menu.some((prod) => prod.fid === uid)
    );
    let menu = [...sitem[0].menu];
    let prod = menu.filter((item) => item.fid === uid);
    setShopItem([...shop, ...prod]);
    let local = [...shop, ...prod];
    let count = 0;
    let totalbill = 0;
    local.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };

  const RemoveItem = (uid) => {
    let sitem = shop.filter((item) => item.fid !== uid);
    setShopItem([...sitem]);
    let count = 0;
    let totalbill = 0;
    sitem.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };

  return (
    <div>
      {state.map((item) => (
        <div key={item.id}>
          {item.menu.map((card) => (
            <div key={card.fid}>
              {shop.some((prod) => prod.fid === card.fid) ? (
                <button onClick={() => RemoveItem(card.fid)} className="child2">
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => <AddItem uid={card.fid} />}
                  className="child2"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
