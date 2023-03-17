import styled from "styled-components";

export const ProjectImage = styled.div`
	margin: 5vh 10vw;
	grid-column: 1 / 1;
  display: block;
  gap: 1rem;
  grid-template-columns: repeat( 1, 1fr );
  .blogImages{
    height : 80px;
  }
  .blogImages:hover{
    cursor:pointer;
  }
  img{
	margin : auto auto;
  }
  h1{
	margin : auto auto;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }
  .slider-toggle {
	display: none;
	visibility: none; }
  
  .slider-button,
  .slider-content,
  .slider {
	-webkit-transition: all 500ms ease-in-out;
	-moz-transition: all 500ms ease-in-out;
	-ms-transition: all 500ms ease-in-out;
	-o-transition: all 500ms ease-in-out;
	transition: all 500ms ease-in-out; }
  
  .slider-viewport {
	/* Uncomment the border-radius and border declaration to see the webkit bug in Chrome or Safari */
	/* border-radius: 50px;  border: 5px solid green; */
	-moz-border-radius: 50px;
	display: block;
	height: 100px;
	overflow: hidden;
	width: 300px;
	position: relative;
	margin: 30px auto 0;
	cursor: pointer; }
  
  .slider {
	height: 100%;
	position: relative;
	width: 200%; }
  
  .slider-button {
	-moz-border-radius: 50px;
	background-color: #f2f2f2;
	filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FFF2F2F2', endColorstr='#FFDDDDDD');
	background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IiIgcj0iODYiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmMmYyZjIiLz48c3RvcCBvZmZzZXQ9IjMyJSIgc3RvcC1jb2xvcj0iI2VlZWVlZSIvPjxzdG9wIG9mZnNldD0iNjElIiBzdG9wLWNvbG9yPSIjZTJlMmUyIi8+PHN0b3Agb2Zmc2V0PSI4NiUiIHN0b3AtY29sb3I9IiNkZGRkZGQiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=');
	background-size: 100%;
	background-image: -webkit-gradient(radial, 50%, 0, 50%, 86, color-stop(0%, #f2f2f2), color-stop(32%, #eeeeee), color-stop(61%, #e2e2e2), color-stop(86%, #dddddd));
	background-image: -webkit-radial-gradient(center, ellipse cover, #f2f2f2 0%, #eeeeee 32%, #e2e2e2 61%, #dddddd 86%);
	background-image: -moz-radial-gradient(center, ellipse cover, #f2f2f2 0%, #eeeeee 32%, #e2e2e2 61%, #dddddd 86%);
	background-image: -o-radial-gradient(center, ellipse cover, #f2f2f2 0%, #eeeeee 32%, #e2e2e2 61%, #dddddd 86%);
	background-image: -ms-radial-gradient(center, ellipse cover, #f2f2f2 0%, #eeeeee 32%, #e2e2e2 61%, #dddddd 86%);
	background-image: radial-gradient(center, ellipse cover, #f2f2f2 0%, #eeeeee 32%, #e2e2e2 61%, #dddddd 86%);
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-box-shadow: white 0 10px 8px inset, rgba(0, 0, 0, 0.4) 0 -5px 8px inset, rgba(0, 0, 0, 0.2) 0 0 5px;
	-moz-box-shadow: white 0 10px 8px inset, rgba(0, 0, 0, 0.4) 0 -5px 8px inset, rgba(0, 0, 0, 0.2) 0 0 5px;
	box-shadow: white 0 10px 8px inset, rgba(0, 0, 0, 0.4) 0 -5px 8px inset, rgba(0, 0, 0, 0.2) 0 0 5px;
	position: absolute;
	display: block;
	top: 0;
	height: 100px;
	width: 100px;
	cursor: pointer; }
  
  .slider-content {
	-webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px inset;
	-moz-box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px inset;
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px inset;
	background: rgba(157, 38, 29, 0.5);
	cursor: pointer;
	display: inline-block;
	float: left;
	height: 100%;
	width: 250px;
	font-size: 50px;
	font-weight: bold;
	text-transform: uppercase;
	top: 10px; }
	.slider-content span {
	  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
	  height: 100%;
	  line-height: 100px;
	  margin: 0 20px;
	  float: left; }
  
  .left {
	background-color: #59bdff;
	filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FF59BDFF', endColorstr='#FF44B7FF');
	background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzU5YmRmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ0YjdmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
	background-size: 100%;
	background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #59bdff), color-stop(100%, #44b7ff));
	background-image: -webkit-linear-gradient(top, #59bdff 0%, #44b7ff 100%);
	background-image: -moz-linear-gradient(top, #59bdff 0%, #44b7ff 100%);
	background-image: -o-linear-gradient(top, #59bdff 0%, #44b7ff 100%);
	background-image: -ms-linear-gradient(top, #59bdff 0%, #44b7ff 100%);
	background-image: linear-gradient(top, #59bdff 0%, #44b7ff 100%); }
  
  .right {
	background-color: #ff4f51;
	filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr='#FFFF4F51', endColorstr='#FFFF3A3A');
	background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmNGY1MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmM2EzYSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
	background-size: 100%;
	background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ff4f51), color-stop(100%, #ff3a3a));
	background-image: -webkit-linear-gradient(top, #ff4f51 0%, #ff3a3a 100%);
	background-image: -moz-linear-gradient(top, #ff4f51 0%, #ff3a3a 100%);
	background-image: -o-linear-gradient(top, #ff4f51 0%, #ff3a3a 100%);
	background-image: -ms-linear-gradient(top, #ff4f51 0%, #ff3a3a 100%);
	background-image: linear-gradient(top, #ff4f51 0%, #ff3a3a 100%); }
	.right span {
	  float: right; }
  
  .slider-toggle + .slider-viewport > .slider {
	left: 0; }
  
  .slider-toggle + .slider-viewport .slider-button {
	left: 200px; }
  
  .slider-toggle + .slider-viewport .slider-content {
	width: 250px; }
  
  .slider-toggle + .slider-viewport .left {
	margin-left: 0; }
  
  .slider-toggle:checked + .slider-viewport > .slider {
	left: -100%; }
  
  .slider-toggle:checked + .slider-viewport .slider-button {
	left: 300px; }
  
  .slider-toggle:checked + .slider-viewport .left {
	margin-left: 100px; }
  
  .look .slider-toggle {
	display: block;
	margin: 30px auto 0; }
  .look .slider-viewport {
	margin-top: 10px;
	border: 4px solid orange;
	overflow: visible; }
  .look .slider-content {
	opacity: .6; }

  svg {
    width: 60px;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1 / 1;
  }
`;
export const Page404 = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
margin: auto 20vw;

/*Functions*/
@mixin stars() {
	$total_stars: 30; //Number of Stars --> <li></li>
	@for $i from 1 through $total_stars {
		li:nth-child(#{$i}) {
			$size: (random(11) + 4) + px;
			position: absolute;
			left: (random(80) + 10%);
			top: (random(80) + 10%);
			width: $size;
			height: $size;
			animation: blink infinite (random(6) + 4s) (random(2) + 2s);
		}
	}
}

/*Vars*/
:root {
	--anim-duration: 3s;
	--scene-bg: #25272b;
	--scene-bg-rgb: 37 39 43;
	--cloud: #454951;
	--stars-color: #f1f1f1;
	--moon-color: #fff5dd;
	--moon-size: clamp(50px, 10vw, 100px);
	--ghost-color: #eef0ff;
	--ghost-shadow: #a6a8b2;
	--ghost-details: #3b4351;
	--ghost-size: 35%;
}
*,
*:before,
*:after {
	box-sizing: border-box;
}

body {
	min-height: 100vh;
	font-family: "Bebas Neue", cursive;
	background: #f4f4f4;
}
section {
	display: flex;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	flex-direction: column;
	overflow: hidden;
	.animation {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		flex-direction: row;
	}
	.not-found {
		margin-top: 2rem;
		h4 {
			font-size: clamp(24px, 10vw, 72px);
			color: #898989;
		}
	}
}
h2 {
	font-family:Brush Script MT;
	font-weight: bold;
	font-size: clamp(320px, 60vw, 550px);
	color: rgb(var(--scene-bg-rgb));
	text-shadow: 30px 30px 60px rgb(var(--scene-bg-rgb) / 40%);
	margin: 0 2vw;
	line-height: 1;
	@media (max-width: 1024px) {
		display: none;
	}
}
.scene {
	background: var(--scene-bg);
	width: 60vw;
	height: 60vw;
	min-width: 320px;
	min-height: 320px;
	max-height: 500px;
	max-width: 500px;
	border-radius: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 50px 50px 100px 0 rgb(var(--scene-bg-rgb) / 50%);
	position: relative;
	flex-shrink: 0;
	.stars {
		display: flex;
		flex-wrap: nowrap;
		position: absolute;
		height: 100%;
		width: 100%;
		li {
			opacity: 0.8;
			&:before {
				content: "";
				background: linear-gradient(transparent, var(--stars-color), transparent);
				position: absolute;
				top: 50%;
				width: 10%;
				height: 100%;
				border-radius: 0 100%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			&:after {
				content: "";
				background: linear-gradient(
					90deg,
					transparent,
					var(--stars-color),
					transparent
				);
				position: absolute;
				top: 50%;
				height: 10%;
				width: 100%;
				border-radius: 0 100%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		@include stars();
	}
	.moon {
		position: absolute;
		z-index: 1;
		top: 70px;
		left: 90px;
		background: var(--scene-bg);
		border-radius: 100%;
		width: var(--moon-size);
		height: var(--moon-size);
		box-shadow: inset calc(var(--moon-size) / -5) calc(var(--moon-size) / -5) 0 0
			var(--moon-color);
	}
	.clouds {
		display: flex;
		flex-wrap: nowrap;
		position: absolute;
		animation: linear 10s infinite cloudsMove;
		li {
			width: clamp(80px, 5vw, 100px);
			border-radius: 20px;
			height: clamp(20px, 5vw, 30px);
			background: var(--cloud);
			position: relative;
			margin: 0 clamp(20px, 5vw, 60px);
			&:nth-child(even) {
				transform: translatey(5vw);
			}
			&:before {
				content: "";
				display: block;
				position: absolute;
				width: 40px;
				border-radius: 25px;
				height: 25px;
				top: -12px;
				left: 50%;
				transform: translatex(-50%);
				background: inherit;
			}
		}
	}
}
.ghost {
	background: transparent;
	max-width: 140px;
	width: var(--ghost-size);
	max-height: 230px;
	height: calc(var(--ghost-size) * 1.7);
	border-radius: 70px 70px 0 0;
	display: flex;
	flex-direction: column;
	transform: rotate(-15deg);
	animation: ghostMove var(--anim-duration) ease-in-out infinite;
	z-index: 2;

	&:before {
		content: "";
		position: absolute;
		height: calc(100% - 40px);
		width: 100%;
		background: var(--ghost-color);
		border-radius: 70px 70px 0 0;
		z-index: 3;
	}
	&__tooltip {
		transform-origin: bottom right;
		padding: 1rem 1.5rem;
		font-size: 3em;
		background: #ff8711;
		color: black;
		border-radius: 1.2rem;
		position: absolute;
		left: 0px;
		top: -40px;
		transform: translatex(-100%);
		animation: showTooltip var(--anim-duration) ease-in-out infinite;
		&:before {
			content: "";
			display: block;
			position: absolute;
			width: 15px;
			height: 15px;
			background: #ff8711;
			bottom: -15px;
			right: 30px;
			clip-path: polygon(0 0, 100% 100%, 100% 0);
		}
	}
	&__eyes {
		display: flex;
		justify-content: center;
		animation: turning var(--anim-duration) ease-in-out infinite;
		z-index: 3;
		.eye {
			margin: 20px;
			margin-top: 60px;
			background-color: var(--ghost-details);
			width: 20px;
			height: 20px;
			border-radius: 100%;
			position: relative;
			box-shadow: -10px 25px 3px 0 #ff9696;
			&:last-of-type {
				box-shadow: 10px 25px 3px 0 #ff9696;
			}
			&:before {
				content: "";
				position: absolute;
				width: 8px;
				height: 8px;
				display: block;
				border-radius: 100%;
				background: white;
				bottom: 0;
				left: 0;
			}
		}
	}
	&__mouth {
		display: flex;
		justify-content: center;
		width: 100%;
		animation: turning var(--anim-duration) ease-in-out infinite;
		z-index: 3;
		&:before {
			content: "";
			display: block;
			background: var(--ghost-details);
			width: 30px;
			height: 30px;
			border-radius: 100%;
			animation: openMouth var(--anim-duration) ease-in-out infinite;
		}
	}
	&__tail {
		background: transparent; // var(--scene-bg);
		width: 100%;
		//height: 40px;
		height: calc(var(--ghost-size) / 2);
		margin-top: auto;
		position: relative;
		overflow: hidden;
		margin-bottom: calc(var(--ghost-size) * 0.2);
		&:before {
			content: "";
			display: block;
			width: 200%;
			height: 800%;
			border-radius: 50%;
			background: var(--ghost-color);
			position: absolute;
			bottom: 0px;
			margin-left: -50%;
			animation: wave calc(var(--anim-duration) / 2) linear infinite;
			z-index: 1;
		}
		&:after {
			content: "";
			z-index: 0;
			display: block;
			width: 200%;
			height: 800%;
			border-radius: 50%;
			background: var(--ghost-shadow);
			position: absolute;
			bottom: 10px;
			margin-left: -50%;
		}
	}
}

/*Animations*/
@keyframes turning {
	0%,
	100% {
		transform: translateX(0%) rotateY(0deg);
	}
	50%,
	59.9% {
		transform: translateX(50%) rotateY(90deg);
	}
	60% {
		transform: translateX(-50%) rotateY(-90deg);
	}
}

@keyframes wave {
	to {
		transform: rotate(360deg);
	}
}
@keyframes blink {
	50% {
		opacity: 0;
		transform: scale(0.2) rotate(180deg);
	}
}

@keyframes ghostMove {
	0%,
	100% {
		transform: rotate(-20deg) translate(0px, 0px);
	}
	33% {
		transform: rotate(-35deg) translate(120px, 20px);
	}
	66% {
		transform: rotate(-40deg) translate(0px, 80px);
	}
}

@keyframes cloudsMove {
	to {
		transform: translatex(-33.3%);
	}
}
@keyframes openMouth {
	25%,
	75% {
		height: 20px;
		width: 50px;
		border-radius: 0 0 50% 50% / 0 0 100% 100%;
	}
}
@keyframes showTooltip {
	0%,
	100% {
		opacity: 1;
		transform: rotate(0deg) translatex(-100%);
	}
	20%,
	80% {
		opacity: 0;
		transform: rotate(-55deg) translatex(-100%);
	}
}

/*Dev*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap");
.dev {
	font-family: "Poppins", sans-serif;
	position: fixed;
	font-size: clamp(8px, 3vw, 14px);
	top: 1vw;
	left: 1vw;
	padding: 1em;
	color: #111;
	background-color: white;
	border-radius: 25px;
	cursor: pointer;
	z-index: 100;
	box-shadow: 10px 10px 25px 0 rgb(0 0 0 / 5%);
	a {
		text-decoration: none;
		font-weight: bold;
		color: #111;
		transition: ease all 0.3s;
		&:hover {
			color: #ef5350;
			text-decoration: underline;
		}
	}
	span {
		display: inline-block;
		transition: ease all 0.3s;
		color: #ef5350;
		&:hover {
			transform: scale(1.2);
		}
	}
}
`;
export const CardStyles = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

:root {
 --body-bg-color: #e5f4f9;
 --body-color-light: #8b939c;
 --body-font: "Roboto", sans-serif;
 --page-bg-color: #f2f5f7;
 --body-color: #3d4954;
 --border-color: #b8bec3;
 --placeholder: #ccd0d2;
}

* {
 outline: none;
 box-sizing: border-box;
}

img {
 max-width: 100%;
}

html {
 box-sizing: border-box;
 -webkit-font-smoothing: antialiased;
}

body {
background-color: #fff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='946' height='473' viewBox='0 0 1600 800'%3E%3Cpath fill='%23e436ff' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%232ee7ff' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
 font-family: var(--body-font);
 color: var(--body-color);
 font-weight: 400;
 margin: 0;
}

%display {
 display: flex;
 align-items: center;
}

.book-store {
 display: flex;
 flex-direction: column;
 max-width: 1400px;
 height: 100vh;
 background-color: var(--page-bg-color);
 margin: 0 auto;
 overflow: hidden;
 box-shadow: 0px 2px 50px 10px rgba(0, 0, 0, 0.21);
}

.header {
 @extend %display;
 height: 70px;
 width: 100%;
 background-color: #ffffff;
 padding: 0 30px;
 font-size: 14px;
 font-weight: 500;
 color: var(--body-color-light);
 justify-content: space-between;
 flex-shrink: 0;
}

.search-bar {
 position: relative;
 input {
  height: 100%;
  width: 100%;
  display: block;
  background-color: transparent;
  border: none;
  font-weight: 600;
  padding: 0 10px 0 40px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%238b939c' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3e%3ccircle cx='11' cy='11' r='8'/%3e%3cpath d='M21 21l-4.35-4.35'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 15px 50%;
  color: var(--body-color);
  font-family: var(--body-font);
  &::placeholder {
   color: var(--placeholder);
  }
 }
}

.browse {
 @extend %display;
 &-category {
  @extend %display;
  border-right: 1px solid var(--border-color);
  white-space: nowrap;
  svg {
   width: 16px;
   margin: 2px 10px 0 8px;
  }
 }
}

.header-title {
 font-size: 16px;
 font-weight: 400;
 margin-right: 120px;
 span {
  font-weight: 500;
  color: var(--body-color);
 }
}

.user-img {
 width: 28px;
 height: 28px;
 border-radius: 50%;
 margin-right: 15px;
}

.user-profile {
 position: relative;
 cursor: pointer;
 flex-shrink: 0;
 &:before {
  content: "";
  position: absolute;
  background-color: #f86d72;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 2px solid var(--theme-bg-color);
  right: 12px;
  top: -3px;
  border: 2px solid #fff;
 }
}

.profile {
 @extend %display;
 flex-shrink: 0;
 &-menu {
  @extend %display;
  border-left: 1px solid var(--border-color);
 }
 svg {
  width: 16px;
  margin: 0 8px 0 15px;
  flex-shrink: 0;
 }
}

.book-slide {
 width: 100%;
}

.book {
 background: #fff;
}

.book-cell {
 position: relative;
 display: flex;
 padding: 25px;
 width: 40%;
 height: 250px;
 margin-right: 1px;
 &:nth-child(1) {
  background-color: #fbadaf;
 }
 &:nth-child(2) {
  background-color: #a4e0eb;
 }
 &:nth-child(3) {
  background-color: #edb9d6;
 }
 &:nth-child(4) {
  background-color: #fdca95;
 }
 &:nth-child(5) {
  background-color: #cbb5e2;
 }
}

.flickity-page-dots {
 display: none;
}

.flickity-prev-next-button .arrow {
 fill: #d6d6d6;
}

.flickity-prev-next-button svg {
 left: 25%;
 top: 25%;
 width: 50%;
 height: 50%;
}

.flickity-prev-next-button {
 &.previous {
  left: 15px;
 }
 &.next {
  right: 15px;
 }
}

.flickity-viewport {
 overflow: visible;
}

.book-photo {
 width: 180px;
 flex-shrink: 0;
 bottom: -35px;
 left: 35px;
 border-radius: 2px;
 box-shadow: -2px 6px 19px 0px #7f818e;
 transition: .3s ease;
 &:hover {
  transform: scale(1.03);
 }
}

.book-img {
 flex-shrink: 0;
}

.book-title {
 text-overflow: ellipsis;
 white-space: nowrap;
 overflow: hidden;
}

.book-title {
 color: #ffffff;
 font-weight: 600;
}

.book-author {
 margin-top: 3px;
 font-size: 14px;
 text-overflow: ellipsis;
 white-space: nowrap;
 overflow: hidden;
}

.book-content {
 padding: 0 20px;
 color: #ffffff;
 overflow: hidden;
}

fieldset,
label {
 margin: 0;
 padding: 0;
 display: inline-block;
 vertical-align: middle;
}

h1 {
 font-size: 0.5em;
 margin: 10px;
}
.rating {
 border: none;
}

.rating > input {
 display: none;
}
.rating > label:before {
 margin-right: 5px;
 margin-top: 10px;
 font-size: 0.9em;
 font-family: FontAwesome;
 display: inline-block;
 content: "\f005";
}

.rating > label {
 color: #fff;
 float: right;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
 color: #d85d61;
}
.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
 color: #d85d61;
}

.blue > input:checked ~ label,
.blue:not(:checked) > label:hover,
.blue:not(:checked) > label:hover ~ label {
 color: #458997;
}
.blue > input:checked + label:hover,
.blue > input:checked ~ label:hover,
.blue > label:hover ~ input:checked ~ label,
.blue > input:checked ~ label:hover ~ label {
 color: #458997;
}

.purple > input:checked ~ label,
.purple:not(:checked) > label:hover,
.purple:not(:checked) > label:hover ~ label {
 color: #a76287;
}
.purple > input:checked + label:hover,
.purple > input:checked ~ label:hover,
.purple > label:hover ~ input:checked ~ label,
.purple > input:checked ~ label:hover ~ label {
 color: #a76287;
}

.yellow > input:checked ~ label,
.yellow:not(:checked) > label:hover,
.yellow:not(:checked) > label:hover ~ label {
 color: #ffad58;
}
.yellow > input:checked + label:hover,
.yellow > input:checked ~ label:hover,
.yellow > label:hover ~ input:checked ~ label,
.yellow > input:checked ~ label:hover ~ label {
 color: #ffad58;
}

.dark-purp > input:checked ~ label,
.dark-purp:not(:checked) > label:hover,
.dark-purp:not(:checked) > label:hover ~ label {
 color: #905587;
}
.dark-purp > input:checked + label:hover,
.dark-purp > input:checked ~ label:hover,
.dark-purp > label:hover ~ input:checked ~ label,
.dark-purp > input:checked ~ label:hover ~ label {
 color: #905587;
}

.book-voters {
 color: #fff;
 vertical-align: sub;
 font-size: 13px;
 margin-left: 7px;
 white-space: nowrap;
 margin-top: 7px;
}

.book-sum {
 margin-top: 20px;
 font-size: 14px;
 overflow: hidden;
 display: -webkit-box;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
}

.book-see {
 margin-top: 25px;
 text-align: center;
 background-color: #fff;
 color: #fbadaf;
 font-weight: 600;
 padding: 8px;
 font-size: 14px;
 width: 160px;
 border-radius: 20px;
 &:hover {
  color: #ff6e72;
 }
 &.book-blue {
  color: #a4e0eb;
  &:hover {
   color: #22cdec;
  }
 }
 &.book-pink {
  color: #edb9d6;
  &:hover {
   color: #ff6dbe;
  }
 }
 &.book-yellow {
  color: #fdca95;
  &:hover {
   color: #fb9124;
  }
 }
 &.book-purple {
  color: #cbb5e2;
  &:hover {
   color: #a764ec;
  }
 }
}

.main-wrapper {
 width: 100%;
 display: flex;
 flex-grow: 1;
 margin-top: 100px;
 overflow: hidden;
}

.books-of {
 width: 320px;
 display: flex;
 flex-direction: column;
 overflow-y: auto;
 overflow-x: hidden;
 flex-shrink: 0;
}

.popular-books {
 flex-grow: 1;
 padding: 0 30px 50px;
 overflow-y: auto;
}

.genre {
 font-weight: 500;
 font-size: 15px;
}

.main-menu {
 @extend %display;
 white-space: nowrap;
 padding-bottom: 15px;
 border-bottom: 1px solid #dcddde;
 position: sticky;
 top: 0;
 right: 0;
 background-color: var(--page-bg-color);
 z-index: 2;
}

.book-types {
 margin-left: auto;
 a {
  text-decoration: none;
  color: var(--body-color);
  font-size: 14px;
 }
}

.book-type + .book-type {
 margin-left: 20px;
}

.book-type {
 position: relative;
 transition: 0.2s;
 &.active,
 &:hover {
  -webkit-text-stroke: .3px;
  &:before {
   content: "";
   position: absolute;
   width: 28px;
   height: 2px;
   bottom: -17px;
   right: 15px;
   background-color: #67d4ea;
   box-shadow: 0px -1px 5px 0px #67d4ea;
  }
 }
 &:nth-child(2):before {
  right: 12px;
 }
 &:nth-child(3):before {
  right: 8px;
 }
 &:nth-child(4):before {
  right: 6px;
 }
 &:nth-child(5):before {
  right: 20px;
 }
}

.week {
 padding: 0 30px;
}

.author {
 @extend %display;
 & + & {
  margin-top: 20px;
 }
 &-name {
  font-size: 14px;
 }
 &:last-child {
  margin-bottom: 40px;
 }
}

.author-title {
 padding: 0 0 20px;
 font-weight: 500;
 font-size: 15px;
}

.author-img {
 border-radius: 50%;
 width: 30px;
 height: 30px;
 margin-right: 16px;
 object-fit: cover;
 object-position: center;
}

.year-book {
 @extend %display;
 &-img {
  width: 45px;
  margin-right: 16px;
 }
 &-name {
  margin-bottom: 15px;
  font-weight: 500;
 }
 &-author {
  font-size: 13px;
 }
 & + & {
  margin-top: 20px;
 }
}

.year-book-content {
 display: flex;
 flex-direction: column;
 font-size: 14px;
}

.overlay {
 position: sticky;
 bottom: 0;
 left: 0;
 width: 340px;
 flex-shrink: 0;
 background: linear-gradient(
  to bottom,
  rgba(255, 255, 255, 0) 0%,
  #f2f5f7 65%,
  #f2f5f7 100%
 );
 height: 60px;
 margin-left: -35px;
}

.book-cards {
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-column-gap: 40px;
 grid-row-gap: 40px;
 padding-top: 40px;
 position: relative;
}

.book-card {
 margin-top: 20px;
 background-color: #fff;
 height: 270px;
 box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.1);
 border-radius: 4px;
 display: flex;
 flex-direction: column;
 cursor: pointer;
 padding: 0 0 20px 20px;
 color: var(--body-color-light);
}

.book-card-img {
 width: 160px;
 margin-top: -35px;
 border-radius: 2px;
 box-shadow: 0px 1px 7px 2px #c7c9d3;
 border-bottom: 1px solid #dcddde;
 object-fit: cover;
 margin-bottom: 20px;
 transition: .3s ease;
 &:hover {
  transform: scale(1.04);
 }
}


.card-content {
 color: var(--body-color);
 padding: 30px;
 overflow: hidden;
 position: relative;
}

.book-name {
 font-weight: 500;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
}

.book-by {
 font-size: 13px;
 color: var(--body-color-light);
 margin-top: 4px;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
}

.book-rate > label {
 color: #cccccc;
}

.rate {
 display: inline-block;
 white-space: nowrap;
}

.book-rate > input:checked ~ label,
.book-rate:not(:checked) > label:hover,
.book-rate:not(:checked) > label:hover ~ label {
 color: #ff9700;
}
.book-rate > input:checked + label:hover,
.book-rate > input:checked ~ label:hover,
.book-rate > label:hover ~ input:checked ~ label,
.book-rate > input:checked ~ label:hover ~ label {
 color: #ff9700;
}

.card-vote {
 color: var(--body-color-light);
}

.card-sum {
 color: var(--body-color-light);
 font-size: 13px;
 line-height: 1.6em;
 -webkit-line-clamp: 4;
 margin-top: 15px;
}

.content-wrapper {
 display: flex;
 border-bottom: 1px solid #ebedef;
 position: relative;
 &:before {
  content: "";
  position: absolute;
  background-color: #8f98a9;
        background-color: #aaaebc;
    box-shadow: 0 -6px 0 0 #aaaebc, 0 6px 0 0 #aaaebc;
    width: 4px;
    height: 4px;
    border: 0;
    padding: 0;
    right: 12px;
    top: 17px;
    border-radius: 50%;
    margin-left: auto; 
 }
}

.like-profile {
 margin-top: 8px;
 & + & {
  margin-left: -5px;
 }
}

.like-img {
 border-radius: 50%;
 width: 28px;
 object-fit: cover;
 border: 2px solid #fff;
}

.like-name {
 font-size: 13px;
 margin-left: 15px;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 span {
  font-weight: 600;
 }
}

.likes {
 @extend %display;
}


@media (max-width: 1103px) {
 .book-cell {
  width: 60%;
 }
}

@media (max-width: 765px) {
 .book-cell {
  width: 80%;
 }
}

@media (max-width: 575px) {
 .book-cell {
  width: 100%;
 }
}

@media (max-width: 458px) {
 .book-photo {
  width: 180px;
 }
 .book-voters {
  display: none;
 }
}

@media (max-width: 420px) {
 .book-see {
  width: 120px;
  font-size: 13px;
 }
 .book-photo {
  width: 130px;
 }
 .main-wrapper {
  margin-top: 50px;
 }
}

@media (max-width: 360px) {
 .rating > label:before {
  font-size: 0.8em;
 }
}

@media (max-width: 1220px) {
 .card-vote {
  display: none;
 }
}

@media (max-width: 1085px) {
 .book-rate > label {
  font-size: .7em;
}
}

@media (max-width: 1045px) {
 .books-of {
  display: none;
}
}

@media (max-width: 725px) {
 .browse-category, .search-bar {
  display: none;
}
 .header-title {
  margin-right: auto;
 }
 .book-cards {
  grid-template-columns: 1fr;
 }
 .book-types {
  display: none;
 }
}

@media (max-width: 372px)  {
 .card-content {
  padding: 20px;
 }
}
 
`;
export const BlogStyles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
* {
  box-sizing: border-box;
}
body {
background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
min-height: 100vh;
font-family: 'Fira Sans', sans-serif;
  display: flex;
}

.blog-slider {
    width: 95%;
  position: relative;
    max-width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: 400px;
  transition: all .3s;
  
   
  @media screen and (max-width: 992px) {
    max-width: 680px;
        height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
    
    &.swiper-slide-active {
      .blog-slider__img {
        img {
          opacity: 1;
        transition-delay: .3s;
        }
      }
      .blog-slider__content {
        > * {
      
        opacity: 1;
        transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }

    }
      }
    }
    
  }
  
  &__img {
     // width: 40%;
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);
   
    overflow: hidden;
    
    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      border-radius: 20px;
    opacity: 0.8;
}
    
    img {
      width: 100%;
    height: 100%;
    object-fit: cover;
      display: block;
       opacity: 0;
      border-radius: 20px;
    transition: all .3s;
    }
    
    
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
    transform: translateY(-50%);
      width: 90%;
  }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
     @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
  }
  }
  
  &__content {
    // width: 60%;
    padding-right: 25px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
          margin-top: -80px;
    text-align: center;
    padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
      padding: 0
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all .4s;
      
      
    }
    
  }
  
  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  
  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }
  
  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
  
  &__button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
    
}
  &__pagination {
   position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px!important;
    text-align: center;
    left: auto!important;
    top: 50%;
    bottom: auto!important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
     transform: translateX(-50%);
          left: 50%!important;
      top: 205px;
    width: 100%!important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
     &.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
       @media screen and (max-width: 768px) {
         margin: 0 5px;
       }
}
    
    .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
      transition: all .3s;
      &-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
        
        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
}
}
    
  }
  
}
`;