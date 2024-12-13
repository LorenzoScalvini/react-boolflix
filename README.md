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

- **`original_language`**: La lingua originale del film.
- **`title`**: Il titolo del film.
- **`original_title`**: Il titolo originale del film.
- **`vote_average`**: La valutazione media del film.

#### Per le **Serie TV**, la risposta JSON contiene:

- **`original_language`**: La lingua originale della serie TV.
- **`name`**: Il nome della serie TV.
- **`original_name`**: Il nome originale della serie TV.
- **`vote_average`**: La valutazione media della serie TV.
