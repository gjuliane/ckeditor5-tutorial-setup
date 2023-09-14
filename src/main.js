import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
// Essentials is wraper for Clipboard, Enter, SelectAll, ShiftEnter, Typing, Undo
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';

import CKEditorInspector from '@ckeditor/ckeditor5-inspector';



const element = document.querySelector('#app');

const editor = await ClassicEditor.create(element, {
    plugins: [
        Essentials, // undo, redo
        Paragraph,
        RemoveFormat,
        Bold, Italic
    ],
    toolbar: [
        'undo',
        'redo',
        'removeFormat',
        'bold', 'italic'
    ]
} )
.then( editor => {
    CKEditorInspector.attach( editor );
} )
.catch( error => {
    console.error( error );
} );

window.editor = editor; // for debbuging
