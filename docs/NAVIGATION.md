# Global Navigation — Updated in Phase 11

The shared global layout owns exactly one header, main landmark and footer.

| Navigation label | Destination | Existing content |
| --- | --- | --- |
| Work | /#selected-work | Approved-only gallery and honest empty state |
| Services | /#services | Four service areas |
| About | /#about | Hephzibah biography |
| Contact | /#contact | Conversion section with email approval gate |

The brand wordmark routes to /, so Home is not duplicated as a menu item.
The primary header CTA switches to Start a project (/#contact) only when
a valid, explicitly approved public email has been configured; otherwise
it remains Explore work (/#selected-work).

The Contact link is valid even in the unconfigured state, because the
section transparently explains that the public inquiry channel is pending.
The contact form and direct email link are withheld until approval.

Mobile menu: focus moves inside on open, Escape restores focus, outside
click closes it, and resize to desktop closes the disclosure.
The skip link leads to #main-content. Actual browser/zoom/screen reader
QA is still required before launch.
