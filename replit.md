# Netmon Management System

## Overview

Netmon is a professional network monitoring and management system built as a web-based admin dashboard. The application provides real-time monitoring of network devices, alarm management, system control, and user administration capabilities. It follows a Material Design-inspired approach adapted for professional administrative interfaces, emphasizing clarity, data-focused layouts, and consistent interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component System**
- Shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants
- Custom theming system supporting light/dark modes with system preference detection

**State Management**
- TanStack Query (React Query) for server state management with configured caching strategies
- React hooks for local component state
- Context API for theme management and sidebar state

**Design System**
- Custom color palette with semantic color definitions (primary blue, success green, warning orange, danger red)
- Inter font family from Google Fonts for professional readability
- Consistent spacing units (2, 3, 4, 6, 8) based on Tailwind spacing scale
- Material Design principles adapted for admin dashboard use

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- ESM module system throughout the application
- Development and production environment separation

**API Design**
- RESTful API architecture with routes prefixed under `/api`
- Middleware chain for logging, JSON parsing, and error handling
- Request/response logging with duration tracking for API endpoints

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage`) as the current data layer
- Storage interface pattern (`IStorage`) allowing for easy migration to persistent databases
- Drizzle ORM configured for PostgreSQL (ready for database integration)
- Neon serverless PostgreSQL driver available for cloud deployment

**Session Management**
- Express session configuration with connect-pg-simple for PostgreSQL session store
- Cookie-based authentication strategy

### Database Architecture

**ORM & Schema**
- Drizzle ORM for type-safe database operations
- Drizzle-Zod for runtime validation integrated with database schemas
- PostgreSQL as the target database with schema defined in `shared/schema.ts`
- Migration system configured via Drizzle Kit

**Current Schema**
- Users table with UUID primary keys, unique usernames, and password storage
- Shared schema pattern allowing type sharing between client and server

### Application Routes & Features

**Authentication**
- Login page with credential-based authentication
- Session-based user state (implementation ready)

**Dashboard Pages**
- Overview: System diagram visualization with rectifier (RECT), MPPT, and battery monitoring
- Durum (Status): Real-time device status monitoring with online/offline/warning states
- Aktif Alarm (Active Alarms): Alarm management with severity levels (critical, warning, info)
- Kontrol (Control): System service control panel for monitoring, backup, and alert services
- Kayıtlar (Logs): System log viewer with search and export functionality
- Varlıklar (Assets): Network asset inventory management
- Kullanıcı Yönetimi (User Management): User administration with role-based access
- Ayarlar (Settings): System configuration including notification preferences

**Navigation**
- Collapsible sidebar with grouped menu items
- Active route highlighting
- Mobile-responsive drawer navigation

### Development & Build Process

**Development**
- Vite middleware mode for seamless HMR during development
- TSX server execution for TypeScript Node.js runtime
- Replit-specific plugins for development experience (runtime error overlay, cartographer, dev banner)

**Build & Deployment**
- Client: Vite production build outputting to `dist/public`
- Server: ESBuild bundling with external package resolution
- Single command build process combining client and server compilation
- Database push command for schema synchronization

**Type Safety**
- Shared types between client and server via `shared/` directory
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- Strict TypeScript configuration with incremental compilation

## External Dependencies

**UI & Styling**
- Radix UI component primitives (accordion, dialog, dropdown, popover, select, tabs, toast, etc.)
- Tailwind CSS with PostCSS for production optimization
- Lucide React for consistent iconography
- Embla Carousel for carousel functionality
- React Day Picker for calendar/date selection

**Data Management**
- TanStack Query for remote data fetching and caching
- React Hook Form with Hookform Resolvers for form state management
- Zod for schema validation
- date-fns for date manipulation

**Database & ORM**
- Drizzle ORM with Drizzle-Zod integration
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- connect-pg-simple for PostgreSQL session storage

**Development Tools**
- Vite with React plugin
- Replit-specific development plugins (runtime error modal, cartographer, dev banner)
- TypeScript compiler with strict mode
- ESBuild for server bundling

**Utilities**
- clsx and tailwind-merge (via cn utility) for conditional className composition
- nanoid for unique ID generation
- wouter for routing