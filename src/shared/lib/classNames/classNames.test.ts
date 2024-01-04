import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });
    test("with additional class", () => {
        const expected = "someClass class_one class_two";
        expect(classNames("someClass", {}, ["class_one", "class_two"])).toBe(expected);
    });
    test("with mods true", () => {
        const expected = "someClass class_one class_two hovered scrollable";
        expect(classNames("someClass", { hovered: true, scrollable: true }, ["class_one", "class_two"])).toBe(expected);
    });
    test("with mods false", () => {
        const expected = "someClass class_one class_two scrollable";
        expect(classNames("someClass", { hovered: false, scrollable: true }, ["class_one", "class_two"])).toBe(expected);
    });
    test("with mods undefined", () => {
        const expected = "someClass class_one class_two hovered";
        expect(classNames("someClass", { hovered: true, scrollable: undefined }, ["class_one", "class_two"])).toBe(expected);
    });
});
