import { replaceSpecialChars } from './Utils/conversors';

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  removeByName(name: string): void {
    this._items.forEach((item, index) => {
      if (
        replaceSpecialChars(item.name.toLocaleLowerCase()) ==
        replaceSpecialChars(name.toLocaleLowerCase())
      ) {
        this.items.splice(index, 1);
      }
    });
  }

  total(): number {
    return +this._items
      .reduce((total, current) => total + current.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Seu pedido com o total de R$${this.total()} foi recebido.`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo co sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');

    this._items.length = 0;
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'água', price: 2.51 });
shoppingCart.addItem({ name: 'Coca-Cola', price: 5.32 });
shoppingCart.addItem({ name: 'Biscoito', price: 3.53 });
shoppingCart.addItem({ name: 'Biscoito', price: 3 });
shoppingCart.addItem({ name: 'Biscoito', price: 3 });
shoppingCart.addItem({ name: 'Biscoito', price: 3 });

// shoppingCart.removeItem(1);

// shoppingCart.removeByName('agua');
// console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);

console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
// console.log(shoppingCart.items);
