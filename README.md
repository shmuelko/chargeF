# Chargeflow
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

Diagram View:</br>
[https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=sequence%20diagram.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fshmuelko%2FChargeflow%2Fmain%2Fsequence%2520diagram.drawio
](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=sequence%20diagram.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fshmuelko%2FChargeflow%2Fmain%2Fsequence%2520diagram.drawio)https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=sequence%20diagram.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fshmuelko%2FChargeflow%2Fmain%2Fsequence%2520diagram.drawio
