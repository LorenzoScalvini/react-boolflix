# BoolFlix - Funzionalità di Ricerca per Film e Serie TV

## 1. Ricerca di Film e Serie TV

La ricerca di film e serie TV sarà gestita utilizzando due endpoint separati dell'**API di TMDb**. La differenza principale tra i film e le serie TV sta nel formato della risposta JSON e nelle informazioni restituite.

#### Endpoint per la ricerca:

- **Ricerca di Film**:  
  [GET /search/movie](https://developer.themoviedb.org/docs/getting-started)  
  Questo endpoint restituisce una lista di film che corrispondono alla query di ricerca.

- **Ricerca di Serie TV**:  
  [GET /search/tv](https://developer.themoviedb.org/docs/getting-started)  
  Questo endpoint restituisce una lista di serie TV che corrispondono alla query di ricerca.

## 2. Differenze nelle Risposte JSON

#### Per i **Film**, la risposta JSON contiene:

- **`release_date`**: La data di rilascio del film.
- **`original_language`**: La lingua originale del film.
- **`title`**: Il titolo del film.
- **`original_title`**: Il titolo originale del film.
- **`vote_average`**: La valutazione media del film.

#### Per le **Serie TV**, la risposta JSON contiene:

- **`first_air_date`**: La data di debutto della serie TV.
- **`original_language`**: La lingua originale della serie TV.
- **`name`**: Il nome della serie TV.
- **`original_name`**: Il nome originale della serie TV.
- **`vote_average`**: La valutazione media della serie TV.

## 3. Gestione delle Differenze

Nel progetto **BoolFlix**, quando un utente cerca un film o una serie TV, il codice deve essere in grado di distinguere tra i due tipi di contenuti e gestire correttamente le informazioni restituite dall'API:

- **Per i Film**, estrarre e visualizzare il titolo, la lingua e la data di rilascio.
- **Per le Serie TV**, estrarre e visualizzare il titolo, la lingua e la data di debutto.

In entrambi i casi, visualizzare la valutazione media (`vote_average`) e altre informazioni utili.
