import { Component, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';
import '@vaadin/vaadin-grid-pro';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-rich-text-editor';
import '@vaadin/vaadin-upload';
import data from '../../data/people.json';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  private vaadinGrid: AnyHTMLElement;

  componentDidRender() {
    this.vaadinGrid.items = data;
  }
  render() {
    return (
      <div class="container">
        <div class="grid-wrapper">
          <vaadin-grid-pro ref={el => (this.vaadinGrid = el)} multiSort='true'>
            <vaadin-grid-sort-column path="name.first" header="First Name"></vaadin-grid-sort-column>
            <vaadin-grid-filter-column path="name.last" header="Last name"></vaadin-grid-filter-column>
            <vaadin-grid-pro-edit-column path="email" header="Email (edit)" width="150px"></vaadin-grid-pro-edit-column>
            <vaadin-grid-pro-edit-column path="location.zip" header="Zip code (edit)" text-align="end"></vaadin-grid-pro-edit-column>
          </vaadin-grid-pro>
        </div>

        <div class="rte-wrapper">
          <vaadin-rich-text-editor class="rte-special"></vaadin-rich-text-editor>
        </div>

        <div class="upload-wrapper">
          <vaadin-upload></vaadin-upload>
        </div>
      </div>
    );
  }
}
