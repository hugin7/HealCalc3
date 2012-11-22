$(document).ready(function() {
    $.when(Buff.findAll({}), Stat.findAll({}), Spell.findAll({}), Spec.findAll({})).then(function(buffsResp, statsResp, spellsResp, specsResp) {
        var buffs = buffsResp[0];
        var stats = statsResp[0];
        var spells = spellsResp[0];
        var specs = specsResp[0];
        // Need to add here the details for the specs. Lots of extra attributes to each.
        // DISC
        specs[0].mastery_factor = 2.5;
        specs[0].fsp = function() {
            return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon')) * 
                                (this.attr('buffs.buff_sp') ? 1.05 : 1)) *
                                (this.attr('inner_fire') ? 1.1 : 1)
            ));
        };
        specs[0].attr({'inner_fire': true, 'grace': true, 'archangel': false,
            'cascade_range_disc': 25, 'poh_targets_disc': 5, 'glyph_pom_disc': true,
            'glyph_renew_disc': false, 'glyph_penance': false}
        ).save();
        // HOLY
        specs[1].mastery_factor = 1.25;
        specs[1].fsp = function() {
            return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon')) * 
                                (this.attr('buffs.buff_sp') ? 1.05 : 1)) *
                                (this.attr('inner_fire') ? 1.1 : 1)
            ));
        };
        specs[1].attr({'serenity': true, 'sanctuary': true, 'inner_fire': true,
            'cascade_range_holy': 25, 'poh_targets_holy': 5,
            'glyph_coh': false, 'glyph_pom_holy': true, 'glyph_renew_holy': false}
        ).save();
        // PALLY
        specs[2].mastery_factor = 1.5;
        specs[2].fhaste_mul = function() {
            return (1.1* (this.attr('buffs.buff_haste') ? 1.05 : 1));
        }
        specs[2].attr({'daybreak': false, 'bol': false, 'glyph_lod': false}).save();
        // DRUID
        specs[3].mastery_factor = 1.25;
        specs[3].fint = function() {
            return (Math.round((this.attr('buffs.buff_stats') ? 1.1 : 1)*
                                this.attr('stats.bint') * (this.attr('hotw') ? 1.06 : 1)));
        };
        specs[3].attr({'incarnation': false, 'hotw': false, glyph_wild_growth: true, glyph_blooming: false, glyph_regrowth: true, glyph_rejuv: false}).save();
        // Lifebloom option for 1 or 3 stacks
        // SHAMAN
        specs[4].mastery_factor = 3;
        specs[4].fhaste_mul = function() {
            return ((this.attr('ancestral_swiftness') ? 1.05 : 1) *
                    (this.attr('buffs.buff_haste') ? 1.05 : 1));
        };
        specs[4].fsp = function() {
            return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon') + 2873) * 
                                (this.attr('buffs.buff_sp') ? 1.05 : 1)) 
            ));
        };
        specs[4].fmast_factor = function() {
            return((1+(this.attr('health_deficit')/100)*this.mastp));
        }
        specs[4].attr({'resurgence': true, 'tidal_waves': true, 'conductivity': false, 'echo_elements': false, 'ancestral_swiftness': false, 'glyph_riptide': false, 'health_deficit': 20, 'chain_heal_riptide': true}).save();
        // MONK
        //
        specs[5].mastery_factor = 0;
        specs[5].attr({'uplift_targets': 8, 'revival_targets': 10}).save();
        //
        $.when(new Stats('#stats', {stats: stats}),
        new Buffs('#buffs', {buffs: buffs}),
        new Specs('#specs', {specs: specs, stats: stats, buffs: buffs}), 
        new Spells('#spells', {spells: spells, specs: specs})).then(function() {
            new Sorter('#spellTable', {spells: spells});
            new Filtering('#filters', {table: $('#spellTable'), view: 'views/filtering.ejs'});
        });
    });
});