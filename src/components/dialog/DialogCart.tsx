"use client";

import { useCartStore } from "@/store/cartStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";

export const CheckoutModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const items = useCartStore((state) => state.items);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    const message = items
      .map((item) => `- ${item.title} (${item.quantity}x)`)
      .join("\n");

    const fullMessage = `Halo, saya ingin memesan:\n${message}`;
    const whatsappUrl = `https://wa.me/6287724002299?text=${encodeURIComponent(
      fullMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">🛒 Keranjang Anda</DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <p className="text-center py-6">Keranjang kosong.</p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => increaseQty(item.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            ))}

            <div className="flex justify-between gap-2 mt-4">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Kosongkan
              </Button>
              <Button
                className="bg-green-500 text-white hover:bg-green-600 flex-1"
                onClick={handleCheckout}
              >
                Checkout via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
