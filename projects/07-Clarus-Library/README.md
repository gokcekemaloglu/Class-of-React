# API Base URLs

## https://clarus-library-api.vercel.app/

### API ENDPOINTS

- GET `books` get all Books
- GET `books/:id` get book by id
- POST `books` add new book
- PUT `books/:id` update book by id
- DELETE `books/:id` remove book by id

# Deployed Frontend

## https://clarus-library-front.vercel.app/


- Tasarım için [RC-11-useEffect-database-axios](../../class-notes/RC-11-useEffect-database-axios/) projesinden faydalanabilirsiniz. 
- Apiye gitmesi gereken örnek veri aşağıda verilmiştir. Formunuzu ve statelerinizi ona göre oluşturmanız gerekir.
- İsteyenler farklı tasarım da yapabilir.



## Apiye gitmesi gereken örnek veri
```javascript
{
"title": "Sefiller",
"author": "Victor Hugo",
"ISBN": "9786053324744",
"image": "https://www.iskultur.com.tr/webp/2015/06/sefiller-2.jpg",
"genre": " 100 Temel Eser / Hasan Âli Yücel Klasikleri / Roman",
"publicationYear": 2016,
"id": "669a648791ef1aa5498ca900"
}
```