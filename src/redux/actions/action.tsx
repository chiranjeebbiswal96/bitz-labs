
interface Item {
    image: string;
    rating: { rate: number; count: number };
    title: string;
    description: string;
    price: number;
    
}


export const ADD_CART = "ADD_CART";


export const ADD = (item: Item) => {
    return {
        type: ADD_CART,
        payload: item
    };
};


// Add new action types
export const REMOVE_CART = "REMOVE_CART";
export const INCREMENT_CART = "INCREMENT_CART";
export const DECREMENT_CART = "DECREMENT_CART";

// Action for removing an item
export const REMOVE = (id: number) => {
    return {
        type: REMOVE_CART,
        payload: id,
    };
};

// Action for incrementing the quantity of an item
export const INCREMENT = (id: number) => {
    return {
        type: INCREMENT_CART,
        payload: id,
    };
};

// Action for decrementing the quantity of an item
export const DECREMENT = (id: number) => {
    return {
        type: DECREMENT_CART,
        payload: id,
    };
};
export const CLEAR_CART = () => {
    return {
      type: 'CLEAR_CART',
    };
  };

