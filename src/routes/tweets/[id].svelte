<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { fetcher } from '../../client/services';

	export const load: Load = async ({ params }) => {
		const res = await fetcher.api.tweets._id(Math.trunc(Number(params.id))).get();

		if (res.status === 200) {
			const data = res.body;

			return {
				props: { tweet: data.tweet }
			};
		}

		return {
			error: '予期しないエラーが発生しました。'
		};
	};
</script>

<script lang="ts">
	import type { Tweet } from '../../server/infra/tweet';

	export let tweet: Tweet;
</script>

<svelte:head>
	<title>Tweets</title>
</svelte:head>

<div>
	<h1>Tweets</h1>

	<p>{tweet.content}</p>
</div>
