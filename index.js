let registerBlockType = wp.blocks.registerBlockType;
let createElement = wp.element.createElement;

registerBlockType("blocks-course/firstblock", {
    edit: function () {
        return createElement("p", {
            className: "blocks-course-edit"
        }, "Edit");
    },
    save: function () {
        return createElement("p", null, "Save");
    },
})

