// простой  js файл

class MarvelService {

    // _apiName - для других разработчиков     НЕ МЕНЕЯЕМЫЕ ПЕРЕМЕННЫЕ
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=383644ac6d66648a84775742b0ca8c58';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;