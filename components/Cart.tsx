'use client';

import { useCartStore } from '@/lib/store';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, getTotal } =
    useCartStore();

  const total = getTotal();

  return (
    <div className="fixed right-0 top-16 h-screen w-96 bg-white shadow-lg z-40 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Shopping Cart</h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-4 last:border-b-0"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-secondary font-bold">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="ml-auto text-red-500 hover:text-red-700 text-sm font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-secondary">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-secondary text-white py-3 rounded-md font-bold hover:bg-blue-600 transition-colors mb-2">
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
