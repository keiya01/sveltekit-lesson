<script lang="ts">
	import { page } from '$app/stores';
	import { getAuth } from '../../helpers/user/auth';

	// TODO: contextで管理して、localstorageと同期したいかも
	const { token } = getAuth();
	const isLogin = !!token;
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/tweets">
					Home
				</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			{#if !isLogin}
				<li class:active={$page.url.pathname === '/user/login'}>
					<a sveltekit:prefetch href="/user/login">login</a>
				</li>
				<li class:active={$page.url.pathname === '/user/signup'}>
					<a sveltekit:prefetch href="/user/signup">signup</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		background-color: #fff;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	ul {
		width: 100%;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li:first-of-type {
		display: flex;
		flex: 1;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
