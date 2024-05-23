<?php
/**
 * Plugin Name: First Block
 * Plugin URI: https://wpforpro.com
 * Description: My first block
 * Author: J.A.
 * Author URI: https://wpforpro.com
 */

function firstblock_init() {
    register_block_type_from_metadata(__DIR__);
}

add_action('init', 'firstblock_init');