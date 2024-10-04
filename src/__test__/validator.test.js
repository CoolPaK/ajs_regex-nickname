import Validator from "../js/validator";

test.each([
    ["Col-o666___s22o", true],
    ["Col -@o666___so", false],
    ["Col6666k", false],
    ["1Colpak", false],
    ["Colpak1", false],
    ["_Colpak", false],
    ["Colpak_", false],
    ["-Colpak", false],
    ["Colpak-", false],
])("testing working status of Validator class", (imported, expected) => {
    const validator = new Validator();
    expect(validator.validateUsername(imported)).toBe(expected);
});