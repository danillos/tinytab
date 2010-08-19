/*
---
description: TinyTab - Tiny and simple tab handler for Mootools.

license: MIT-style

authors:
- Danillo César de O. Melo

requires:
- core/1.2.4: '*'

provides: TinyTab

...
*/
(function($) {
	this.TinyTab = new Class({

		initialize: function(tabs, contents, opt) {
			this.tabs = tabs;
			this.contents = contents;
			if(!opt) opt = {};
			this.css = opt.selectedClass || 'selected'; 

			this.select(this.tabs[0]);

			tabs.addEvent('click',function(e){
				this.select(e.target);
				e.stop();
			}.bind(this));
		},

		select: function(el) {
			this.tabs.removeClass(this.css);
			el.addClass(this.css);
			this.contents.setStyle('display','none');
			this.contents[this.tabs.indexOf(el)].setStyle('display','block');
		}
	});
})(document.id);