# Features Images Folder

This folder contains images for the features section of the Waitwhiz website.

## Current Images:

- `aicalling.jpg` - AI calling feature (already available)
- `whatsapp-orders.jpg` - WhatsApp orders feature (needs to be added)
- `whatsapp-marketing.jpg` - WhatsApp marketing campaigns feature (needs to be added)
- `ai-bot.jpg` - AI bot feature (needs to be added)
- `llm-model.jpg` - LLM model feature (needs to be added)

## How to add feature images:

1. **Upload your feature images** to this folder (`public/images/features/`)
2. **Use the exact filenames** listed above to match the code
3. **Recommended format**: JPG or PNG
4. **Recommended size**: 400x300 pixels or similar aspect ratio
5. **Keep file sizes reasonable** (under 200KB recommended)

## Features that need images:

1. **WhatsApp Orders** - Image showing WhatsApp conversation with order flow
2. **WhatsApp Marketing** - Image showing marketing campaign interface
3. **AI Bot** - Image showing chatbot interface or conversation
4. **LLM Model** - Image representing AI/ML technology for restaurants

## Example usage in code:

```javascript
const features = [
  {
    icon: MessageCircle,
    title: "Feature Title",
    description: "Feature description",
    image: "/images/features/your-feature-image.jpg"
  }
];
```

## Tips:

- Use high-quality, relevant images that match the feature description
- Ensure images have good contrast and are readable at small sizes
- Consider using screenshots of actual product interfaces when possible
- Test that images look good in the feature cards (400px width) 