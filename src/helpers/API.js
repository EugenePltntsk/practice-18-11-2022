import axios from "axios";

axios.defaults.baseURL = "https://62becfba0bc9b125615fd0f7.mockapi.io/api/";

export const getListOfProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};

export const getDetailsOfProduct = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

export const postProductToBack = async ( product ) => {
  const { data } = await axios.post("/products/", product);
  return data;
}
export const deleteProductFromBack = async ( id ) => {
  const { data } = await axios.delete(`/products/${id}`);
 
  return data;
}


// Напишите приложение, которое работает так:  
// - Слева у вас форма добавления товара с такими полями: name, price, description; 
// - При нажатии на кнопку "Добавить" товар отправляется на бекенд; 
// - Справа находится список товаров, возле каждого товара должна быть кнопка "Удалить". При ее нажатии на бекенд отправляется запрос на удаление; 
// - если добавление товара на бекенде прошло успешно, то новый товар добавляется в список; 
// - Если удаление товара на бекенде прошло успешно, то товар удаляется из списка; 
 
// Чтобы получить список товаров, нужно отправит GET-запрос по адресу: https://62becfba0bc9b125615fd0f7.mockapi.io/api/products. 
 
// Чтобы добавить товар, нужно отправить POST-запрос по адресу https://62becfba0bc9b125615fd0f7.mockapi.io/api/products, передав в теле запроса: 
// - name; 
// - price; 
// - description; 
 
// Чтобы удалить товар, нужно отправить DELETE-запрос по адресу: https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/:id