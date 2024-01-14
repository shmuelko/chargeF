# Chargeflow Assignment
We would like you to design a classic e-commerce store using micro-services and a event-driven approach (ideally using AWS’ primitives) that meets the requirements below.

- The customer makes a request with the contents of a shopping cart (We would like to see a full REST design including request, response, endpoint etc.)
- The backend calculates the total amount that needs to be charged
- The backend issues an invoice
- The backend bills the customer using pre-approved 3rd party billing partner (e.g. stripe / PayPal / etc.)
- The backend ships the goods to the customer using a shipment service that provides a tracking number (e.g. FedEx/DHL)
- The backend sends email updates to the customer for each stage of the order
- Consider error flows and non-functional requirements as you see fit

Deliverables:

- Please draw the system diagram using an online tool like [eraser.io](https://eraser.io) / [draw.io](http://draw.io) / [excalidraw.com](http://excalidraw.com) followed by a few paragraphs / recorded video going over the design.
- A REST design for the new endpoint(s)
- Please write the main handler for the order creation flow in node.js. While we don’t expect the code to “work”, it should look like “runnable” code and demonstrate a best practice as you see fit.

# Diagram View:
[system diagram](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=sequence%20diagram.drawio#R7V1Zb%2BM4Ev41BmYfEuiW%2FZij091A90zQbuzM7stCkWhbiCx6dOSYX78kRZ2kbDoWJSfNxgxi0xIpkR%2Bril8VizPzZvvyOfF2m%2B8wANHM0IKXmXk7MwzdMi30B5e8FiWuaxQF6yQM6EV1wTL8B9BCjZbmYQDS1oUZhFEW7tqFPoxj4GetMi9J4HP7shWM2q3uvDVgCpa%2BF7Glf4ZBtilK57ZWl38B4XpTtqxr9JetV15MC9KNF8DnRpH5aWbeJBBmxaftyw2IcOeV%2FVLcd9fza%2FVgCYgzkRtovz95UU7f7Y8kAAkqWoLkKfQBfczstXx39MQ7%2FDHfRt%2FCFYjCGH273oEk3IIM3WneRrT4vi67ft6EGVjuPB%2Ff%2BoxQgcrQ6GQeug7fo6PvQQJ3P71kDfCTa%2BSCKPJ2afhA2sYlCfDzJA2fwA%2BQFqjApTDPcHs31Wjjwh1MMlSSZglqAxcCL82eQYo%2BXsfg%2BVOARrR8K%2Fd6Zjh%2F57jTr0H1Q1U0M68av0cPsHF3fZFx07mop4InkGQhwlLPregFn0DQuldrXZDAPA6YK9xb9In2iWOTSrtIoODA7YOXRhFFxmcA0Wglr%2BgS%2BmsJUjpLq2n7XGNeLzG%2FaeDddh061%2Bg8W1dV11BEHyga%2Bcg0GWR%2BjZ%2FQu0DyhAqdCp2TwtNi4HmfwCBHA2xoN17mRXCtYKpgioAiAtP5XBJMbQ5MQz%2BMFTgVONEvjj2fUIY6DDivwyhS4FTgpOupKcHpMuBcbsLdTqFToZNyEZPCc87A89PWCyOFTYVN9KupuxNic8Fg8y6PVki1b%2FErKYQqhCLwTYrQkkhuQPQH%2BDvHQ2holAHtgLPs26soXMeo6AFmGdziAYmDK8wp47II%2Bo%2BtgUbYaA9qOYDmbTVY1cBQINJBKL6lmZdkZf0xJDOClN2F%2BO3INb3jkcI88enzU6Y3K2fBrKLY8NPuHbMERF6GZkarbl73k1vRw3qvjQt2EE2StFHzPS5osox2Cwm2pXeGsqixHtjq0cTGWmfG%2BjPA7deEzS1A0iJKcZuG9gl1dpKe5fj7kZemof9zE8YdGOiiMDBZGFhnAQNL78BgYQ4LA9bV0YUBpkaQ2NU%2BKg4mHmHbsC7tRWuQHUvrH2RWUiysy4Vu2uivrruONbfalZmLy0Xjn91%2B%2FmIW0CqbLrFOK65pXmqLY2ouJhNT81tAyno9ar10770SA%2BrGmF1pZ4nLY%2FXT9IBsD7M7PwKNCIym0QCjy63raPgtTOPS3l%2FVgHhj3Rg13mq%2B4zygFnjphnzR6Zd7L0NLAPwEqIO0%2BRkjzekgzbWGQ1pZ19FI03UGakxdA0KNdUUsEV5aONN%2Bh1m4QkjIQhgr2J0MOx0ps%2Fb4zu0jcEcA0kTeglvZ8cAzF3oXeN26BgQe62agdMS5rfVOQVrTxqfyoWnjL84Dj2YHj3N7YCOfw9oXQqY0nj6ejGmOvMOO%2FPw8Rl7vjPxC2yOJ3jDyfz1ZN%2F%2Bx%2Fn03T8D3%2FDq%2F%2BeO%2F5tOFyeocQSbyOdxGHjFmefTiJtuWi60VjDMaoIgEDbJ96Z3Y%2FL2BEUxIheYd%2BXcUd4bDFwlJCYK9A1cxaprR6mHDoYuEVqABh1EztQODvX35AfzMi9eYlDyqPdNdlIK%2BxeHpleFRNupFGO9eBq7xxEhPlPl8NLCK4AdIdzBOwUMYhdnrPhiQcaa%2FEAJ5E0bBN%2B8V5vid0IrHfyy%2FXW9gEv6DGegSJGRBRFFiaq0rlvjOUiYQ5vm%2BxIbeKfruvbQu%2FOalfDob37hFIiCMr6n4IhcdiWQWqfvnmDD327YiTINFjcNBKdId%2FTAV5X35b8AqjZnhRHgkc0ylrwsivSiJwrLkuxd7a5DiR0d9tIF5imdHBNdhiiQ%2BLveI5tmF%2FiOxbu9Q1xeftF0CfZCmIL0s60U%2F11WzjX2N0fTw%2FIw0F6KOMjRuOKS2QhIHYxirKEPLdwGaUgdamWGhWBd25gAa1IxAOIGPoJRodKG%2Fagg5WuRRxRmBVdMjUerTbRgERD%2BmqDNQX3wjl91adckPOuS4CKLbVxHRoxt0I4iJ84VoGvRs9jX6DzswNCRM7FvsybCv9fq7fXvAV5PAzMu82gUkaYI4whOknBIcQcqdEpqsKaFrrKy8ZbGh5KN8%2Bai7bqkrW3jQWTy4exT5iXBgReTVn0tUcPsae1vIgYYSGyfipp6Cp8kNDk4seTjhhKVgLXVxm6ClBbvcUgJEvgAxnPnk4oONCFn%2BvlQyY3iZMRfGytnIDE4sRmmZBuFTaZdibmWGt1YQK%2FsLMq2LQOHKhG1cq8TMFOs46wzsFE6sBwdL9WqJxnWFaNYqKJ0NlCzDvTSmxpLNuuIRWlZhsqXM8R0JEDnBG0%2FV2DRBIug53oeHvuso0vZEh%2FE8p%2Fzb3%2BCWNw9VNZzLig9IgwHkD5DlCYJi6cZqRi5V336HmCzKwFaBVA5IjRIIZeSac0xQ037nvm0PEtOEW7Ga1djHtCIb2GwQSong2s47C%2Bi28XgEkN93DEEb3nPNOgLeul6uMDq3vyVq4EBNknHK2XPDMy45u8SOtSzfjc9Rs9p7oLg%2BR3c4n6NIe2aZTKZlJtpaZVKO6HLkbIVRLseT1xeGOMtR%2Fuq0YMPzOZZumpF8jv2kxz6fI12vNryAaS1udgl8CpEdiH%2BNwkc8b%2B5A8OkF%2FSXK9PbLN1F342cQgwR7DtstRN4DiGrPZpYgIKVkxPxH7AtVfsYJyb9K1pzE%2FXGngUQ%2FIzsPlJ9xLKHYcTTOeXDg6O59lMse3X24NZ6Pu2sojKC0dY1lEZW3U7bnQhOG7z7pxUGQRG8ny8gob%2BfUYgyJJ54f4lhBdiIyWPK4kCDK7SlFeBjCoDkf4cGyXsrt%2BQ7ljWkLQsnQpGGJk42whaUGKOrEEI1PrWUakhIx95YHNNRrQohe%2BIVIusJPFodZSIjTGY4%2BRdqvSBWBf9Od3UtfW94WD2D8kOI%2FX1d4ObnBGOfxZxqIfdRuVqxtyeOFaYpelSSvaNUUYsbQR5eQvBjlLCneiVmOtiZPvfrmvTvEHpbmez95yW8XF83yfx3dB9Wq%2B7QWi8lyUSgE0qZN2yx%2FKulx8qPW80A%2FKM4bC%2F48Lf6SLi9Nb0w1o5pBtoHBYULhLF6N7Pl5rTDG5DimhIafp6gu8lMRR40kFYxy7O8dgNpoCKuhdT1PNrZdF8Kq1BKWh0eqUl2iucXu81FhH%2B9Pldquxo374KLJkadNWeP9HWuHbsWs7LvAchESaeeDQrg3VECILfu8mCySpX33UZcst40%2BXt1%2FbT70mlLVMz49PRNlp8ftaLxoavczkgxZjh9%2BuD0770PhiAeLHatw9jkZT%2FPeCIUZMgkZP6wb2DSMNgejsUOkWwLsriCVLNKeOTfZ9uyu1hhj2ynLEiof8OkxpkenHDy87dTmxJdKdAHvNzP6XLM4nwFWE4X%2BIbE%2FOGOjFjfSGqSloikXNClZKSNd7kd5UOgbSNWT3wpqvems%2FwpdVJQXWjWMnyCSZrV%2Bekg4ykl5f8feZToIBcqdAfK8v5ycfMr7O4k4xLtMeUsvHiAkbt%2Foc5sox6s034kuTXBI3DLGiRhWjtdpJYjhuJfu9BKEk2VOuVxliI1BeOKRxQab1EK5XN%2BfpME7Tc%2FAVunPGqR8Du8GS5bwKsiQ52%2Fo917J8zdoWAVeUMWGf6G67Tw8EWn%2BkPpJ%2BADKgpKtANjMG5vJL4ncAETIvCx85JxnLhJNtniYaUl8H8TFESkj0PiVOBzcHljImniWEIvPOS%2Fxo%2FL4Trnnfd9uLpEgbTEaX6Q5k3sEjD4%2Bi28pFl%2BC%2BrYksPgGV3vb%2FQg9TYj0s%2Fg90WW9e7u8yM8juumqiFPKIIZBrf28LY6CQx8evJSQ%2Fpiy13yP%2BJLR%2BGwpU79L4BZSU7Nm7jPv5WTaXkj0qdX1qdNiEE6ONxG6W%2FsHmwcLdh4oKn8Smai7GpeIG3UHxIJlaBWTL1doVDPw%2FWyCWLArX8XjTyw%2BDEcXDsKUJz5Yplbtn5InOaSF4MmTHELsq6Lyz1zYmNY52CpieX0Uk3%2FWULKM6ff9mkJIukY66RdhFOd2J18TLzCYR%2FG9jVEUac50q5yQzQadLijGiAxW2aFkuASP3oZkVTpoX1JsDmjkBQeXhtPptCI%2BOWZd5nKiSaOyTZgEF6gnMcRQj5ZHo63RZc%2FeayOB1DJLwh2Y0QxS997rvReJJpG6Lw%2B5qdtIu9wl6wMU32%2BkqMkp4owHyTLFnUzS4oxddrGguMmpZKtephOdLLO3y1ppipuUKzXcQaIDRj2XwmWNM8VNTi8%2BMD059dEAc9Y4U%2BykPNkxjMUxpuyYi%2B0PVuzk2Ysb0%2BJYK7ZdeUhGSnBi9AOqN11Tb%2BTn4TxO3QDIRnomDnnVyc7UWlEekaaJG5DCS9z0DpNwDJ2iiYYHJV6cen6xc1fzcnS%2FR7RF9PrB8zJtvTgnkVEhhh02y36dFE1zcaJ8X6RtjwyTpxMNEZ2ovCxnrxJtw%2BD67HgWlrwULLrRj6dfdddEnb%2BpoYCnS9%2F0cz%2FL3Hxyeh56fdlZJmvKffqQRAetvDDKE%2FDLbPGoBPjg6zBdWmZUSyjJ7n0CAzRFyFoMCXn4S7hmzUUn7ovjKzV43vO3uWZFmuOnbJpiswcbl6gcs6dHeIhvGRfe7MHbjSRxs4fQBnIRr%2Bx3zKah%2F9NC%2BVHxE8ZoedNMxdRM2LRLcNqlojwAeHvkjtniEW6PPoZnXzJkThF3la48rjKnzSDRmbyJIm0ziMvSVcrhOonM1J25mA0mz9vKrtO63tauZKHOFFPJksF9KYNwR%2BP6YdmNZcoPO7FUMez55E5Yt2%2BHmXLCyhAcg2wuG1dwCB0KoJywZydrygV%2FCSSTZ8LwwvoNWUgSWvYp18W5AamzQUTnJygcVWsZbOgQB0pfY2zhQPIuH56I7M53yWeIizTHxYQzwVGknLgPRUSeflCN%2BFmjPSqJAxne8QZ7mch%2BiB6kPYXOUhgDnuza%2Fo186M%2FqKPGKDPWevDDySphTgvPv3IuzMAtFTnNphJiEZBMK6%2BSDOLBpBzMcQELjSWrJG4Spn4CdF%2FsHm1Oc6vtazvTqrqOWM7xZKI1TnbM8iOJURxL%2FzmVnD4vj8PgPa0xLcq4y7IwtNeaDkCA8lMiLulMZds5AfnTZU1dMl8iTHSq9zphiYxAHLg8g8sSGSq%2FzESSNaQrbKTJPJ%2B%2FnvI7fvNIbgPvWbS3FaeIZ2OI%2FJLgzz8qVYZpBcoJokCftQ9NovCopxNE3fdsXhA4iZ5d%2FHyqAWdJekcaekIIagKtV8a11TDnlE2THEw%2F1kveRR4BTvGMJN7K%2FB%2BO7SgRM3niVR1gBE%2FziKb4BcQO0D8BH%2FZPWTEoE9hIOHzt4eZAN6DzBKW%2FX31zlJXuXOrhDFtvWYmKqQOyoGkZ7fViHU8cBJDcnmUBrfG921yAbgc93WI5RuZtOPyvtaN1jGMIpeOUFuzv9e2f2eXLIMrBxhsEWLbsbpswzTB7Jip6Jb%2FcT0Ih871rYhcWDYJLluG56MLGoE%2BiPxN8ATAEUadDIrmGvVJVlVjSIHhg%2FIj3bZ4jDexRp8tZJ4wzCtfJmjDQPjcNyrcpDM5LE1B1xkSnNznL6aFXlkpEmJt5f6nKHtcaVS2Z8E8vmZzEYV2D0ZSJUfhgZsmIQDmhUWeH2U%2BeKAjpj6WLxVvk85BhzaaSPziawPOBfGD0tVl%2FFvW6hN%2Fh4eKHUdXIPtCwkZDk32BBhECeXmtGz9ZrrQTE%2Fzji5S%2Famr6hfdQUyfzPr3W5O37nYZT5y9hXOGauNISrPRZz1HYg48tPyUuBVT1tgMWsk4Rn56ZabcLfrfbw1iEFSPF5aX4iQD6K0wkCGg3HJC%2FiPh%2FMJSDtumXcudHHGcjn8R5y1PPhT3hXON5rTqH7W3yBJy%2BBF%2F2qBGKIKw7jo%2BcqLHPqPxQDQueeR779IHjtX3LFypDlm2NIM9n6dquJiztkgM01xfsiRZ5L1e3QfIug%2FYhEDuHKq6NpCQmmN%2Fy2tyupaSBVyBZ3SpCsDQq8XNx6w57gGTPPB3r%2FQqSbw4EJniEyHn7faxdOXi2%2FJw1%2BvS%2Bv7%2F5ZfL6743tvOCNR9oR%2BedGxXHX30lt7xcbsLwT17ejeb13DdxJtbnW5C1sNVkhAagwIw8NJN1W%2BNPjoELtpjAEv6ff3V6A%2FuSfa0LAFREbDUrHyPn%2Fkecy%2BN4TDbwzHvgjGFeeIDelfd0UxFhlWLyb66kF5Zg4ypC3UsyelYXkbpodO81PyR5inhgyP9cQa3S0cKD659oKKekR1q3DhxoFfpa%2BxL0CdyIsuOF5NWp8c5tBAv9kOaLuHsJ17%2BWiNgSRsB9DWB2K6q5wx6qc13GAB8xf8B)

# Install and run
- git clone
- run ```npm install```
- run ```npm start```
- open link: http://localhost:3000/api/v0/orders

# REST API:
```yaml
paths:
  /api/v0/orders:
    get:
      summary: Returns all Orders.
      parameters:
        - in: path
          name: id
          required: true
          type: string
          minimum: 1
          description: The ID of the order to return.
      responses:
        200:
          description: A list of Orders object.
          schema:
            type: list[Orders]
        default:
          description: Unexpected error
    patch:
      summary: Returns all Orders.
      parameters:
        - in: path
          name: id
          required: true
          type: string
          minimum: 1
          description: The ID of the order to return.
        - in: body
          type: object
          description: Create new Order.
      responses:
        200:
          description: The updated object.
          schema:
            type: Order
        default:
          description: Unexpected error
    put:
      summary: Create new Order.
      parameters:
        - in: body
          type: object
          description: Create new Order.
      responses:
        200:
          description: The new Order object.
          schema:
            type: object
            properties:
              userId:
                type: Number
                example: 4
              items:
                type: [Object]
        default:
          description: Unexpected error

  /api/v0/orders/{id}:
    get:
      summary: Returns a order by ID.
      parameters:
        - in: path
          name: id
          required: true
          type: integer
          minimum: 1
          description: The ID of the order to return.
      responses:
        200:
          description: A Order object.
          schema:
            type: object
            properties:
              userId:
                type: Number
                example: 65a3beb7736d8d52d86cb351
              items:
                type: string
                example: [{ productId: Number, quantity: Number, price: Number, subtotal: Number }]    
            status:
              type: string
              example: 'pending'
        400:
          description: The specified user ID is invalid (e.g. not a number).
        404:
          description: A user with the specified ID was not found.
        default:
          description: Unexpected error
  delete:
    summary: Delete this order.
    parameters:
      - in: path
        name: id
        required: true
        type: integer
        minimum: 1
        description: The ID of the order to remove.
    responses:
      200:
        description: Confirmation that the Order was removed.
        schema:
          type: string
      404:
        description: A user with the specified ID was not found.
      default:
        description: Unexpected error
```

 