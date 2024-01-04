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

	let nextUrl = '';

	// const handleResetPassword = async () => {
	//   await supabase.auth.resetPasswordForEmail(email, {
	//     redirectTo: `${location.origin}/profile`,  // TODO: make an update password route?
	//   })
	// }

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: nextUrl ? nextUrl : location.origin
			}
		}).then(async (user) => {
			console.log('created user', user);
			await supabase
				.from('profiles')
				.insert({ id: user.data.user.id, display_name: displayName })
				.then((profile) => {
					console.log('created profile', profile);
				});
		});
		if (nextUrl) {
			goto(nextUrl);
		} else {
			goto(`${location.origin}/`); // go back to home back instead
		}
	};

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (nextUrl) {
			goto(nextUrl);
		} else {
			goto(`${location.origin}/`); // go back to home back instead
		}
	};

	onMount(() => {
		nextUrl = $page.url.searchParams.get('next');
	});

</script>

<div class="flex flex-grow min-h-full justify-center items-center bg-gray-900">
	<form
		on:submit={handleSignUp}
		class="container mx-auto bg-gray-800 p-6 rounded-lg w-full max-w-md"
	>
		<p class="text-2xl text-gray-300">
			Welcome! This site is completely free to use, but you must sign up first!
		</p>
		<div class="mb-4">
			<label for="display-name" class="block text-gray-300 mb-2">Username</label>
			<input
				id="display-name"
				name="display-name"
				bind:value={displayName}
				class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Display name"
			/>
		</div>
		<div class="mb-4">
			<label for="email" class="block text-gray-300 mb-2">Email</label>
			<input
				id="email"
				name="email"
				bind:value={email}
				class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Email"
			/>
		</div>
		<div class="mb-4">
			<label for="password" class="block text-gray-300 mb-2">Password</label>
			<input
				id="password"
				type="password"
				name="password"
				bind:value={password}
				class="w-full p-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Password"
			/>
		</div>
		<div class="mb-4 flex justify-between">
			<!-- <button on:click={handleResetPassword} class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Reset Password</button> -->
			<!-- <button on:click="{handleSignOut}" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Sign out</button> -->
			<button class="w-1/3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
				>Sign up</button
			>
			<button
				on:click={handleSignIn}
				class="w-1/3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
				>Sign in</button
			>
		</div>
	</form>
</div>
