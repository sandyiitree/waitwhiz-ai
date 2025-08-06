# Client Logos Folder

This folder contains all client logo images for the Waitwhiz website.

## How to add new client logos:

1. **Upload your logo image** to this folder (`public/images/logos/`)
2. **Use descriptive filenames** like `client-name-logo.png` or `client-name-logo.jpg`
3. **Recommended format**: PNG or JPG
4. **Recommended size**: 64x64 pixels or larger (will be scaled down to 64x64 in the UI)
5. **Update the clients array** in `src/App.tsx` to reference your new logo file

## Current client logos:

- `paul-logo.png` - Paul
- `chilis logo.png` - Chilis
- `gardin by diggin logo.jpg` - Gardin by Diggin
- `cafe_amudham_logo.jpeg` - Cafe Amudham
- `mkt logo.png` - MKT
- `rajendra_da_daba_logo.png` - Rajendra Da Daba
- `yo_tibet_logo.png` - Yo Tibet
- `naivedyam-logo.png` - Naivedyam
- `lha_kitchen_logo.png` - Lha Kitchen
- `dasusy logo.jpeg` - Dasusy
- `mysore cafe logo.jpeg` - Mysore Cafe
- `udupi_logo.jpg` - Udupi
- `library_jaipur_logo.jpg` - Library Jaipur
- `panchgaon logo.png` - Panchgaon
- `Diggin_logo.png` - Diggin
- `anaardana-logo full name.jpg` - Anaardana
- `gola_logo.png` - Gola
- `paparizza logo.jpeg` - Paparizza

## Example usage in code:

```javascript
const clients = [
  { name: "Your Client Name", logo: "/images/logos/your-client-logo.png" },
  // ... other clients
];
```

## Tips:

- Keep file sizes reasonable (under 200KB recommended)
- Use transparent backgrounds when possible for better integration
- Test that logos look good at small sizes (64x64 pixels)
- Ensure logos have good contrast and are readable 