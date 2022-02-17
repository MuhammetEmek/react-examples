import { cartActions } from "./cart-slice";
import uiSlice, { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://mkk-react-services-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error("Veri gelmedi!");
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();

            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'data cekilirken hata aldı!'
                })
            )
        }
    }
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        uiActions.showNotification({
            status: 'pending',
            title: 'sending',
            message: 'Veri yollanıyor...',
        })

        const sendRequest = async () => {
            const response = await fetch('https://mkk-react-services-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    }),
                })

            if (!response.ok) {
                throw new Error("");
            }
        }

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'success',
                    message: 'Sepetinize kayıt eklendi'
                })
            );

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Kayıt sırasında bir hata oluştu!'
                })
            );
        }
    }
}