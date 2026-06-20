# E-Commerce Store

A modern e-commerce platform built with Next.js 14, React, TypeScript, and Tailwind CSS. Features product listings, shopping cart functionality, and a clean, responsive UI.

## Features

- 📦 **Product Catalog** - Browse a wide selection of products with detailed information
- 🛒 **Shopping Cart** - Add/remove items, adjust quantities with persistent state
- 💳 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance and SEO
- 🎨 **Modern UI** - Clean and intuitive interface with Tailwind CSS
- 🔒 **Type Safe** - Full TypeScript support for type safety

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: PostgreSQL (with Prisma ORM)
- **API**: Next.js API Routes

## Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Git

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

Update the `DATABASE_URL` with your PostgreSQL connection string.

### 3. Setup Database

Push the Prisma schema to your database:

```bash
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/
│   ├── api/                 # API routes
│   │   ├── products/       # Products API
│   │   └── cart/           # Cart API
│   ├── products/           # Product pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/             # React components
│   ├── Header.tsx          # Header component
│   ├── ProductCard.tsx     # Product card component
│   └── Cart.tsx            # Shopping cart component
├── lib/
│   └── store.ts            # Zustand store for cart state
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind CSS config
└── next.config.js          # Next.js config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma db push` - Sync database with schema
- `npx prisma studio` - Open Prisma Studio to manage database

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/cart` - Add item to cart
- `GET /api/cart` - Get cart items

## Database Schema

### Product
- id (Primary Key)
- name
- description
- price
- image
- stock
- category
- createdAt
- updatedAt

### Cart
- id (Primary Key)
- userId (Optional)
- items (CartItem[])
- createdAt
- updatedAt

### CartItem
- id (Primary Key)
- cartId (Foreign Key)
- productId (Foreign Key)
- quantity

### Order
- id (Primary Key)
- userId (Optional)
- total
- status
- createdAt
- updatedAt

## Future Enhancements

- [ ] User authentication with NextAuth.js
- [ ] Order management and tracking
- [ ] Payment integration (Stripe/PayPal)
- [ ] Product search and filtering
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Analytics and reporting

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for personal or commercial purposes.
