# Web Development Studio

A modern web development studio website with an integrated Instagram Post Generator.

## Features

### Instagram Post Generator
- **Professional Templates**: 8 pre-built templates focused on web development topics
- **Brand Consistency**: Matches your website's design system and color scheme
- **Dark/Light Mode**: Supports both themes for flexible content creation
- **Export Options**: Download as high-quality PNG images or copy text to clipboard
- **Share Integration**: Native sharing capabilities for social media

### Web Development Content Topics
- 🚀 Building Scalable Web Apps
- ⚡ Performance Optimization  
- 🎨 Design System Deep Dive
- 🔧 API Architecture Patterns
- 📱 Mobile-First Development
- 🛡️ Security Best Practices
- 🧪 Testing Strategies
- 🚀 Deployment & CI/CD

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Access the Instagram Generator**:
   - Visit `/instagram-generator` for the full-screen generator
   - Or use the "Post Generator" link in the navigation

## Usage

### Generating Posts
1. Click "Generate New Post" to get a random template
2. Preview the post in the Instagram-style layout
3. Copy the text content or download the image
4. Share directly to social media platforms

### Customization
The generator uses your website's existing design tokens:
- Font: Monospace (font-mono)
- Colors: Black/white theme with gray accents
- Spacing: Consistent with your design system
- Animations: Framer Motion for smooth interactions

## Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Generation**: html2canvas
- **Internationalization**: next-intl

## File Structure

```
src/app/[locale]/
├── components/
│   ├── InstagramPostGenerator.tsx    # Component for main page
│   └── Navigation.tsx                # Updated with generator link
├── instagram-generator/
│   └── page.tsx                      # Dedicated generator page
└── page.tsx                          # Main page with generator section
```

## Contributing

To add new post templates, edit the `postTemplates` array in:
- `src/app/[locale]/components/InstagramPostGenerator.tsx`
- `src/app/[locale]/instagram-generator/page.tsx`

Each template should include:
- `title`: Engaging headline with emoji
- `description`: Detailed content about web development
- `hashtags`: Relevant hashtags for social media
- `category`: Content category for organization 