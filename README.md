# PotterAPI
> [!IMPORTANT]  
> The new base URL is [https://potterapi-fedeperin.vercel.app](https://potterapi-fedeperin.vercel.app/) but you can still use the old one (not recommended) [https://potterapi.onrender.com/](https://potterapi.onrender.com/)  

[PotterAPI](https://potterapi-fedeperin.vercel.app/) is a Harry Potter API developed with Express.js and available in multiple languages.  
This API stores information and images of books, characters and spells.

## Languages
This API is available in the following languages:
- [:us: English](https://potterapi-fedeperin.vercel.app/en)
- [:es: Español](https://potterapi-fedeperin.vercel.app/es)
- [:fr: Français](https://potterapi-fedeperin.vercel.app/fr)
- [:it: Italiano](https://potterapi-fedeperin.vercel.app/it)
- [:portugal: Português](https://potterapi-fedeperin.vercel.app/pt)

If there's any problem with the translations, you can [open an issue](https://github.com/fedeperin/potterapi/issues/new) or a [pull request](https://github.com/fedeperin/potterapi/pulls).

## Endpoints
The endpoints are the following:
<details>
    <summary><code>GET /:lang/books</code></summary>
    Returns information and images about Harry Potter books.
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>number</code></td>
                <td>number</td>
                <td>The book number</td>
            </tr>
            <tr>
                <td><code>title</code></td>
                <td>string</td>
                <td>The title of the book in the selected language</td>
            </tr>
            <tr>
                <td><code>originalTitle</code></td>
                <td>string</td>
                <td>The original book title in English</td>
            </tr>
            <tr>
                <td><code>releaseDate</code></td>
                <td>string</td>
                <td>The release date</td>
            </tr>
            <tr>
                <td><code>description</code></td>
                <td>string</td>
                <td>A summary of the book</td>
            </tr>
            <tr>
                <td><code>pages</code></td>
                <td>number</td>
                <td>The original book's number of pages</td>
            </tr>
            <tr>
                <td><code>cover</code></td>
                <td>string</td>
                <td>An URL to an image with the original cover of the book</td>
            </tr>
        </tbody>
    </table>
</details>
<details>
    <summary><code>GET /:lang/characters</code></summary>
    Returns information and images of Harry Potter characters.
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>fullName</code></td>
                <td>string</td>
                <td>The full name of the character</td>
            </tr>
            <tr>
                <td><code>nickname</code></td>
                <td>string</td>
                <td>The nickname of the character</td>
            </tr>
            <tr>
                <td><code>hogwartsHouse</code></td>
                <td>string</td>
                <td>The Hogwarts House this character belong to</td>
            </tr>
            <tr>
                <td><code>interpretedBy</code></td>
                <td>string</td>
                <td>The name of the actor/actress the character was interpreted by in the movies</td>
            </tr>
            <tr>
                <td><code>children</code></td>
                <td>object</td>
                <td>An array with all the children of the character</td>
            </tr>
            <tr>
                <td><code>image</code></td>
                <td>string</td>
                <td>An URL to an image of the character</td>
            </tr>
            <tr>
                <td><code>birthdate</code></td>
                <td>string</td>
                <td>The birthdate of the character. Format "Month Day, Year"</td>
            </tr>
        </tbody>
    </table>
</details>
<details>
    <summary><code>GET /:lang/houses</code></summary>
    Returns the four Hogwarts Houses with some extra data
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>house</code></td>
                <td>string</td>
                <td>Name of the House</td>
            </tr>
            <tr>
                <td><code>emoji</code></td>
                <td>string</td>
                <td>An emoji representing the house</td>
            </tr>
            <tr>
                <td><code>founder</code></td>
                <td>string</td>
                <td>The name of the founder of the house</td>
            </tr>
            <tr>
                <td><code>colors</code></td>
                <td>object</td>
                <td>An array with the colors in english of the house</td>
            </tr>
            <tr>
                <td><code>animal</code></td>
                <td>string</td>
                <td>The animal of the house</td>
            </tr>
        </tbody>
    </table>
</details>
<details>
    <summary><code>GET /:lang/spells</code></summary>
    Returns all the spells mentioned in the saga with a description.
    <table>
        <thead>
            <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>spell</code></td>
                <td>string</td>
                <td>The name of the spell</td>
            </tr>
            <tr>
                <td><code>use</code></td>
                <td>string</td>
                <td>Description of the spell</td>
            </tr>
        </tbody>
    </table>
</details>
</br>
You have to change the :lang by one of the two-letter codes of the languages supported.</br>
Every endpoint has a <code>/random</code>, which returns a random item of the full list. For example <code>/en/spells/random</code> returns a single random spell in English.

## Params
Every endpoint (excluding the <code>/random</code>s) can recieve the following query params: 

Param | Recieves | Description |
----- | -------- | ----------- |
`index` | number | Returns only one item, the one that on the whole list has the index selected |
`max` | number | Returns the whole list cropped by the number passed |
`page` | number | If `max` is used, you can also use this param to indicate where to start cropping |
`search` | string | Searches in all the items and returns the best matches |

## Examples
### Javascript
```javascript
const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/spells')
    const spells = await res.json()

    return spells
}
```
```javascript
fetch('https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley')
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
```
### Python
```python
import requests

def get_book():
    response = requests.get('https://potterapi-fedeperin.vercel.app/en/books')
    books = response.json()
    return books
```

## Running locally
### Clone Repo:
With HTTPS
```bash
$ git clone https://github.com/fedeperin/potterapi.git
```
With SSH
```bash
$ git clone git@github.com:fedeperin/potterapi.git
```
### Run in dev mode
Run this to start a local server:
```bash
$ npm run dev
```

### Test
Before submitting a PR or making a commit run the following command:
```bash
$ npm run test
```

## Previous APIs
This is a version that unifies my [Harry Potter API](https://github.com/fedeperin/harry-potter-api) and my [Harry Potter API English](https://github.com/fedeperin/harry-potter-api-english), also adding more info. This API is using Express.js instead of json-server.