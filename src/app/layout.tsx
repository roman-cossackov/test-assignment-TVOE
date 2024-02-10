import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/UI/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TVOE",
	description: "Created by me",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Sidebar />
				<div className="content">{children}</div>
			</body>
		</html>
	);
}
