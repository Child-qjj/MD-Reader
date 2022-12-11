<script setup lang="ts">
import { ref } from "vue";
import { genMarked } from "../marked/index";

const parserVal = ref(genMarked("&zwnj;"));
const onBlur = (e: Event) => {
	const targetValue = e.target as HTMLDivElement;
	// let targetValue = e
	// parserVal.value = genMarked(targetValue || "")
};
const onCurrentChanged = (e: Event) => {
	const targetValue = (e as InputEvent).data;
	console.log(targetValue);

	// targetValue = genMarked(targetValue+)
};
const handleEnter = (e: KeyboardEvent) => {
	// const targetValue = (e.target as HTMLDivElement)
	// parserVal.value = genMarked(targetValue.innerText)
};
</script>
<template>
	<div
		id="write"
		contenteditable="true"
		spellcheck="true"
		@blur="onBlur"
		@keyup.enter="handleEnter"
		v-html="parserVal"
	></div>
</template>
<style scoped lang="scss">
#write {
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 1000px;
	height: 800px;

	&:focus-visible {
		outline: 0;
	}

	.md-p,
	.md-heading {
		&:empty:after {
			content: "\200B";
		}
	}
}
</style>
