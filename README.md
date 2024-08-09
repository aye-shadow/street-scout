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
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

---

<!-- Overview -->
## Overview

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Technical Stack

### Frontend
- **Framework**: Next.js
- **State Management**: Redux/Context/Zustand for managing application state

### Backend
- **Framework**: Spring Boot
- **Database**: PostgreSQL

### Hosting and Deployment
- **Cloud Provider**: Vercel, AWS, Heroku, or DigitalOcean for hosting the application
- **Containerization**: Docker for containerizing the application for easier deployment and scalability


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Core Features -->
## Core Features
- **TODO**: 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- Setup -->
## Setup

### [Backend](./backend/README.md)
Copy environment variables to the [.env](.env) file

```bash
cp .env.example .env
```

Start the services

```bash
docker compose up -d
```

### [Frontend](./frontend/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- API Reference -->
### [Vendors](http://localhost:8080/api/vendors)
- `GET /api/vendors` - List all vendors
- `GET /api/vendors/:id` - Get vendor details
- `POST /api/vendors` - Create new vendor
- `PUT /api/vendors/:id` - Update vendor details
- `DELETE /api/vendors/:id` - Deactivate vendor

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

1. TODO

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


[Street Scout][repo-url]


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
