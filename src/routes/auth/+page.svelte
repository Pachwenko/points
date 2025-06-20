<!-- src/routes/auth/+page.svelte -->
<script>
	import { goto } from '$app/navigation';

	// we now get origin & next from the server
	export let data;
	let { supabase, origin, next: nextUrl } = data;

	let displayName = '';
	let email = '';
	let password = '';
	let errorMessage = '';

	const handleSignUp = async () => {
		const { data: authData, error } = await supabase.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: nextUrl ? `${origin}${nextUrl}` : `${origin}/` }
		});

		if (error) {
			errorMessage = error.message;
			return;
		}

		// insert profile after signup
		const { error: profileError } = await supabase
			.from('profiles')
			.insert({ id: authData.user.id, display_name: displayName });

		if (profileError) {
			errorMessage = profileError.message;
			return;
		}

		goto(nextUrl ? nextUrl : '/');
	};

	const handleSignIn = async () => {
		if (!email || !password) {
			errorMessage = 'Please enter your email and password to log in.';
			return;
		}
		const { error: signInError } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (signInError) {
			errorMessage = signInError.message;
		} else {
			goto(nextUrl ? nextUrl : '/');
		}
	};
</script>

<div class="flex flex-grow h-full justify-center items-center">
	<form
		on:submit|preventDefault={handleSignIn}
		class="container mx-auto p-6 rounded-lg w-full max-w-md"
	>
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
			<button
				class="w-1/3 px-4 py-2 bg-aqua text-white rounded-lg hover:bg-dim-aqua"
				on:click|preventDefault={handleSignUp}>Sign Up</button
			>
			<button
				on:click|preventDefault={handleSignIn}
				class="w-1/3 px-4 py-2 bg-green text-white rounded-lg hover:bg-dim-green"
				data-test-id="sign-in">Sign In</button
			>
		</div>
	</form>
</div>
