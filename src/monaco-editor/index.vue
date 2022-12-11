<script setup lang="ts">
import { monaco } from "./exportMonaco";
import { reactive, ref, defineEmits, nextTick } from "vue";
const emit = defineEmits(["change", "delete"]);
const initStr = ref("# Hello World!");
let editor = reactive<monaco.editor.IStandaloneCodeEditor>(
	{} as monaco.editor.IStandaloneCodeEditor
);
const initEditor = () => {
	nextTick(() => {
		editor = monaco.editor.create(
			document.getElementById("container") as HTMLElement,
			{
				value: initStr.value,
				language: "markdown",
				automaticLayout: true,
				theme: "vs-dark"
			}
		);
		const currentModel = editor.getModel();
		currentModel?.onDidChangeContent(e => {
			emit("change", editor.getValue(), e.changes);
		});
	});
};
initEditor();
</script>
<template>
	<div id="container"></div>
</template>
<style scoped>
#container {
	width: 100%;
	height: 100%;
	text-align: left;
}
</style>
