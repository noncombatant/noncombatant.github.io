/*global define, tiger */
define([
	'jquery',
	'underscore',
	'singleton/Utils',
	// unbound
	'module/EssentialIconModule',
	'lib/amd-wrapped/jquery.lightbox-0.5',
	'templates/tiger/icons/essential/usage'
], function ($, _, utils) {
	'use strict';
	/**
	 * Prepares valid images for lightboxing in a specified container
	 * (Functionality originally taken from public/javascripts/view/items/PostTools.js:1369)
	 * @param {jQuery} $el jQuery selection in which to look for lightboxable images
	 */
	function lightBoxer($el) {
		var img = $el.find('.lightBoxWrapper .img-border img'),
			$lightbox = $el.find('.lightBox');
		_.each(img, function (i) {
			var $img = $(i);
			$img.attr('data-original-src', utils.imageUrl($img.data('chomp-id'), 'original', $img.data('format')));
		});
		// @TODO: Remove this hack (and update core) when SVG icons rule the world
		$lightbox.find('.icon-search-plus').replaceWith($.trim(tiger.icons.essential.zoomIn()));
		$lightbox.removeClass('hide').lightBox();
	}
	return lightBoxer;
});