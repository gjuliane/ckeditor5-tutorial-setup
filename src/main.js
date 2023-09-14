import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

const element = document.querySelector('#app');

const editor = await ClassicEditor.create(element, {
    plugins: [
        Essentials, // undo, redo
        Paragraph
    ],
    toolbar: [
        'undo',
        'redo'
    ]
});

window.editor = editor;