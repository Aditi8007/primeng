import { Component, Input } from '@angular/core';

@Component({
    selector: 'methods-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>getQuill</td>
                        <td>-</td>
                        <td>Returns the underlying quill instance.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class MethodsDocComponent {
    @Input() id: string;

    @Input() title: string;
}
