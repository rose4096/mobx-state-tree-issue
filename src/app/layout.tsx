import "./globals.css";
import {Provide} from "@/app/mst";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Provide>
            {children}
        </Provide>
        </body>
        </html>
    );
}
