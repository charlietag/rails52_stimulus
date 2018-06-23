// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output", "name" ]

  // connect: Stimulus calls each time a controller is connected to the document
  //   -- https://stimulusjs.org/handbook/hello-stimulus
  connect() {
    //$('#myoutput').html('jQuery works!')
    $('[data-target="hello.output"]').html('jQuery works!')
    console.log('jQuery works!')

  }

  greet(event) {
    this.outputTarget.textContent = 'Hello, ' + this.nameTarget.value + event
    $('[data-target="hello.output"]').fadeOut( "slow" )
  }

  paste(event) {
    event.preventDefault()
    this.outputTarget.textContent = 'paste is not allowed! ' + event
    $('[data-target="hello.output"]').fadeIn( "slow" )
  }
}
