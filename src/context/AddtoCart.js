import { ItemList } from "./itemstate";
export const AddtoCart = () => {
  const { shop, setShopItem, setTotal, setBill } = ItemList();
  const IncreaseQty = (uid) => {
    shop.map((item) => {
      if (item.fid === uid && item.qty <= 6) {
        return { ...item, qty: ++item.qty };
      }
      return item;
    });
    setShopItem([...shop]);
    let totalbill = 0;
    let count = 0;
    shop.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setTotal(count);
    setBill(totalbill);
  };

  const DecreaseQty = (uid) => {
    shop.map((item) => {
      if (item.fid === uid && item.qty > 1) {
        return { ...item, qty: --item.qty };
      }
      return item;
    });
    setShopItem([...shop]);
    console.log(shop);
    let count = 0;
    let totalbill = 0;
    shop.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setBill(totalbill);
    setTotal(count);
  };

  const RemoveCart = (uid) => {
    let count = 0;
    let totalbill = 0;
    let reset = shop.filter((item) => item.fid === uid);
    reset[0].qty = 1;
    let CartItem = shop.filter((item) => item.fid !== uid);
    CartItem.map((item) => (
      <div key={item.fid}>
        {(count += item.qty)}
        {(totalbill += item.dprice * item.qty)}
      </div>
    ));
    setShopItem([...CartItem]);
    setBill(totalbill);
    setTotal(count);
  };

  return (
    <div>
      {shop.length === 0 ? (
        <h1>Empty Cart</h1>
      ) : (
        shop.map((item) => (
          <div key={item.fid}>
            <h3>{item.food}</h3>
            <button onClick={() => IncreaseQty(item.fid)}>+</button>
            <span>{item.qty}</span>
            <button onClick={() => DecreaseQty(item.fid)}>-</button>
            <h2>{item.qty * item.dprice}</h2>
            <h1>
              {<button onClick={() => RemoveCart(item.fid)}>Remove</button>}
            </h1>
          </div>
        ))
      )}
      <button>Make payment</button>
    </div>
  );
};
