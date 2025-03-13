Below is a shortened version of the README.md file:

---

# TUWEL Auto Registration

This Tampermonkey script streamlines the login process for TU Wien by automatically clicking the necessary buttons on the TUWEL and SAML login pages.

## Features

- Automatically clicks the TU Wien login button on TUWEL (Moodle), if you are not logged in already
- Clicks the login button on the SAML page (idp.zid....) after redirection.
- Doesn't use any resources once logged in. (Script only runs when you are on login.php explicitly)
- Adjust the script's polling frequency as needed (*pollingInterval*).

## Important

For seamless operation, **you must save your TU Wien login data in your browser's autofill**. Note that the actual password is entered on the SAML page, so it must be saved there.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Create a new user script in Tampermonkey and add the code from this repository.

## Disclaimer

Usage is at your own risk. This script is provided "as is" without any warranty, express or implied. The author is not liable for any issues that may arise.

## License

[MIT LICENSE](LICENSE).
