define(['can', 'text!view/delta_view.ejs'], function(can, view) {
    can.view.ejs('deltaViewerView', view);
    var DeltaViewer = can.Control({
        init: function(element, options) {
            var self = this;
            options.delta = options.delta || 1000;
            var source = options.source;  // The source table where spells are looked up at
        },
        '{source} tr td mouseover': function(el, ev) {
            if (!$(el).data('colinfo')) { return; }
            var sp = $(el).closest('tr').data('spell') || $(el).closest('tr').data('rotation');
            var del = this.options.delta;
            this.options.measure = $(el).data('colinfo').name;
            var colfun = $(el).data('colinfo').fun;
            var base = sp[colfun]();
            this.options.base = base;
            var results = {};
            $.each(['int','sp','crit','haste','mast', 'spi'], function(_, stat) {
                var delta = {};
                delta[stat] = del;
                results[stat] = Math.roundn((sp[colfun](delta) - base)/base * 100, 2);
            });
            this.options.results = results;
            this.element.html(can.view('deltaViewerView', this.options));
        },
        'input change': function(el, ev) {
            this.options.delta = $(el).attr('value') * 1;
        },
    });
    return DeltaViewer;
});