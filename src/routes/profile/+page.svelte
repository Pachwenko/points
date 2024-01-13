<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let message = '';
	let userData;
	let _displayName = '';
	let displayName = '';
	let _email = '';
	let email = '';
	let password = '';

	async function handleSaveChanges() {
		if (displayName !== _displayName) {
			if (!userData) {
				// create new profile
				const { error } = await supabase
					.from('profiles')
					.insert({ id: data.session?.user.id, display_name: displayName });
			} else {
				const { error } = await data.supabase
					.from('profiles')
					.update({ display_name: displayName })
					.eq('id', data.session?.user.id);
			}
		}

		if (password) {
			const { error } = await supabase.auth.updateUser({ password: password });
		}
		if (email !== _email) {
			const { error } = await supabase.auth.updateUser({ email: email });
			message += 'Please go to your email and confirm the change.';
		}
	}

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		goto('/auth');
	};

	onMount(async () => {
		if (!data.session) {
			goto('/auth');
		}
		// should only ever return one (the current user's profile)
		const { data: result } = await supabase
			.from('profiles')
			.select('*')
			.eq('id', data.session?.user.id)
			.limit(1)
			.single();
		if (result) {
			userData = result;
			displayName = userData.display_name;
			_displayName = displayName;
		}
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (user) {
			email = user.email;
			_email = email;
		}
	});
</script>

{#if data.session}
	<div class="h-full flex justify-center items-center">
		<form on:submit={handleSaveChanges} class="p-6 rounded-lg w-full max-w-md">
			{#if message}
				<p class=" text-2xl text-center border border-2">{message}</p>
			{/if}
			<div class="mb-4">
				<label for="display-name" class="block mb-2">Display Name</label>
				<input
					id="display-name"
					name="display_name"
					bind:value={displayName}
					class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Display Name"
				/>
			</div>
			<div class="mb-4">
				<label for="email" class="block mb-2">Email</label>
				<input
					id="email"
					name="email"
					bind:value={email}
					class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="me@example.com"
				/>
			</div>
			<div class="mb-4">
				<label for="password" class="block mb-2">New Password</label>
				<input
					id="password"
					name="password"
					bind:value={password}
					class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="new password"
				/>
			</div>
			<button class="w-full p-3 bg-aqua text-white rounded-lg hover:bg-dim-aqua"
				>Save Changes</button
			>
			<button
				on:click={handleSignOut}
				class="w-full mt-4 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600">Sign out</button
			>
		</form>
	</div>
{/if}
