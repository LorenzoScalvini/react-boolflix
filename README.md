# BoolFlix - Funzionalità di Ricerca per Film e Serie TV

## ⚙️ Funzionalità
- Ricerca di **Film e Serie TV** con query personalizzate.
- Utilizzo di endpoint separati per Film e Serie TV forniti da **TMDb API**.
- Visualizzazione di dettagli chiave come titolo, lingua e valutazione.

## 🔗 Endpoint di Ricerca
- **Film**: [GET /search/movie](https://developer.themoviedb.org/docs/getting-started)  
  Restituisce una lista di film corrispondenti alla query di ricerca.

- **Serie TV**: [GET /search/tv](https://developer.themoviedb.org/docs/getting-started)  
  Restituisce una lista di serie TV corrispondenti alla query di ricerca.

## 📦 Differenze nelle Risposte JSON
### 🎥 Film
- **`title`**: Titolo del film
- **`original_title`**: Titolo originale
- **`original_language`**: Lingua originale
- **`vote_average`**: Valutazione media

### 📺 Serie TV
- **`name`**: Nome della serie TV
- **`original_name`**: Nome originale
- **`original_language`**: Lingua originale
- **`vote_average`**: Valutazione media


