<script lang="ts">
	import { goto } from '$app/navigation';
import { onMount } from 'svelte';
	import { fetcher } from '../../client/services';
	import { getAuth, setAuth } from '../../helpers/user/auth';

	let name: string;
	let password: string;
	let isLoading: boolean;
	let error: string;

	onMount(() => {
		const { token } = getAuth();
		if(token) {
			goto("/tweets");
		}
	});

	const signup = async (e: SubmitEvent) => {
		e.preventDefault();

		isLoading = true;

		try {
			const res = await fetcher.api.user.signup.post({
				body: {
					name,
					password
				}
			});

			const data = res.body;

			if (res.status === 200) {
				setAuth(data.user.id, data.token);
				goto('/tweets');
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
	<title>Signup</title>
</svelte:head>

<h1>Signup</h1>

<form on:submit={signup}>
	<label>
		name:
		<input type="text" bind:value={name} />
	</label>
	<label>
		password:
		<input type="password" bind:value={password} />
	</label>
	<div>
		<button disabled={isLoading}>
			{isLoading ? 'loading...' : 'サインアップ'}
		</button>
		<span role="alert">{error ? error : ''}</span>
	</div>
</form>
