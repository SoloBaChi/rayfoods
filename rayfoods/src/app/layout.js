import "./globals.css";

export const metadata = {
  title: "Ray foods",
  description: "Where you can buy Palm Oil and Rice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
