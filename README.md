# PotterAPI
[PotterAPI](https://potterapi.onrender.com/) is a Harry Potter API developed with Express.js and available in multiple languages.  
This API stores information and images of books, characters and spells.

## Languages
This API is available in the following languages:
- [:us: English](https://potterapi.onrender.com/en)
- [:es: Español](https://potterapi.onrender.com/es)
- [:fr: Français](https://potterapi.onrender.com/fr)

If there's any problem with the translations, you can [open an issue](https://github.com/fedeperin/potterapi/issues/new) or a [pull request](https://github.com/fedeperin/potterapi/pulls).

## Endpoints
The endpoints are the following:
<details>
    <summary><code>/:lang/books</code></summary>
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
    <summary><code>/:lang/characters</code></summary>
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
        </tbody>
    </table>
</details>
<details>
    <summary><code>/:lang/spells</code></summary>
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
`page` | number | If `max` is used, you can also use this param to indicate where to star cropping |
`search` | string | Searches between the items and returns the best matches |

# Previous APIs
This is a version that unifies my [Harry Potter API](https://github.com/fedeperin/harry-potter-api) and my [Harry Potter API English](https://github.com/fedeperin/harry-potter-api-english), also adding more info. This API is using Express.js instead of json-server.