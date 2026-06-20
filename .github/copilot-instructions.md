<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

# E-Commerce Store - Project Setup Instructions

## Project Overview
Next.js e-commerce platform with product listings, shopping cart, and PostgreSQL database.

## Completed Steps

- [x] Project requirements clarified
- [x] Directory structure created
- [x] Core configuration files added (tsconfig, next.config, tailwind.config)
- [x] Package.json with dependencies configured
- [x] Prisma database schema created
- [x] React components created (Header, ProductCard, Cart)
- [x] API routes created (products, cart)
- [x] State management with Zustand implemented
- [x] Global styles and Tailwind CSS configured
- [x] README.md documentation created

## Next Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup PostgreSQL Database**
   - Ensure PostgreSQL is installed and running
   - Create a new database named `ecommerce`
   - Update DATABASE_URL in .env.local with your credentials

3. **Initialize Database Schema**
   ```bash
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Application**
   - Visit http://localhost:3000 in your browser

## Project Features Implemented

✅ Product Listing Page - Displays 8 sample products with images, prices, and descriptions
✅ Shopping Cart - Add/remove items, adjust quantities, view cart total
✅ Responsive Design - Mobile, tablet, and desktop layouts
✅ API Routes - GET/POST endpoints for products and cart
✅ State Management - Zustand store for cart state
✅ Modern UI - Tailwind CSS styling with component-based architecture
✅ Type Safety - Full TypeScript implementation

## Key Technologies

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Prisma ORM
- PostgreSQL

## File Structure

```
/app
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── lib/                   # Utility functions and stores
├── prisma/                # Database schema
├── public/                # Static assets
└── [config files]         # Configuration files
```

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint
- `npx prisma db push` - Sync database schema
- `npx prisma studio` - Open Prisma Studio GUI

## Environment Setup

The .env.local file has been created with template values. Update with your actual PostgreSQL connection details:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Database connection error:**
- Verify PostgreSQL is running
- Check DATABASE_URL in .env.local
- Ensure database exists

**Modules not found:**
```bash
npm install
```

## Next Phase Tasks

1. Add user authentication (NextAuth.js)
2. Implement checkout process
3. Add payment integration (Stripe)
4. Create admin dashboard
5. Add search and filtering
6. Implement user reviews
