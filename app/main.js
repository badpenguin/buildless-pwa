import {html} from 'htm';
import Router, {route} from 'preact-router';
import {signal} from '@preact/signals';
import {effect} from '@preact/signals-core';


// Initial state is loading
export const $loading = signal(true);
export const $counter = signal(0);

/*
 * Hide the preloader/splashscreen when the app is ready
 */
const dispose = effect(() => {
	if ($loading.value) {
		return;
	}
	console.debug('- app ready');
	// Hide Preload
	const preloadDiv = document.getElementById("preload");
	preloadDiv.style.display = "none";
	dispose();
});


// Simulate app initialization with a dummy delay
setTimeout(function(){
	console.log('- loading completed.');
	$loading.value = false;
}, 1000);


/**
 * during the loading phase does does nothing (i.e. keeping the preload/splashscreen visibile)
 */
export function MainApp() {
	console.debug('- render MainApp');
	return html`
		${$loading.value ? null : html`
			<${Router} >
				<${PageHome} path="/"/>
				<${PageNotFound} default/>
			<//>`}
	`;
}


/*
 * Dummy homepage
 */
const PageHome = function() {
	console.debug('- render PageHome');
	return html`
		<div class="page active ">
			<div class="container container--outer ">
				<h1>Homepage</h1>
				<p class="m-top-2">Simple counter with signal:</p>

				<div class="flex-row">
					<a class="btn" onclick="${() => {
						$counter.value--;
					}}">\u00AB</a>
					<span class="counter">${$counter}</span>
					<a class="btn" onclick="${() => {
						$counter.value++;
					}}">\u00BB</a>
				</div>

				<ul class="list m-top-4">
					<li>
						<button class="btn btn--primary" onclick="${() => {
							route('/')
						}}">Go to homepage
						</button>
					</li>
					<li>
						<button class="btn btn--secondary" onclick="${() => {
							route('/dummy/')
						}}">Go to not found
						</button>
					</li>
				</ul>
			</div>
		</div>`;
};


/*
 * Dummy 404
 */
const PageNotFound = function() {
	console.debug('- render PageNotFound');
	return html`
		<div class="page active page--fullscreen flex-col flex-center">
			<div class="container container--outer ">
				<h2 class="m-bottom-2">Ooops! \u2639<br/>
					Page not found</h2>
				<ul class="list m-top-2">
					<li><button class="btn btn--primary" onclick="${() => {route('/')}}">Go to homepage</button></li>
					<li>
						<a class="btn btn--secondary" href="javascript:history.back();">\u00ab Go Back</a>
					</li>
				</ul>
			</div>
		</div>`;
};

