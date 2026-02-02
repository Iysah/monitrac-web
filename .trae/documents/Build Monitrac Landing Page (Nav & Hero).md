I will build the Navigation Bar and Hero Section for Monitrac, replicating the "Wallyo" design style (Dark theme, Purple accents, Nunito font) while using the specific Monitrac content provided.

### 1. Style & Configuration
*   **Update `src/index.css`**:
    *   Add a new purple accent color (e.g., `#9f5afd`) to the Tailwind theme to match the "Get the App" and "See Features" buttons from the screenshot.
    *   Ensure the background remains dark (`#0a0a0c`) and text is light (`#f8f8fa`).
    *   Verify `Nunito` font application across headings and body.

### 2. Component Implementation
*   **Create `src/components/Navbar.tsx`**:
    *   **Layout**: Flexbox layout with Logo (Left), Navigation Links (Center), and CTA Button (Right).
    *   **Content**:
        *   Logo: `monitrac-logo.png` + "Monitrac" text.
        *   Links: Features, Screens, Download, FAQ (styled as hoverable text).
        *   CTA: "Get the App" button (Purple, rounded-full).
    *   **Styling**: Transparent background or slight blur, responsive spacing.

*   **Refactor `src/App.tsx`**:
    *   Replace the existing inline `<nav>` with the new `<Navbar />` component.
    *   Ensure the layout structure allows the Hero section to sit correctly below the nav.

*   **Update `src/pages/Home.tsx` (Hero Section)**:
    *   **Layout**: 2-column grid (Text Left, Image Right) for desktop, stacked for mobile.
    *   **Left Column (Content)**:
        *   **Headline**: "Manage your finances entirely through a conversational interface." (Derived from description to match the "hero" style).
        *   **Description**: The provided text: "Monitrac is a mobile-first, privacy-centric expense tracker..."
        *   **Actions**: "See Features" button (Purple glow) and App Store/Play Store badge placeholders.
    *   **Right Column (Visuals)**:
        *   **Main Image**: Display `mobile-preview.png` centered.
        *   **Floating Elements**: Create styled "cards" (e.g., "Works Offline", "Privacy First") positioned around the phone using absolute positioning to mimic the 3D floating effect in the screenshot.

### 3. Verification
*   Verify the page matches the "Wallyo" aesthetic (Dark mode, fonts, colors).
*   Check responsiveness on mobile and desktop viewports.
