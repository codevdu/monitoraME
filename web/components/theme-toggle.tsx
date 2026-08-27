"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "themechange";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function getStoredTheme(): Theme | null {
	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

	return storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	document.documentElement.style.colorScheme = theme;
}

function setTheme(theme: Theme) {
	window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	applyTheme(theme);
	window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function toggleTheme() {
	setTheme(getThemeSnapshot() === "dark" ? "light" : "dark");
}

function getThemeSnapshot(): Theme {
	if (typeof window === "undefined") {
		return "light";
	}

	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeToTheme(onStoreChange: () => void) {
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	const syncTheme = () => {
		applyTheme(getStoredTheme() ?? getSystemTheme());
		onStoreChange();
	};

	window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
	window.addEventListener("storage", syncTheme);
	mediaQuery.addEventListener("change", syncTheme);

	return () => {
		window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
		window.removeEventListener("storage", syncTheme);
		mediaQuery.removeEventListener("change", syncTheme);
	};
}

function isEditableTarget(target: EventTarget | null) {
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	return (
		target.isContentEditable ||
		target.matches("input, textarea, select")
	);
}

export function ThemeToggle({
	className,
	onClick,
	...props
}: Omit<React.ComponentProps<typeof Button>, "children">) {
	const theme = React.useSyncExternalStore(
		subscribeToTheme,
		getThemeSnapshot,
		() => "light",
	);
	const isDark = theme === "dark";

	React.useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (
				(event.ctrlKey || event.metaKey) &&
				event.shiftKey &&
				event.key.toLowerCase() === "l" &&
				!isEditableTarget(event.target)
			) {
				event.preventDefault();
				toggleTheme();
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<Button
			aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
			className={className}
			size="icon-sm"
			onClick={(event) => {
				onClick?.(event);

				if (!event.defaultPrevented) {
					toggleTheme();
				}
			}}
			type="button"
			variant="outline"
			{...props}
		>
			{isDark ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
}
