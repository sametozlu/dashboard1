# Netmon Yönetim Sistemi - Design Guidelines

## Design Approach
**System-Based Approach**: Using Material Design principles adapted for a professional admin dashboard. This approach ensures consistency, scalability, and familiar interaction patterns for management systems.

**Key Principles**:
- Clarity and efficiency over visual flair
- Data-focused layouts with clear hierarchy
- Consistent, predictable interactions
- Professional, trustworthy appearance

## Color Palette

### Light Mode
- **Primary Blue**: 210 85% 45% (Netmon brand blue - buttons, active states, links)
- **Primary Hover**: 210 85% 38%
- **Background**: 220 15% 98% (subtle cool gray)
- **Surface**: 0 0% 100% (white cards/panels)
- **Border**: 220 13% 91%
- **Text Primary**: 220 15% 20%
- **Text Secondary**: 220 10% 45%

### Dark Mode
- **Primary Blue**: 210 90% 58% (brighter for contrast)
- **Primary Hover**: 210 90% 65%
- **Background**: 220 20% 11%
- **Surface**: 220 18% 15% (cards/sidebar)
- **Border**: 220 15% 25%
- **Text Primary**: 220 15% 95%
- **Text Secondary**: 220 10% 65%

### Semantic Colors
- **Success**: 145 65% 45% (green for positive states)
- **Warning**: 35 95% 55% (orange for alerts)
- **Danger**: 0 75% 52% (red for critical alarms)
- **Info**: 200 85% 48% (cyan for informational)

## Typography
- **Font Family**: 'Inter' from Google Fonts (clean, professional, excellent readability)
- **Headings**: 
  - H1: text-2xl font-semibold (32px)
  - H2: text-xl font-semibold (24px)
  - H3: text-lg font-medium (20px)
- **Body**: text-base (16px) for content, text-sm (14px) for secondary info
- **Labels**: text-sm font-medium for form labels and section headers

## Layout System

### Spacing Units
Use Tailwind spacing: **2, 3, 4, 6, 8** as primary units
- Component padding: p-4, p-6
- Section margins: mb-6, mb-8
- Grid gaps: gap-4, gap-6

### Grid Structure
- **Sidebar**: Fixed 256px width (w-64)
- **Main Content**: Full remaining width with max-w-7xl container
- **Cards/Panels**: Rounded corners (rounded-lg), shadow-sm for elevation

## Component Library

### Login Page
- Centered card (max-w-md) on gradient background
- Netmon logo at top (h-12 to h-16)
- Clean form with floating labels
- Primary blue submit button (full width)
- Subtle background pattern or gradient (blue tones)

### Sidebar Navigation
- Fixed left sidebar (bg-surface in dark mode)
- Netmon logo at top (p-6)
- Menu items with icons (32px touch targets)
- Active state: primary blue background with rounded corners
- Hover state: subtle background change
- Icons from Heroicons (outline style)

### Dashboard Layout
- Top bar: page title, user profile, notifications icon
- Content area: Cards with shadow-sm, rounded-lg
- Responsive grid for widgets (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

### Data Tables
- Clean borders, alternating row backgrounds
- Sortable column headers
- Action buttons: icon-only for compact display
- Pagination controls at bottom

### Cards/Panels
- White/surface background with subtle shadow
- Header section with title and action buttons
- Consistent padding (p-6)
- Border-top accent color for categorization

### Forms
- Grouped fields in sections
- Clear labels above inputs
- Primary button for submit, ghost/outline for cancel
- Inline validation messages

### Status Indicators
- Badge components for states (rounded-full px-3 py-1 text-xs)
- Color-coded: success (green), warning (orange), danger (red), info (blue)

## Logo Usage
**Netmon Logo** (Kwc_Netmon_Logo_Netmon_1-300x80_1759385971152.png):
- Login page: Centered, h-16 mb-8
- Sidebar: Top section, h-10 to h-12, pl-6 pt-6
- Maintain aspect ratio, use on dark/light backgrounds appropriately

## Interactions
- Smooth transitions: transition-colors duration-200
- Hover states: subtle background changes, never drastic
- Focus states: ring-2 ring-primary for keyboard navigation
- Loading states: skeleton screens or spinners (blue)

## Responsive Behavior
- Sidebar: Collapsible on mobile (hamburger menu)
- Tables: Horizontal scroll on mobile with sticky first column
- Cards: Stack to single column on mobile
- Forms: Full width inputs on mobile

## Accessibility
- WCAG AA contrast ratios minimum
- Keyboard navigation support throughout
- ARIA labels for icon-only buttons
- Screen reader friendly status updates