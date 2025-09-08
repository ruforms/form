# @ruforms/form-inputs

A collection of high-quality React form input components built with TypeScript and Tailwind CSS

## 🚀 Installation

### Using shadcn CLI 3.0+ (Recommended)

**1. Add RuForms registry to your `components.json`:**

```json
{
  "registries": {
    "@ruforms": {
      "url": "https://your-cloudfront-domain/r/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

**2. Install components:**

```bash
npx shadcn@latest add @ruforms/input
npx shadcn@latest add @ruforms/textarea
npx shadcn@latest add @ruforms/button
npx shadcn@latest add @ruforms/select
```

**3. Set your registry token:**

```bash
export REGISTRY_TOKEN="your-license-key-here"
# Or add to .env file
```

### Manual Installation

```bash
npm install @ruforms/form-inputs
```

## 📦 Available Components

- **Input** - Text input with variants and validation
- **Textarea** - Multi-line text input
- **Button** - Action button with multiple styles
- **Select** - Dropdown selection component

## 🎨 Features

- **TypeScript** - Fully typed components
- **Tailwind CSS** - Utility-first styling
- **Accessible** - ARIA compliant
- **Customizable** - Easy to theme and extend
- **Lightweight** - Optimized bundle size

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Build components
pnpm run build

# Development mode
pnpm run dev

# Lint and type check
pnpm run lint
pnpm run type-check
```

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

This is part of the RuForms ecosystem. For questions and support, visit [ruforms.com](https://ruforms.com).

# Test comment
