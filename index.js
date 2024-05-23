// let registerBlockType = wp.blocks.registerBlockType;
import {registerBlockType} from "@wordpress/blocks"

registerBlockType("blocks-course/firstblock", {
    edit: function () {
        return <p className:"blocks-course-edit">Edit</p>;
    },
    save: function () {
        return <p className:"blocks-course-edit">Save</p>;
    },
})