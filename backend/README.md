# Street Scout Backend


## Setup

Copy environment variables to the [.env](.env) file

```bash
cp .env.example .env
```

Start the services

```bash
docker compose up -d
```

## [API Reference](http://localhost:8080/swagger-ui.html)

### [Vendors](http://localhost:8080/api/vendors)
- `GET /api/vendors` - List all vendors
- `GET /api/vendors/:id` - Get vendor details
- `POST /api/vendors` - Create new vendor
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

### [Vendor Table](src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Fvendor%2Fentity%2FVendor.java)
- `id`: number;
- `name`: string;
- `description`: string;
- `location`:
    - `latitude`: number;
    - `longitude`: number;
- `operatingHours`:
    - `open`: string;
    - `close`: string;
- `photos`: string[];
- `menu`: [MenuItem](#menuitem-table)[];
- `reviews`: [Review](#review-table)[];

### [Customer Table]()
- `id`: number
- `name`: string
- `email`: string
- `favoriteVendors`: string[]

### [Review Table](src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Freview%2Fentity%2FReview.java)
- `id`: number
- `userId`: number
- `vendorId`: number
- `rating`: number
- `text`: string
- `createdAt`: Timestamp
- `isEnabled`: boolean

### [MenuItem Table](src%2Fmain%2Fjava%2Fxyz%2Fstreetscout%2Fvendor%2Fentity%2FMenuItem.java)
- `id`: number;
- `name`: string;
- `description`: string;
- `price`: number;

<p align="right">(<a href="#readme-top">back to top</a>)</p>