# ✨ Design System Reference

## 📏 Font Size

| Element | Tailwind Classes            |
|---------|-----------------------------|
| `h1`    | `text-3xl md:text-5xl`      |
| `h2`    | `text-xl md:text-3xl`       |
| `h3`    | `text-base md:text-xl`      |
| `h4`    | `text-sm md:text-base`      |
| `h5`    | `text-xs md:text-sm`        |

## 🅱️ Font Weight

- **Primary**: `bold`
- **Secondary**: `normal`
- **Tertiary**: `normal`

## 🎨 Color Palette

### 🌞 Light Theme  
[View palette](https://coolors.co/palette/006d77-83c5be-edf6f9-ffddd2-e29578)

### 🌚 Dark Theme  
[View palette](https://coolors.co/palette/ffbc42-d81159-8f2d56-218380-73d2de)

### Gray

- `--color-gray-primary`: `hsl(39, 15%, 50%)`
- `--color-gray-secondary`: `hsl(39, 50%, 95%)`
- `--color-gray-tertiary`: `hsl(39, 50%, 97%)`
- **Additional:**  
  `hsl(39, 50%, 92%)`, `hsl(39, 50%, 85%)`

### Dark Gray

- `--color-dark-gray-primary`: `hsl(39, 10%, 20%)`
- `--color-dark-gray-secondary`: `hsl(39, 10%, 30%)`
- `--color-dark-gray-tertiary`: `hsl(39, 10%, 40%)`
- **Additional:** `hsla(39, 15%, 50%, 50%)`

### Accent Colors

- **Dark:** `hsl(338, 85%, 30%)`
- **Light:** `hsl(338, 85%, 46%)`

## 🌫️ Shadows

- `hsla(39,15%,50%,50%)`
- `hsl(39,30%,90%)` (inset)

#### Examples

- **Buttons:**  
  `shadow-[0px_3px_5px_hsla(39,15%,50%,50%)]`  
  `inset-shadow-[0px_0px_5px_hsl(39,30%,90%)]`

- **Container:**  
  `shadow-[0px_3px_5px_hsla(39,15%,50%,50%)]`  
  `inset-shadow-[0px_3px_0px_hsl(39,30%,90%)]`

## 📦 Spacing

**Margin:**  
- `m-5`, `m-3`, `m-0`, `my-2`

**Padding:**  
- `px-3`, `px-5` (main container)  
- `py-5`, `py-10` (main container)

**Gap:**  
- `gap-10`, `gap-5`, `gap-3`, `gap-1`, `gap-0`

## 📏 Width

- `w-[600px]` – main container  
- `w-[20em]` – tertiary text  
- `max-w-[80vw]` – detailed sections  
- `w-[35em]` – questions/content  
- `w-full`  
- `max-w-[8/10]`

## 📏 Height

- `h-full`  
- `h-[400px]`  
- `min-h-[300px]`  
- `max-h-[8/10]`

## 🟦 Border Radius

- `rounded-sm`

## 🕶️ Opacity

- `opacity-10` – e.g., for `hr`

## 🔤 Fonts

- `--font-montserrat`: `"Montserrat", sans-serif`

## 🧵 Background Pattern

- Patterns from: [Hero Patterns](https://heropatterns.com/)
