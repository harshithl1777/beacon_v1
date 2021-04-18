<img width="526" alt="Landing page" src="https://user-images.githubusercontent.com/44104695/111893733-13ebdd80-89db-11eb-8e00-66060d979e08.png">

# [Beacon](https://trybeacon.herokuapp.com)

### Description

Everyday, thousands of consumers have to think about which grocery store to go to and whether or not the store will have the items they need in stock, all because of the pandemic. That’s why we built Beacon - to help consumers get access to accurate, crowdsourced store data including lines and stock information for free of charge so that everyone can shop easier.

### How it works

Beacon operates on crowdsourced data. Essentially, consumers do the following when they log in to Beacon:
1. Search for existing store data to help them initially shop
2. Find the store data they need and go to the appropriate store
3. Shop and contribute back to Beacon's data

### Tech Stack

Beacon uses the **MERN Stack** which involves `MongoDB, Express, React and Nodejs`. In addition to the MERN stack, Beacon also operates on a `Firebase Auth` authentication system for ease of third-party provider login / signup integration. Finally, Beacon makes use of the `Mapbox API` for geoencoding as well as our own internal REST API.

### Challenges

This was the first application that our team built that involved an internal REST API. Because of this, it was somewhat challenging since we had little knowledge about how a backend serves content to a webpage using a web-server like Express. However, after this project, we feel that we are now very familiar with REST APIs and web-servers, so that's definitely a massive bonus.

### Development Setup Guidelines

To launch this project, simply run the following commands in your terminal / command line:
1. `git clone https://github.com/harshithl1777/beacon.git && cd beacon`
2. `npm install`
3. Get your own Mapbox API key from [Mapbox](https://mapbox.com) to run the Geocoder functionality
4. To start up the server-side: `npm run-script start-server`
5. To start the client-side: `npm run-script start-client`
6. To launch the full application: `npm start`



