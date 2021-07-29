import { Component, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';
import '@vaadin/vaadin-grid-pro'
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column'
import data from '../../data/people.json'

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
    return <div class="container">
      <vaadin-grid-pro ref={el => this.vaadinGrid = el}>
        <vaadin-grid-column path="name.first" header="First Name"></vaadin-grid-column>
        <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
         <vaadin-grid-pro-edit-column path="email" header="Email (edit)" width="150px">
          <template>[[item.email]]</template>
          <template class="editor">
            <input type="email" value="{{item.email::input}}" />
          </template>
        </vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="location.zip" header="Zip code (edit)" text-align="end">
          <template class="editor">
            <input type="number" value="{{item.location.zip::input}}" />
          </template>
        </vaadin-grid-pro-edit-column>
      </vaadin-grid-pro>
    </div>
  }
}
