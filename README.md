<a id="readme-top"></a>
[![GitHub Stars][stars-shield]][stars-url]
[![GitHub Issues][issues-shield]][issues-url]
[![Current Version][version-shield]][repo-url]
[![Live Demo][live-demo-shield]][live-demo-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/aye-shadow/street-scout">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Street Scout</h3>

  <p align="center">
    UPDATE OUR DESCRIPTION
    <br />
    <a href="https://github.com/aye-shadow/street-scout"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aye-shadow/street-scout">View Demo</a>
    ·
    <a href="https://github.com/aye-shadow/street-scout/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/aye-shadow/street-scout/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Overview</a>
      <ul>
        <li><a href="#technical-stack">Tech Stack</a></li>
        <li><a href="#core-features">Core Features</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#modules">Modules</a></li>
    <li><a href="#api-reference">API Reference</a></li>
    <li><a href="#database-schema">Database Schema</a></li>
    <li><a href="#implementation-steps">Implementation Steps</a></li>
    <li>
        <a href="#additional-considerations">Additional Considerations</a>
        <ul>
            <li><a href="#bonus-features">Bonus Features</a></li>
            <li><a href="#to-do">To-Dos</a></li>
            <li><a href="#future-features">Future Features</a></li>
        </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>

  </ol>
</details>

---

<!-- Overview -->
## Overview

Street Scout is designed to connect food enthusiasts with local food trucks 
in real-time, enhancing the dining experience by providing users with up-to-date 
information on food truck locations, menus, and wait times.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Technical Stack

### Frontend
- **Framework**: Next.js
- **State Management**: Context/Zustand for managing application state

### Backend
- **Framework**: Spring Boot
- **Database**: PostgreSQL

### Hosting and Deployment
- **Cloud Provider**: Vercel, AWS for hosting the application
- **Containerization**: Docker for containerizing the application for easier deployment and scalability


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Core Features -->
## Core Features

1. **Real-Time Location Tracking**:
   - Map Interface: A user-friendly map that displays the current locations of food trucks.
   - GPS Integration: Utilize GPS technology to provide accurate positioning and navigation to the nearest food trucks.
2. **Menu Display**:
   - Dynamic Menus: Each food truck can upload and update their menu items, including prices and descriptions.
   - Specials and Promotions: Highlight daily specials or promotions to attract customers.
3. **Estimated Wait Times**:
   - Live Updates: Provide estimated wait times based on current customer volume and order processing times.
   - Queue Management: Allow users to see how busy a truck is before deciding to visit.
4. **Favorites and Notifications**:
   - Favorite Trucks: Users can mark their favorite food trucks to receive notifications.
   - Alerts: Push notifications when favorite trucks are nearby or when new vendors join the platform.
5. **User Reviews and Ratings**:
   - Customer Feedback: Users can leave reviews and rate their experiences, helping others make informed decisions.
   - Vendor Response: Food truck owners can respond to reviews, fostering community engagement.
6. **Search and Filter Options**:
   - Cuisine Types: Users can filter food trucks by cuisine (e.g., Mexican, Asian, vegan).
   - Dietary Preferences: Options for filtering based on dietary needs (gluten-free, vegetarian, etc.).
7. **Event Integration**:
   - Local Events: Highlight food trucks participating in local festivals, markets, or events.
   - Event Notifications: Notify users of upcoming food truck gatherings or special events.
8. **Social Sharing**:
   - Share Experiences: Users can share their food truck experiences on social media directly from the app.
   - Community Engagement: Encourage users to post photos and reviews of their meals.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Setup -->
## Setup

Clone the project

```bash
  git clone https://github.com/aye-shadow/street-scout
```

### [Backend](./backend/README.md)
Copy environment variables to the [.env](.env) file

```bash
cp .env.example .env
```

Start the backend and database

```bash
docker compose up -d
```

### [Frontend](./frontend/README.md)

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## [API Reference](http://localhost:8080/swagger-ui.html)

### [Auth](http://localhost:8080/auth)
- `POST /auth/register` - Register user
- `POST /auth/login` - Login with credentials

### [Vendors](http://localhost:8080/api/vendors)
- `GET /api/vendors` - List all vendors
- `POST /api/vendors` - Create new vendor
- `GET /api/vendors/:id` - Get vendor details
- `PUT /api/vendors/:id` - Update vendor details
- `DELETE /api/vendors/:id` - Deactivate vendor
- `POST /api/vendors/:id/menu` - Add item to menu
- `DELETE /api/vendors/:id/menu` - Remove item from menu

### [Customers](http://localhost:8080/api/customers)
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/favorites` - Add vendor to favorites
- `DELETE /api/users/:id/favorites/:vendorId` - Remove vendor from favorites

### [Reviews](http://localhost:8080/api/reviews)
- `GET /api/vendors/:id/reviews` - List reviews for a vendor
- `POST /api/vendors/:id/reviews` - Add a review
- `PUT /api/vendors/:id/reviews/:reviewId` - Update a review
- `DELETE /api/vendors/:id/reviews/:reviewId` - Delete a review

### [Search](http://localhost:8080/api/search)
- `GET /api/search?q=query&lat=latitude&lng=longitude` - Search vendors by query and location

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Database Schema -->
## Database Schema

### [Vendor Table](backend/src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Fvendor%2Fentity%2FVendor.java)
- `id`: number;
- `name`: string;
- `description`: string;
- `location`:
  - `latitude`: number;
  - `longitude`: number;
- `operatingHours`:
  - `open`: string;
  - `close`: string;
- `menu`: [MenuItem](#menuitem-table)[];
- `photos`: string[];
- `reviews`: [Review](#review-table)[];
- `is_active`: boolean

### [Customer Table]()
- `id`: number;
- `name`: string;
- `email`: string;
- `favoriteVendors`: string[];

### [Review Table](backend/src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Freview%2Fentity%2FReview.java)
- `id`: number;
- `userId`: string;
- `rating`: number;
- `text`: string;
- `createdAt`: Timestamp;

### [MenuItem Table](backend/src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Fvendor%2Fentity%2FMenuItem.java)
- `id`: number;
- `name`: string;
- `description`: string;
- `price`: number;

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Implementation Steps -->
## Implementation Steps

1. **Define Requirements and Scope**
    - [] Gather detailed requirements from stakeholders.
    - [] Identify key features such as real-time location tracking, menu display, user reviews, and notifications.
    - [] Define user roles, including customers and vendors.

2. **Choose Technology Stack**
    - [x] Select Node.js for backend development.
    - [x] Choose a database (e.g., MongoDB, PostgreSQL).
    - [] Select a frontend framework (e.g., React, Angular).

3. **Design Database Schema**
    - [x] Create tables for vendors, users, menus, orders, reviews, and notifications.
    - [] Ensure proper normalization and relationships between tables.

4. **Implement Real-Time Location Tracking**
    - [] Integrate GPS functionality using Google Maps API or Mapbox.
    - [] Develop a map interface to display food truck locations.

5. **Develop Menu Display Feature**
    - [] Create a user interface for vendors to update menus.
    - [] Implement a dynamic menu display for customers.

6. **Implement Estimated Wait Times**
    - [] Develop algorithms to calculate wait times based on current orders.
    - [] Display estimated wait times on vendor profiles.

7. **Implement Favorites and Notifications**
    - [] Develop a user account system for saving favorite vendors.
    - [] Set up a notification system for alerts about nearby vendors.

8. **Develop User Reviews and Ratings**
    - [] Implement a review and rating system for users.
    - [] Display reviews and ratings on vendor profiles.

9. **Implement Search and Filter Options**
    - [] Develop search functionality for vendors by name and cuisine type.
    - [] Provide filter options for dietary preferences and distance.

10. **Integrate Event Features**
    - [] Create a database for local events and participating vendors.
    - [] Implement event notifications for users.

11. **Add Social Sharing Capabilities**
    - [] Integrate social media sharing features.
    - [] Encourage community engagement through user-generated content.

12. **Backend Development and Integration**
    - [] Set up server infrastructure to handle API requests.
    - [] Ensure secure data transactions and user authentication.

13. **Testing and Deployment**
    - [] Conduct thorough testing of all features.
    - [] Deploy the app on Android and iOS platforms. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Additional Considerations -->
## Additional Considerations


<!-- Bonus Features -->
## Bonus Features

<!-- TO DO -->
## To-Do


<!-- Future Features -->
## Future Features


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTRIBUTORS -->
## Contributors

<a href="https://github.com/aye-shadow/street-scout/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aye-shadow/street-scout" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[version-shield]: https://img.shields.io/badge/version-0.0.1-green.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/aye-shadow/street-scout.svg?style=for-the-badge&logo=github
[contributors-url]: https://github.com/aye-shadow/street-scout/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aye-shadow/street-scout.svg?style=for-the-badge
[forks-url]: https://github.com/aye-shadow/street-scout/network/members
[stars-shield]: https://img.shields.io/github/stars/aye-shadow/street-scout.svg?style=for-the-badge&&logo=github
[stars-url]: https://github.com/aye-shadow/street-scout/stargazers
[issues-shield]: https://img.shields.io/github/issues/aye-shadow/street-scout.svg?style=for-the-badge
[issues-url]: https://github.com/aye-shadow/street-scout/issues
[license-shield]: https://img.shields.io/github/license/aye-shadow/street-scout.svg?style=for-the-badge
[license-url]: https://github.com/aye-shadow/street-scout/blob/master/LICENSE
[live-demo-shield]: https://img.shields.io/badge/demo-offline-red.svg?style=for-the-badge
[live-demo-url]: https://filn.vercel.app
[repo-url]: https://github.com/aye-shadow/street-scout
[porfolio-shield]: https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white
[portfolio-url]: https://streetscout.xyz/
