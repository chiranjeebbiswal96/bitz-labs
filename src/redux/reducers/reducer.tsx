// Update the Item interface to include 'quantity' and 'image'
interface Item {
    id: number;
    title: string;
    price: number;
    quantity: number; // Quantity field
    image: string; // Image field
}

interface CartState {
    carts: Item[];
}

interface Action {
    type: string;
    payload?: any;
}

const INIT_STATE: CartState = {
    carts: [],
};

export const cartReducer = (state = INIT_STATE, action: Action): CartState => {
    switch (action.type) {
        case "ADD_CART":
            // Check if the item already exists
            const existingItem = state.carts.find((item) => item.id === action.payload.id);
            if (existingItem) {
                // If exists, increase the quantity
                return {
                    ...state,
                    carts: state.carts.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            // If not, add it with quantity = 1
            return {
                ...state,
                carts: [...state.carts, { ...action.payload, quantity: 1 }],
            };

        case "REMOVE_CART":
            // Remove item by filtering it out
            return {
                ...state,
                carts: state.carts.filter((item) => item.id !== action.payload),
            };

        case "INCREMENT_CART":
            // Increment quantity
            return {
                ...state,
                carts: state.carts.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case "DECREMENT_CART":
            // Decrement quantity but ensure it doesn't go below 1
            return {
                ...state,
                carts: state.carts.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                ),
            };

        default:
            return state;
    }
};
