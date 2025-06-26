<!-- src/routes/auth/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';

	export let data: {
		supabase: any;
		origin?: string;
		next?: string;
		session?: any;
	};
	let { supabase, origin, next: nextUrl } = data;

	let email = '';
	let password = '';
	let errorMessage = '';
	let signUpSuccess = false;
	let isProcessing = false;

	const handleSignUp = async () => {
		isProcessing = true;
		const { data: authData, error } = await supabase.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: (nextUrl ? `${origin ?? ''}${nextUrl}` : `${origin ?? ''}/`) }
		});

		isProcessing = false;

		if (error) {
			errorMessage = error.message;
			return;
		}

		signUpSuccess = true;
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
		{#if errorMessage}
			<p
				id="error"
				class="text-red-600 text-center text-2xl font-bold mb-3"
				data-test-id="error-message"
			>
				{errorMessage}
			</p>
		{/if}
		{#if signUpSuccess}
			<p class="text-green-600 text-center text-2xl font-bold mb-3">
				Please check your email at {email}
			</p>
		{:else}
			<p class="text-2xl mb-5">
				Welcome! This site is completely free to use, but you must sign up first!
			</p>
			<fieldset disabled={signUpSuccess || isProcessing} style="border:0;padding:0;margin:0;">
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
						type="password"
						id="password"
						name="password"
						bind:value={password}
						class="w-full p-2 text-zinc-900 bg-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Password"
					/>
				</div>
				<div class="mb-4 flex justify-between">
					<button
						disabled={signUpSuccess || isProcessing}
						class="w-1/3 px-4 py-2 bg-aqua text-white rounded-lg hover:bg-dim-aqua"
						on:click|preventDefault={handleSignUp}>Sign Up</button
					>
					<button
						disabled={signUpSuccess || isProcessing}
						on:click|preventDefault={handleSignIn}
						class="w-1/3 px-4 py-2 bg-green text-white rounded-lg hover:bg-dim-green"
						data-test-id="sign-in">Sign In</button
					>
				</div>
			</fieldset>
		{/if}
	</form>
</div>
