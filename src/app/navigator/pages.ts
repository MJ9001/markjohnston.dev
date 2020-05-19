export class DropdownObject {
    constructor(
        public name: string,
        public route: string) {}
}

export const pages = [
    {
        dropdown: null,
        name: "Home",
        route: "/"
    },
    {
        dropdown: null,
        name: "Projects",
        route: "projects"
    },
    {
        dropdown: [new DropdownObject("Resume", "resume"), new DropdownObject("Hobbies", "hobbies")],
        name: "About me",
        route: "about",
    }
];