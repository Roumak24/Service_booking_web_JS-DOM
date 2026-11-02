# Service_booking_web_JS-DOM

# Laundry Services Booking Page

A simple, responsive laundry service booking page built with plain **HTML, CSS and JavaScript**. Browse services one at a time, add them to your cart, see the total update live, and book with a short form. No frameworks or libraries needed.

![Preview](screenshot.png)

> Add a screenshot of your page and save it as `screenshot.png` in the project folder so the preview shows up here.

## Features

- **Navigation bar** with a logo, links (Home, Services, Contact Us, About Us), a username badge and a red logout button
- **Browse Our Services** section that shows one service at a time with its image, name and price
- **Skip Item** and **Add Item** buttons that move through the services in a loop
- **Added Items** list that shows "No Items Added" at first, then fills up as you add services
- **Total Amount** that starts at ₹0 and updates automatically
- **Book Now form** with Full Name, Email ID and Phone Number
- **Book now button** stays disabled until at least one service is in the cart
- **Form checks** for empty fields and a valid email, with a confirmation message after booking
- **Responsive layout** that stacks the two sections on phones

## Services included

| Service                  | Price (₹) |
| ------------------------ | --------- |
| Dry Cleaning             | 200.00    |
| Leather & Suede Cleaning | 999.00    |
| Ironing                  | 30.00     |
| Wedding Dress Cleaning   | 2400.00   |
| Wash And Fold            | 140.00    |
| Stain Removal            | 500.00    |

## Project structure

```
laundry-services/
├── index.html      # Page structure and JavaScript
├── style.css       # All the styling
├── images/         # Service pictures
│   ├── dry.jpg
│   ├── leather.jpg
│   ├── ironing.jpg
│   ├── wedding.jpg
│   ├── wash.jpg
│   └── stain.jpg
└── README.md
```

## How to run

1. Download or clone this repository:
   ```bash
   git clone https://github.com/your-username/laundry-services.git
   ```
2. Open the folder.
3. Double-click `index.html` to open it in your browser.

That's it. There is nothing to install.

## How it works

1. The JavaScript keeps a list of services (name, price, image).
2. **Skip Item** moves to the next service. After the last one it goes back to the first.
3. **Add Item** puts the current service in the cart (each service can only be added once) and then moves to the next one.
4. The cart list and total are redrawn every time the cart changes.
5. **Book now** checks the form. If everything is fine it shows a confirmation and clears the cart.

## Customize

**Change or add a service:** open `index.html` and find the `services` list in the `<script>` section.

```javascript
var services = [
  { name: "Dry Cleaning", price: 200, image: imgDry },
  // add your own here
];
```

**Change a picture:** replace the file in the `images` folder, or change the link in the `var img...` lines, for example:

```javascript
var imgDry = "https://your-site.com/dry.jpg";
```

**Change colors:** open `style.css` and edit the color codes. The main blue is `#5457e8`.

## Built with

- HTML5
- CSS3 (Flexbox)
- JavaScript (vanilla)

## Possible improvements

- Remove an item from the cart
- Save the cart with `localStorage`
- Connect the booking form to a backend or email service
- Add a real login and logout system
- Add quantity and date/time selection

## License

This project is free to use for learning and personal projects. Add a license file (for example MIT) if you want to share it more widely.

## Author

Your Name – [GitHub](https://github.com/your-username)
