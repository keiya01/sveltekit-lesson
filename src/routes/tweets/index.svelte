<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fetcher } from '../../client/services';

	export const load: Load = async ({ fetch }) => {
		const res = await fetcher.api.tweets.get();

		if (res.status === 200) {
			const data = res.body;

			return {
				props: { tweets: data.tweets }
			};
		}

		return {
			error: '予期しないエラーが発生しました。'
		};
	};
</script>

<script lang="ts">
	import type { Tweet } from '../../server/infra/tweet';
	import { getAuth } from '../../helpers/user/auth';

	export let tweets: Tweet[];

	let isLoading: boolean;
	let content: string;
	let error: string;

	const { token, userId } = getAuth();

	const post = async (e: SubmitEvent) => {
		e.preventDefault();

		if (!token || !userId) {
			error = 'ログインしてください。';
			return;
		}

		isLoading = true;

		try {
			const res = await fetcher.api.tweets.post({
				body: {
					token,
					userId: Math.trunc(Number(userId)),
					content,
				}
			});

			const data = res.body;

			if (res.status === 200) {
				tweets = [data.tweet, ...tweets];
				content = '';
			} else {
				error = data.message || 'ログインに失敗しました。';
			}
		} catch (e: any) {
			error = e;
		} finally {
			isLoading = false;
		}
	};
</script>

<svelte:head>
	<title>Tweets</title>
</svelte:head>

<div>
	<h1>Tweets</h1>

	{#if token && userId}
		<form on:submit={post}>
			<input name="text" aria-label="Add a tweet" placeholder="Add a tweet" bind:value={content} />
			<button type="submit">tweet</button>
		</form>
		<span>{isLoading ? 'loading...' : ''}</span>
		<span role="alert">{error ? error : ''}</span>
	{/if}

	<ul>
		{#each tweets as tweet (tweet.id)}
			<!-- TODO: show user.name -->
			<li><a href="/tweets/{tweet.id}">{tweet.content}</a></li>
		{/each}
	</ul>
</div>
