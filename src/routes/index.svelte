<script context="module" lang="ts">
	import { browser } from "$app/env";

	export const prerender = true;
	export const router = browser;
</script>

<svelte:head>
	<title>Top</title>
</svelte:head>

<section>
	<h1>
		Hello World
	</h1>
</section>
