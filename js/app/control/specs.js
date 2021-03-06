define(['can', 'text!view/specs.ejs',
    'text!view/specsDisc.ejs', 'text!view/specsHoly.ejs', 'text!view/specsDruid.ejs',
    'text!view/specsPally.ejs', 'text!view/specsMonk.ejs', 'text!view/specsShaman.ejs'
], function(can, view, 
    specsDiscView, specsHolyView, specsDruidView, 
    specsPallyView, specsMonkView, specsShamanView
    ) {
    can.view.ejs('specsView', view);
    can.view.ejs('specsDiscView',   specsDiscView);
    can.view.ejs('specsHolyView',   specsHolyView);
    can.view.ejs('specsDruidView',  specsDruidView);
    can.view.ejs('specsPallyView',  specsPallyView);
    can.view.ejs('specsMonkView',   specsMonkView);
    can.view.ejs('specsShamanView', specsShamanView);
    var Specs = can.Control({
        init: function(element, options) {
            var self = this,
                specs = options.specs,
                buffs = options.buffs,
                stats = options.stats;
            specs.each(function(spec) {
                spec.attr('buffs', buffs);
                spec.attr('stats', stats);
            });
            specs.val_update();
            self.element.html(can.view('specsView', {specs: specs, buffs: buffs, stats: stats}));
            $('li', self.element).addClass('expand').children('a').click();
        },
        'select change': function(el, ev) {
           var spec = el.closest('div.spec').data('spec');
           spec.attr('inner_fire', spec.attr('inner_fire') ? false : true);
           this.options.specs.val_update();
        },
        'input change': function(el, ev) {
            var attr = el.attr('name'),
                val = (el.attr('type') == 'checkbox') ? (el.attr('checked') ? true : false) : el.attr('value');
            el.closest('div.spec').data('spec').attr(attr, val);
            this.options.specs.val_update();
        },
        '{buffs} change': function() { this.options.specs.val_update(); },
        '{stats} change': function() { this.options.specs.val_update(); }
    });
   return Specs;
});