import axios from 'axios'
export const getData = async (userId) => {  // Fonksyonumu async olarak ve dışa atarılacak şekilde tanımlamalarımı yaptım ve number değerinde bir parametre aldım
   try {
       const {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`) // user apisine gelen parametredeki number değerine göre isteğimi yaptım
       const {data : post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`) // aynı isteği parametrede hangi user id'si gelmişse o postlara istek attım
      
       const UserPost = { // gelen data'ları bir obje içinde birleştirdim
           ...user,
           post,
       }
       return UserPost; // tanımladığım obje'yi return ederek verilerin döndürmeyi sağladım
       
   } catch (err) { 
       console.log(err.message); // eğer hata var ise console'da hata mesajı görülmesini sağladım
   }
}
