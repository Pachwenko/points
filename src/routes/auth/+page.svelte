<!-- // src/routes/auth/+page.svelte -->
<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let displayName = '';
	let email = '';
	let password = '';
	let errorMessage = '';

	let nextUrl = '';

	// TODO: make reset password and magic link routes
	// const handleResetPassword = async () => {
	//   await supabase.auth.resetPasswordForEmail(email, {
	//     redirectTo: `${location.origin}/profile`,
	//   })
	// }

	const handleSignUp = async () => {
		await supabase.auth
			.signUp({
				email,
				password,
				options: {
					emailRedirectTo: nextUrl ? nextUrl : location.origin
				}
			})
			.then(async (user) => {
				// TODO: can we make a helper for this error message thing? seems clunky doing this if check every api call
				// console.log('created user', user);
				if (user.error) {
					errorMessage = user.error.message;
				} else {
					await supabase
						.from('profiles')
						.insert({ id: user.data.user.id, display_name: displayName })
						.then((profile) => {
							// console.log('created profile', profile);
							if (profile.error) {
								errorMessage = profile.error.message;
							} else {
								if (nextUrl) {
									goto(nextUrl);
								} else {
									goto(`${location.origin}/`); // go back to home back instead
								}
							}
						});
				}
			});
	};

	const handleSignIn = async () => {
		if (!email || !password) {
			errorMessage = 'Please enter your email and password to log in.'
			return;
		}
		supabase.auth
			.signInWithPassword({
				email,
				password
			})
			.then((authResponse) => {
				console.log(authResponse);
				if (authResponse.error) {
					errorMessage = authResponse.error.message;
				} else if (nextUrl) {
					goto(nextUrl);
				} else {
					goto(`${location.origin}/`); // go back to home back instead (was not invited)
				}
			});
	};

	onMount(() => {
		nextUrl = $page.url.searchParams.get('next');
	});
</script>

<div class="flex flex-grow h-full justify-center items-center">
	<form on:submit={() => {}} class="container mx-auto p-6 rounded-lg w-full max-w-md">
		<p class="text-2xl mb-5">
			Welcome! This site is completely free to use, but you must sign up first!
		</p>
		{#if errorMessage}
			<p
				id="error"
				class="text-red-600 text-center text-2xl font-bold mb-3"
				data-test-id="error-message"
			>
				{errorMessage}
			</p>
		{/if}
		<div class="mb-4">
			<label for="display-name" class="block mb-2">Display Name</label>
			<input
				id="display-name"
				name="display-name"
				bind:value={displayName}
				class="w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Display name"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block mb-2">Email</label>
			<input
				required
				id="email"
				name="email"
				bind:value={email}
				class="w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Email"
			/>
		</div>
		<div class="mb-4">
			<label for="password" class="block mb-2">Password</label>
			<input
				required
				id="password"
				type="password"
				name="password"
				bind:value={password}
				class="w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Password"
			/>
		</div>
		<div class="mb-4 flex justify-between">
			<!-- <button on:click={handleResetPassword} class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Reset Password</button> -->
			<!-- <button on:click="{handleSignOut}" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Sign out</button> -->
			<button
				class="w-1/3 px-4 py-2 bg-aqua text-white rounded-lg hover:bg-dim-aqua"
				on:click={handleSignUp}>Sign Up</button
			>
			<button
				on:click={handleSignIn}
				class="w-1/3 px-4 py-2 bg-green text-white rounded-lg hover:bg-dim-green" data-test-id="sign-in">Sign In</button
			>
		</div>
	</form>
</div>
