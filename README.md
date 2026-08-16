# ☕ MrBean Café Website

A modern, responsive café website designed for **MrBean**, a cozy café focused on specialty coffee, desserts, comfortable workspaces, and a welcoming atmosphere.

The project is currently focused on the **frontend experience**, with the backend and admin dashboard planned for future development.

---

## ✨ Features

### 🏠 Homepage

* Modern café hero section
* Strong call-to-action buttons
* Featured coffee and desserts
* Café highlights
* Student discount section
* Workspace showcase
* Image gallery
* Customer reviews
* Reservation CTA
* Contact information
* Google Maps integration

### ☕ Menu

* Dedicated menu page
* Menu categories
* Category filtering
* Menu item cards
* Item images
* Item descriptions
* Pricing
* Featured menu items
* Individual menu item pages
* Related/recommended menu items

### 🖼️ Gallery

* Café image gallery
* Category filtering
* Coffee photography
* Interior images
* Dessert images
* Workspace images
* Library section
* Atmosphere photography
* Image lightbox

### ⭐ Reviews

* Customer testimonials
* Star ratings
* Customer roles
* Verified reviews
* Featured reviews
* Review summary

### 📍 Contact

* Café address
* Phone number
* WhatsApp
* Email
* Opening hours
* Google Maps
* Contact form

### 📱 Responsive Design

* Mobile-first layout
* Tablet support
* Desktop layouts
* Responsive navigation
* Responsive cards and grids
* Optimized spacing and typography

### 🎨 UI / UX

* Modern café-inspired visual design
* Warm and welcoming atmosphere
* Smooth transitions
* Framer Motion animations
* Interactive buttons and cards
* Hover effects
* Image interactions
* Scroll-to-top functionality
* Custom 404 page

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* JavaScript
* CSS
* Framer Motion
* React Icons
* Axios

### Backend

**Planned — Not currently implemented**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* JWT Authentication

### Admin Dashboard

**Planned — Not currently implemented**

The future admin dashboard will allow the café owner to update website content without modifying the frontend code.

---

## 📂 Project Structure

```dash
MrBean/
│
├── client/
│   │
│   ├── public/images
│   │            ├── about/
│   │            ├── contact/
│   │            ├── gallery/
│   │            ├── home/
│   │            ├── menu/
│   │            ├── reservation/
│   │            └── reviews/
│   │    
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── videos/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Features/
│   │   │   ├── Menu/
│   │   │   ├── Gallery/
│   │   │   ├── Reviews/
│   │   │   ├── Reservation/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Shared/
│   │   │   ├── StudentOffer/
│   │   │   └── WorkSpace/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Menu/
│   │   │   ├── MenuItem/
│   │   │   ├── Gallery/
│   │   │   ├── Reviews/
│   │   │   ├── Contact/
│   │   │   ├── NotFound/
│   │   │   └── Reservation/
│   │   │
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── data/
│   │   │   ├── menuData.jsx
│   │   │   ├── galleryData.js
│   │   │   ├── reviewsData.js
│   │   │   ├── contactData.js
│   │   │   ├── aboutData.jsx
│   │   │   ├── footerData.js
│   │   │   ├── homeData.jsx
│   │   │   ├── navigationData.js
│   │   │   ├── offerData.js
│   │   │   ├── reservationData.js
│   │   │   └── workspaceData.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│   └──package-lock.json
│
├── server/                  # Planned
│
├── admin/                   # Planned
│
└── README.md
```

---

## 📄 Pages

The website currently includes:

| Page        | Purpose                              |
| ----------- | ------------------------------------ |
| Home        | Main customer acquisition page       |
| About       | Café story and values                |
| Menu        | Complete café menu                   |
| Gallery     | Café photography and atmosphere      |
| Reviews     | Customer testimonials                |
| Contact     | Contact information and enquiry form |
| Reservation | Table reservation interface          |

---

## 🧭 Website Flow

The homepage is designed to naturally guide visitors toward visiting the café or making a reservation.

```bash
Hero
  ↓
Featured Coffee
  ↓
Why Choose MrBean
  ↓
Best Sellers
  ↓
Student Offer
  ↓
Workspace
  ↓
Gallery
  ↓
Reviews
  ↓
Reservation CTA
  ↓
Contact + Map
  ↓
Footer
```

The goal is to communicate:

> Great coffee → beautiful atmosphere → comfortable workspace → student-friendly → trusted by customers → visit MrBean.

---

## 📊 Current Project Status

### Frontend

* [x] React + Vite setup
* [x] Routing
* [x] Navbar
* [x] Footer
* [x] Homepage
* [x] About section
* [x] Features section
* [x] Menu preview
* [x] Complete menu page
* [x] Individual menu item pages
* [x] Gallery
* [x] Reviews
* [x] Reservation page
* [x] Contact page
* [x] Responsive layouts
* [x] Animations
* [x] Image lightbox
* [x] Scroll-to-top
* [x] 404 page

### Backend

* [ ] Node.js / Express setup
* [ ] MongoDB integration
* [ ] API development
* [ ] Dynamic content
* [ ] Reservation storage
* [ ] Contact message storage

### Admin Dashboard

* [ ] Admin authentication
* [ ] Dashboard
* [ ] Menu management
* [ ] Review management
* [ ] Gallery management
* [ ] Offer management
* [ ] Reservation management
* [ ] Contact message management

---

## 🔮 Future Development

The backend and admin dashboard are planned to make the website content manageable by the café owner.

### Backend

Future API modules will include:

* Menu
* Categories
* Reviews
* Gallery
* Offers
* Reservations
* Contact Messages
* Business Information
* Opening Hours

### Admin Dashboard

The future admin panel will allow the owner to:

* Add and edit menu items
* Update prices
* Change menu categories
* Add or remove gallery images
* Manage customer reviews
* Update student offers
* View reservations
* View contact messages
* Update café contact information
* Update opening hours

The goal is to keep the **frontend design independent from the content management system**, allowing the café owner to update information without changing the website's UI.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/abdurrah0006/mrbean.git
```

### Navigate to the Frontend

```bash
cd mrbean/client
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The website will then be available through the local Vite development server.

---

## 📸 Screenshots

### 🏠 Home

![Home Page](image/home.jpg)

### 🔮 About

![About Page](image/about.jpg)

### ☕ Menu

![Menu Page](image/menu.jpg)

### 📖 Menu Item

![Menu Item Page](image/menuitem.jpg)

### 🖼️ Gallery

![Gallery Page](image/gallery.jpg)

### ⭐ Reviews

![Review Page](image/review.jpg)

---

## 🎯 Project Goals

MrBean is designed as a **customer acquisition website**, rather than simply an informational café website.

The main goals are:

* Increase café visits
* Encourage table reservations
* Showcase the menu
* Build trust with new customers
* Promote student discounts
* Attract students and remote workers
* Showcase the café atmosphere
* Make important business information easy to find
* Create a strong online presence for the café

---

## 🧠 What I Learned

* Building a complete React website from scratch
* Component-based architecture
* React Router
* Responsive web design
* Reusable UI components
* Managing frontend data
* Framer Motion animations
* Image galleries and lightboxes
* Creating individual dynamic pages
* Designing customer-focused user flows
* Structuring a scalable frontend for future backend integration

---

## 📌 Project Status

**Frontend: Completed / Main development phase**

**Backend: Planned**

**Admin Dashboard: Planned**

The current repository represents the completed frontend experience. Backend integration and content management will be developed in a later phase.

---

## 📬 Contact

If you like this project or would like to collaborate:

* GitHub: https://github.com/abdurrah0006
* LinkedIn: https://linkedin.com/in/abdurrah0006

---

## ⭐ Give a Star

If you found this project useful or interesting, consider giving the repository a ⭐
