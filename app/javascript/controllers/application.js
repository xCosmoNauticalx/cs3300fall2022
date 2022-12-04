import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

export { application }
