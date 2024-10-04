export default class Validator {
    validateUsername(userName) {
        return /^(?![_\d-])(?!.*\d{4})[a-zA-Z0-9_-]+(?<![_\d-])$/.test(userName);
    }
}