
import axios from "axios";

import { ActionTypes } from "../constants/actionTypes";

export const setLoading = () => (
    {
        type: ActionTypes.SET_LOADİNG,
        payload: true,
    }
)

//asennkron aksiyon > gerçekleşmesi zaman alır.
//middleware > bir aksiyon çalıştırmadan hemen önce veya sonra işlem yapamaya yarar 
//THUNK middleware> redux ta genelde aksiyon dispatch etmeden önce 
//asenkron işlemler yapamaya yarar

// THUNK ile asenkron yazım sitili
export const getUsers = () => {
    //fonksiyon içinde async fonksiyon döndüreceğiz.
    // sen herhengi biryere getusers fonksiyonunu çağırırsan sen async bir function döndür
    //bu içerde veri çekme işlemlerini yapsın ve son adımda dispatch işemini uygulasın 
    return async function (dispatch) {

        //dispatch parametre olarak alınması gerekir
        //asenkron bütün işlemler yapılabilir.

        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch(
            {
                type: ActionTypes.SET_USERS,
                payload: res.data,
            });

    };


};

//!Thunk en kısa yazım stili
//! Thunk ile aksiyon oluştururken izlenmesi gereken adımlar:
//  Normal fonksiyon oluşturma
//oluşturduğumuz fonksiyona return satırı ekleneceek 
//return satırına bir fonksiyon tanımlanacak (genelde async)
//Tanımlanan bu fonksiyona dispatch methodunu parametre olarak alıcak
// gerekli işlemleri yaptıktan sonra dispatch ile acsiyonu çalıştıracak 

export const getPosts = () => async (dispatch) => {
    //asenkron bir işlem gerçekleştiridik
    const response = await axios('https://jsonplaceholder.typicode.com/posts');
    // işlem gerçekleştikten sonra veriyi aksiyon yardımıyla reducer gönderdik
    dispatch({
        type: ActionTypes.SET_POSTS,
        payload: response.data,
    });
};