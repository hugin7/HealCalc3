define(['can'], function(can) {
    var SPELLS = [
        // DISC
        //
        {
            id: 0,
            code: 'HealDisc',
            name: 'Heal',
            specid: 1,
            base_ct: 2.5,
            base_mana: 5700,
            B: 10645,
            c: 1.024,
            img: 'spell_holy_heal',
            aoe: false,
            instant: false,
            item: 2050
        },
        // {
        //     id: 1,
        //     code: 'HealSSDisc',
        //     name: 'Heal Spirit Shell',
        //     specid: 1,
        //     base_ct: 2.5,
        //     base_mana: 5700,
        //     B: 10645,
        //     c: 1.024,
        //     img: 'ability_shaman_astralshift',
        //     aoe: false,
        //     instant: false,
        //     item: 2050
        // },
        {
            id: 2,
            code: 'GhealDisc',
            name: 'Greater Heal',
            specid: 1,
            base_ct: 2.5,
            base_mana: 17700,
            B: 22725.92,
            c: 2.19,
            img: 'spell_holy_greaterheal',
            aoe: false,
            instant: false,
            item: 2060
        },
        // {
        //     id: 3,
        //     code: 'GhealSSDisc',
        //     name: 'Greater Heal Spirit Shell',
        //     specid: 1,
        //     base_ct: 2.5,
        //     base_mana: 17700,
        //     B: 22725.92,
        //     c: 2.19,
        //     img: 'ability_shaman_astralshift',
        //     aoe: false,
        //     instant: false,
        //     item: 2060
        // },
        {
            id: 4,
            code: 'FhealDisc',
            name: 'Flash Heal',
            specid: 1,
            base_ct: 1.5,
            base_mana: 17700,
            B: 17044.549,
            c: 1.642,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061
        },
        // {
        //     id: 5,
        //     code: 'FhealSSDisc',
        //     name: 'Flash Heal Spirit Shell',
        //     specid: 1,
        //     base_ct: 1.5,
        //     base_mana: 17700,
        //     B: 17044.549,
        //     c: 1.642,
        //     img: 'ability_shaman_astralshift',
        //     aoe: false,
        //     instant: false,
        //     item: 2061
        // },
        {
            id: 6,
            code: 'BhealDisc',
            name: 'Binding Heal',
            specid: 1,
            base_ct: 1.5,
            base_mana: 16200,
            B: 12452.174,
            c: 1.124,
            img: 'spell_holy_bindingheal',
            targets: 2,
            aoe: false,
            instant: false,
            item: 32546
        },
        {
            id: 7,
            code: 'RenewDisc',
            name: 'Renew',
            specid: 1,
            base_ct: 1.5,
            base_mana: 7800,
            nticks: 4,
            time_tick: 3,
            Btick: 2690,
            ctick: 0.259,
            img: 'spell_holy_renew',
            aoe: false,
            instant: true,
            item: 139
        },
        {
            id: 8,
            code: 'CascadeDisc',
            name: 'Cascade',
            specid: 1,
            base_ct: 1.5,
            base_mana: 27000,
            targets: 10,
            B: 10108,
            c: 0.975,
            img: 'ability_priest_cascade',
            aoe: true,
            instant: true,
            item: 120785
        },
        {
            id: 9,
            code: 'PWSDisc',
            name: 'Power Word: Shield',
            specid: 1,
            base_ct: 1.5,
            base_mana: 18300 * 0.75,
            B: 19428,
            c: 1.871,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17
        },
        {
            id: 10,
            code: 'PoMDisc',
            name: 'Prayer of Mending',
            specid: 1,
            base_ct: 1.5,
            base_mana: 10500,
            targets: 6,
            B: 5919,
            c: 0.571,
            img: 'spell_holy_prayerofmendingtga',
            aoe: true,
            instant: true,
            item: 33076
        },
        {
            id: 11,
            code: 'PoHDisc',
            name: 'Prayer of Healing',
            specid: 1,
            base_ct: 2.5,
            base_mana: 13500,
            targets: 5,
            B: 8687,
            c: 0.8381,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596
        },
        // {
        //     id: 12,
        //     code: 'PoHSSDisc',
        //     name: 'Prayer of Healing Spirit Shell',
        //     specid: 1,
        //     base_ct: 2.5,
        //     base_mana: 13500,
        //     targets: 5,
        //     B: 8687,
        //     c: 0.8381,
        //     img: 'ability_shaman_astralshift',
        //     aoe: true,
        //     instant: false,
        //     item: 596
        // },
        {
            id: 13,
            code: 'HolyFireDisc',
            name: 'Holy Fire / Solace',
            specid: 1,
            base_ct: 1.5,
            base_mana: 5400,
            B: 1135.52,
            c: 1.11,
            Btick: 57,
            ctick: 0.0312,
            nticks: 7,
            time_tick: 1,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 14914
        },
        {
            id: 14,
            code: 'SmiteDisc',
            name: 'Smite',
            specid: 1,
            base_ct: 1.5,
            base_mana: 8100,
            B: 2361,
            c: 0.856,
            img: 'spell_holy_holysmite',
            aoe: false,
            instant: false,
            item: 585
        },
        {
            id: 15,
            code: 'PenanceDisc',
            name: 'Penance Damage',
            specid: 1,
            base_ct: 2,
            base_mana: 9300,
            B: 1000.5 * 1.2,
            c: 1.037 * 1.2,
            targets: 3,
            img: 'spell_holy_penance',
            aoe: false,
            instant: false,
            item: 47540
        },
        // There is also Penance meant for when used as a heal. It is item 71 at the end of the list
        
        //
        // HOLY
        //
        {
            id: 16,
            code: 'HealHoly',
            name: 'Heal',
            specid: 2,
            base_ct: 2.5,
            base_mana: 5700,
            B: 10645,
            c: 1.024,
            img: 'spell_holy_heal',
            aoe: false,
            instant: false,
            item: 2050
        },
        {
            id: 17,
            code: 'GhealHoly',
            name: 'Greater Heal',
            specid: 2,
            base_ct: 2.5,
            base_mana: 17700,
            B: 22725.92,
            c: 2.19,
            img: 'spell_holy_greaterheal',
            aoe: false,
            instant: false,
            item: 2060
        },
        {
            id: 18,
            code: 'FhealHoly',
            name: 'Flash Heal',
            specid: 2,
            base_ct: 1.5,
            base_mana: 17700,
            B: 17044.549,
            c: 1.642,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061
        },
        {
            id: 19,
            code: 'BhealHoly',
            name: 'Binding Heal',
            specid: 2,
            base_ct: 1.5,
            base_mana: 16200,
            B: 12452.174,
            c: 1.124,
            img: 'spell_holy_bindingheal',
            targets: 2,
            aoe: false,
            instant: false,
            item: 32546
        },
        {
            id: 20,
            code: 'RenewHoly',
            name: 'Renew',
            specid: 2,
            base_ct: 1.5,
            base_mana: 7800,
            nticks: 4,
            time_tick: 3,
            Btick: 2690,
            ctick: 0.259,
            img: 'spell_holy_renew',
            aoe: false,
            instant: true,
            item: 139
        },
        {
            id: 21,
            code: 'PWSHoly',
            name: 'Power Word: Shield',
            specid: 2,
            base_ct: 1.5,
            base_mana: 18300,
            B: 19428,
            c: 1.871,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17
        },
        {
            id: 22,
            code: 'PoMHoly',
            name: 'Prayer of Mending',
            specid: 2,
            base_ct: 1.5,
            base_mana: 10500,
            targets: 6,
            B: 5919,
            c: 0.571,
            img: 'spell_holy_prayerofmendingtga',
            aoe: true,
            instant: true,
            item: 33076
        },
        {
            id: 23,
            code: 'PoHHoly',
            name: 'Prayer of Healing',
            specid: 2,
            base_ct: 2.5,
            base_mana: 13500,
            targets: 5,
            B: 8687,
            c: 0.8381,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596
        },
        {
            id: 24,
            code: 'CascadeHoly',
            name: 'Cascade',
            specid: 2,
            base_ct: 1.5,
            base_mana: 27000,
            targets: 10,
            B: 10108,
            c: 0.975,
            img: 'ability_priest_cascade',
            aoe: true,
            instant: true,
            item: 120785
        },
        {
            id: 25,
            code: 'CoHHoly',
            name: 'Circle of Healing',
            specid: 2,
            base_ct: 1.5,
            base_mana: 9600,
            targets: 5,
            B: 4840.5,
            c: 0.467,
            img: 'spell_holy_circleofrenewal',
            aoe: true,
            instant: true,
            item: 34861
        },
        {
            id: 26,
            code: 'DHHoly',
            name: 'Divine Hymn',
            specid: 2,
            base_ct: 8,
            base_mana: 18900,
            targets: 5*(4+ 0.1*3),
            B: 7987,
            c: 1.542,
            img: 'spell_holy_circleofrenewal',
            aoe: true,
            instant: false,
            item: 64843
        },
        {
            id: 27,
            code: 'LWCastHoly',
            name: 'Lightwell Cast',
            specid: 2,
            base_ct: 1.5,
            base_mana: 16200,
            targets: 15,
            Btick: 5735,
            ctick: 0.553,
            nticks: 3,
            time_tick: 2,
            img: 'spell_holy_summonlightwell',
            aoe: true,
            instant: true,
            item: 724
        },
        // {
        //     code: 'LWHealHoly',
        //     name: 'Lightwell Heal',
        //     specid: 2,
        //     base_ct: 1.5,
        //     base_mana: 16200,
        //     targets: 3,
        //     B: 5735,
        //     c: 0.553,
        //     img: 'spell_holy_summonlightwell',
        //     aoe: false,
        //     instant: true,
        //     item: 2050
        // },
        {
            id: 28,
            code: 'HWSerenityHoly',
            name: 'Holy Word: Serenity',
            specid: 2,
            base_ct: 1.5,
            base_mana: 6000,
            targets: 1,
            B: 13442,
            c: 1.3,
            img: 'spell_holy_persuitofjustice',
            aoe: false,
            instant: true,
            item: 88684
        },
        {
            id: 29,
            code: 'HWSanctuaryHoly',
            name: 'Holy Word: Sanctuary',
            specid: 2,
            base_ct: 1.5,
            base_mana: 18900,
            targets: 6,
            Btick: 504,
            ctick: 0.583,
            nticks: 15,
            time_tick: 2,
            img: 'spell_holy_divineprovidence',
            aoe: true,
            instant: true,
            item: 88686
        },
        
        //
        // DRUID
        //
        {
            id: 30,
            code: 'HealingTouch',
            name: 'Healing Touch',
            specid: 4,
            base_ct: 2.5,
            base_mana: 17340,
            B: 20130,
            c: 1.86,
            img: 'spell_nature_healingtouch',
            aoe: false,
            instant: false,
            item: 5185
        },
        {
            id: 31,
            code: 'ForceOfNature',
            name: 'Force of Nature',
            specid: 4,
            base_ct: 1.5,
            base_mana: 0,
            Btick: 0.1*20130,
            ctick: 0.1*1.86,
            nticks: 6,
            time_tick: 2.5,
            duration: 15,
            targets: 3,
            img: 'ability_druid_forceofnature',
            aoe: true,
            instant: true,
            item: 106737
        },
        {
            id: 32,
            code: 'Nourish',
            name: 'Nourish',
            specid: 4,
            base_ct: 2.5,
            base_mana: 6120,
            B: 6649.5,
            c: 0.614,
            img: 'ability_druid_nourish',
            aoe: false,
            instant: false,
            item: 50464
        },
        {
            id: 33,
            code: 'Regrowth',
            name: 'Regrowth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 17820,
            B: 10383.5,
            c: 0.958,
            Btick: 787,
            ctick: 0.073,
            nticks: 3,
            time_tick: 2,
            img: 'spell_nature_resistnature',
            aoe: false,
            instant: false,
            item: 8936
        }, 
        {
            id: 34,
            code: 'Rejuv',
            name: 'Rejuvenation',
            specid: 4,
            base_ct: 1.5,
            base_mana: 8700, // was 9600 before 5.2
            Btick: 4234,
            ctick: 0.392,
            nticks: 4,
            time_tick: 3,
            img: 'spell_nature_rejuvenation',
            aoe: false,
            instant: true,
            item: 774
        },
        {
            id: 35,
            code: 'Lifebloom',
            name: 'Lifebloom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 3540,
            B: 8150,
            c: 0.752,
            Btick: 621,
            ctick: 0.057,
            nticks: 15,
            time_tick: 1,
            img: 'inv_misc_herb_felblossom',
            aoe: false,
            instant: true,
            item: 94447
        },
        {
            id: 36,
            code: 'WildGrowth',
            name: 'Wild Growth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 13740,
            Btick: 990,
            ctick: 0.092,
            nticks: 7,
            time_tick: 1,
            targets: 5,
            img: 'ability_druid_flourish',
            aoe: true,
            instant: true,
            item: 48438
        },
        {
            id: 37,
            code: 'Swiftmend',
            name: 'Swiftmend',
            specid: 4,
            base_ct: 1.5,
            base_mana: 6120,
            Btick: 13966,
            ctick: 1.29,
            nticks: 7,
            time_tick: 1,
            targets: 1,
            img: 'inv_relics_idolofrejuvenation',
            aoe: true,
            instant: true,
            item: 18562
        },
        {
            id: 38,
            code: 'Mushrooms',
            name: 'Wild Mushrooms',
            specid: 4,
            base_ct: 4.5,
            base_mana: 6120,
            B: 2233,
            c: 0.207,
            targets: 3*7,
            img: 'druid_ability_wildmushroom_b',
            aoe: true,
            instant: true,
            item: 102792
        },
        {
            id: 39,
            code: 'Tranquility',
            name: 'Tranquility',
            specid: 4,
            base_ct: 8,
            base_mana: 16260,
            B: 9037,
            c: 0.835,
            Btick: 1542,
            ctick: 0.142,
            nticks: 4,
            time_tick: 2,
            targets: 5,
            img: 'spell_nature_tranquility',
            aoe: true,
            instant: false,
            item: 740
        },
        
        //
        // PALLY
        //
        {
            id: 40,
            code: 'HolyLight',
            name: 'Holy Light',
            specid: 3,
            base_ct: 2.5,
            base_mana: 7560,
            B: 8868.5,
            c: 0.785,
            img: 'spell_holy_holybolt',
            aoe: false,
            instant: false,
            item: 635
        },
        {
            id: 41,
            code: 'DivineLight',
            name: 'Divine Light',
            specid: 3,
            base_ct: 2.5,
            base_mana: 21600,
            B: 16817.5,
            c: 1.49,
            img: 'spell_holy_surgeoflight',
            aoe: false,
            instant: false,
            item: 82326
        },
        {
            id: 42,
            code: 'FlashLight',
            name: 'Flash of Light',
            specid: 3,
            base_ct: 1.5,
            base_mana: 22680,
            B: 12606.5,
            c: 1.12,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 19750
        },
        {
            id: 43,
            code: 'HolyRadiance',
            name: 'Holy Radiance',
            specid: 3,
            base_ct: 2.5,
            base_mana: 21600,
            B: 5664,
            c: 0.675,
            targets: 1+6*0.5,
            img: 'spell_paladin_divinecircle',
            aoe: true,
            instant: false,
            item: 82327
        },
        {
            id: 44,
            code: 'HolyShock',
            name: 'Holy Shock',
            specid: 3,
            base_ct: 1.5,
            base_mana: 9600,
            B: 9389,
            c: 0.833,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 20473
        },
        {
            id: 45,
            code: 'WoG',
            name: 'Word of Glory',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: (4803+5350)/2,
            c: 0.49,
            img: 'inv_helmet_96',
            aoe: false,
            instant: true,
            item: 130551
        },
        {
            id: 46,
            code: 'LoD',
            name: 'Light of Dawn',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: ( 1550+1725)/2,
            c: 0.144,
            targets: 6,
            img: 'spell_paladin_lightofdawn',
            aoe: true,
            instant: true,
            item: 85222
        },
        {
            id: 47,
            code: 'HolyPrism',
            name: 'Holy Prism Single',
            specid: 3,
            base_ct: 1.5,
            base_mana: 3240,
            B: (14523 + 17750)/2,
            c: 1.428,
            img: 'spell_paladin_holyprism',
            aoe: false,
            instant: true,
            item: 114165
        },
        {
            id: 48,
            code: 'HolyPrismAoE',
            name: 'Holy Prism AoE',
            specid: 3,
            base_ct: 1.5,
            base_mana: 3240,
            B: (9794 + 11969)/2,
            c: 0.962,
            targets: 5,
            img: 'spell_paladin_holyprism',
            aoe: true,
            instant: true,
            item: 114165
        },
        {
            id: 49,
            code: 'LightsHammer',
            name: 'Light\'s Hammer',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: (3268 + 3993)/2,
            c: 0.321,
            targets: 7*8,
            img: 'spell_paladin_lightshammer',
            aoe: true,
            instant: true,
            item: 114158
        },
        {
            id: 50,
            code: 'Execution',
            name: 'Execution Sentence',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: 12989.4,
            c: 5.936,
            img: 'spell_paladin_executionsentence',
            aoe: false,
            instant: true,
            item: 114157
        },
        {
            id: 51,
            code: 'EternalFlame',
            name: 'Eternal Flame',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: (5240+5837)/2,
            c: 0.49,
            Btick: 508,
            ctick: 0.0585,
            nticks: 10,
            time_tick: 3,
            img: 'inv_torch_thrown',
            aoe: false,
            instant: true,
            item: 114163
        },
        {
            id: 52,
            code: 'SacredShield',
            name: 'Sacred Shield',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            Btick: 30,
            ctick: 1.17,
            nticks: 5,
            time_tick: 6,
            img: 'ability_paladin_blessedmending',
            aoe: false,
            instant: true,
            item: 20925
        },
        
        //
        // SHAMAN
        //
        {
            id: 53,
            code: 'HW',
            name: 'Healing Wave',
            specid: 5,
            base_ct: 2.5,
            base_mana: 5940,
            B: (7790 + 8899)/2,
            c: 0.756, res_factor: 1,
            img: 'spell_nature_magicimmunity',
            aoe: false,
            instant: false,
            item: 331
        },
        {
            id: 54,
            code: 'GHW',
            name: 'Greater Healing Wave',
            specid: 5,
            base_ct: 2.5,
            base_mana: 16140,
            B: (14172 + 16190)/2,
            c: 1.377, res_factor: 1,
            img: 'spell_nature_healingwavelesser',
            aoe: false,
            instant: false,
            item: 77472
        },
        {
            id: 55,
            code: 'HSurge',
            name: 'Healing Surge',
            specid: 5,
            base_ct: 1.5,
            base_mana: 20580,
            B: (11687 + 13351)/2,
            c: 1.135, res_factor: 0.6,
            img: 'spell_nature_healingway',
            aoe: false,
            instant: false,
            item: 8004
        },
        {
            id: 56,
            code: 'ChainHeal',
            name: 'Chain Heal',
            specid: 5,
            base_ct: 2.5,
            base_mana: 13500,
            B: (5905 + 6745 )/2,
            c: 0.573,
            targets: 1+0.3*(1+0.3*(1+0.3)),
            res_factor: 0.333*4,
            img: 'spell_nature_healingway',
            aoe: true,
            instant: false,
            item: 1064
        },
        {
            id: 57,
            code: 'Riptide',
            name: 'Riptide',
            specid: 5,
            base_ct: 1.5,
            base_mana: 9600,
            B: 3735,
            c: 0.339,
            Btick: 1764,
            ctick: 0.16,
            nticks: 6,
            time_tick: 3,
            res_factor: 0.6,
            img: 'spell_nature_riptide',
            aoe: false,
            instant: true,
            item: 61295
        }, 
        {
            id: 58,
            code: 'UnleashLife',
            name: 'Unleash Life',
            specid: 5,
            base_ct: 1.5,
            base_mana: 4920,
            B: (3028 + 3280)/2,
            c: 0.286,
            res_factor: 0.6,
            img: 'spell_shaman_unleashweapon_life',
            aoe: false,
            instant: true,
            item: 73685
        },
        {
            id: 59,
            code: 'HST',
            name: 'Healing Stream Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 4100,
            Btick: 31,
            ctick: 0.0827+0.3124,
            nticks: 15/2,
            time_tick: 2,
            duration: 15,
            img: 'inv_spear_04',
            aoe: false,
            instant: true,
            item: 5394
        },
        {
            id: 60,
            code: 'HTT',
            name: 'Healing Tide Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 4800,
            Btick: 4932,
            ctick: 0.484,
            targets: 5,
            nticks: 11/2,
            time_tick: 2,
            duration: 11,
            img: 'ability_shaman_healingtide',
            aoe: true,
            instant: true,
            item: 108280
        },
        {
            id: 61,
            code: 'HealingRain',
            name: 'Healing Rain',
            specid: 5,
            base_ct: 2,
            base_mana: 25860,
            Btick:  (1983 + 2358)/2,
            ctick: 0.197,
            targets: 6,
            nticks: 10/2,
            time_tick: 2,
            duration: 10,
            img: 'spell_nature_giftofthewaterspirit',
            aoe: true,
            instant: false,
            item: 73920
        },
        {
            id: 62,
            code: 'Earthliving',
            name: 'Earthliving',
            specid: 5,
            base_ct: 1.5,
            base_mana: 0,
            Btick:  3648,
            ctick: 0.083,
            nticks: 4,
            time_tick: 3,
            img: 'spell_shaman_giftearthmother',
            aoe: false,
            instant: true,
            item: 51945
        },
        {
            id: 63,
            code: 'EarthShield',
            name: 'Earth Shield',
            specid: 5,
            base_ct: 1.5,
            base_mana: 11400,
            B: 2043,
            c: 0.13,
            targets: 9,
            img: 'spell_nature_skinofearth',
            aoe: false,
            instant: true,
            item: 974
        },
        
        //
        // MONK
        //
        {
            id: 64,
            code: 'SoothingMist',
            name: 'Soothing Mist',
            specid: 6,
            base_ct: 1,
            base_mana: 3000,
            B: (20552 + 23872)/2/8,
            c: 0.1792,
            targets: 2,
            img: 'ability_monk_soothingmists',
            aoe: false,
            instant: true,
            item: 125953
        },
        {
            id: 65,
            code: 'SurgingMist',
            name: 'Surging Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 24000,
            B: (15949 + 18535)/2 ,
            c: 1.8,
            img: 'ability_monk_surgingmist',
            aoe: false,
            instant: true,
            item: 116995
        },
        {
            id: 66,
            code: 'EnvelopingMist',
            name: 'Enveloping Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            Btick: (10128 + 11769)/2 ,
            ctick: 0.665,
            nticks: 6,
            time_tick: 1,
            img: 'spell_shaman_spiritlink',
            aoe: false,
            instant: true,
            item: 132120
        },
        {
            id: 67,
            code: 'RenewingMist',
            name: 'Renewing Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 13800,
            Btick: 3236,
            ctick: 0.16,
            nticks: 6,
            time_tick: 3,
            targets: 3,
            img: 'ability_monk_renewingmists',
            aoe: true,
            instant: true,
            item: 119611
        },
        {
            id: 68,
            code: 'LifeCocoon',
            name: 'Life Cocoon',
            specid: 6,
            base_ct: 1.5,
            base_mana: 13500,
            B: 39958,
            c: 5.5,
            img: 'ability_monk_chicocoon',
            aoe: false,
            instant: true,
            item: 116849
        },
        {
            id: 69,
            code: 'Uplift',
            name: 'Uplift',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            B: (7210 + 8379)/2,
            c: 0.68,
            img: 'ability_monk_uplift',
            targets: 8,
            aoe: true,
            instant: true,
            item: 116670
        },
        {
            id: 70,
            code: 'Revival',
            name: 'Revival',
            specid: 6,
            base_ct: 1.5,
            base_mana: 21000,
            B: 13684,
            c: 5,
            img: 'spell_shaman_blessingofeternals',
            targets: 10,
            aoe: true,
            instant: true,
            item: 115310
        },
        { 
            id: 71,
            code: 'PenanceHealDisc',
            name: 'Penance Heal',
            specid: 1,
            base_ct: 2,
            base_mana: 9300,
            B: 6605.5 * 1.2,
            c: 0.635 * 1.2,
            targets: 3,
            img: 'spell_holy_penance',
            aoe: false,
            instant: false,
            item: 47540
        },
    ];

     //
    var spec_specific = {
        fct: function(delta) {
            return( this.base_ct / (1+this.spec.fhastep(delta)) );
        },
        fct_hp_pally: function(delta) {
            return( 
                (
                    this.base_ct + 
                    (this.spec.cs_to_hp? 1.5 : 0) * (this.spec.one_hp ? 1 : 3)
                ) / 
                (1+this.spec.fhastep(delta))
            );
        },
        fmana: function(delta) {
            return(this.base_mana);
        },
        fmana_instant_priest: function(delta) {
            return( this.base_mana * (this.spec.attr('inner_fire') ? 1 : 0.85) )
        },
        fmana_shaman_resurgence: function(delta) {
            return(
                Math.roundn(
                    this.base_mana -
                    (
                        8849 * 0.01 *
                        this.spec.fcrit(delta) *
                        this.res_factor *
                        (this.spec.resurgence ? 1 : 0)
                    )
                )
            );
        },
        fmana_hp_pally: function(delta) {
            return(
                (this.spec.cs_to_hp? 9000 : 0) *
                (this.spec.one_hp ? 1 : 3)
            );
        },
        ftargets: function(delta) {
            return( this.targets || 1 );
        },
        fdirect: function(delta) {
            return(
                (
                    this.B + 
                    this.c * this.spec.fsp(delta)
                ) *
                this.ftargets(delta)
            );
        },
        ftick_time: function(delta) {
            return(
                Math.floorn(
                    this.time_tick / (1 + this.spec.fhastep(delta)) + 0.0005,
                3 )
            );
        },
        fnticks: function(delta) {
            return(
                Math.roundn( this.nticks * this.time_tick / this.ftick_time(delta) )
            );
        },
        fnticks_shaman_aoe: function(delta) {
            return(
                1 +
                Math.ceiln(
                    this.duration * 
                    (1 + this.spec.fhastep(delta)) / 
                    this.time_tick
                )
            );
        },
        fhot: function(delta) {
            return(
                (this.Btick + this.ctick * this.spec.fsp(delta)) *
                this.ftargets(delta) *
                this.fnticks(delta)
            );
        },
        fbase: function(delta) {
            return( this.nticks ? this.fhot(delta) : this.fdirect(delta) );
        },
        fbase_disc: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.grace ? 1.3 : 1) *
                (this.spec.archangel ? 1.25 : 1)
            );
        },
        fbase_disc_no_archangel: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.grace ? 1.3 : 1)
            );
        },
        fbase_druid: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.1   // Buff from 5.2
            );
        },
        fbase_holy_sth: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.serenity ? 1.25 : 1)
            );
        },
        fbase_holy_aoe: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.sanctuary ? 1.25 : 1)
            );
        },
        fbase_pally: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.05 *
                1.25
            );
        },
        fbase_pally_hp: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.05 *
                1.25 *
                (this.spec.one_hp ? 1 : 3)
            );
        },
        fbase_shaman: function(delta) {
            return(
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.25
            );
        },
        fheal: function(delta) {
            // The average heal amount, including crits and mastery.
            return(
                this.fbase(delta) *
                (
                    1 +
                        (
                            -1 +
                            2 * (this.spec.critmeta ? 1.03 : 1)
                        ) *
                        this.spec.fcritp(delta)
                ) *
                ( 1 + 1 * this.spec.fmastp(delta) )
            );
        },
        fheal_pally: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 +
                        (
                            -1 +
                            2 * (this.spec.critmeta? 1.03 : 1)
                        ) * 
                        this.spec.fcritp(delta)
                ) *
                ( 
                    1 +
                        (this.spec.bol ? 0.5 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        },
        fheal_shaman: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 + 
                        (
                            -1 +
                                2 * 
                                (this.spec.critmeta? 1.03 : 1)
                        ) *
                        this.spec.fcritp(delta)
                ) *
                this.spec.fmast_factor(delta)
            );
        },
        fheal_shaman_aa: function(delta, crit) {
            return(
                (this.spec.earth_shield_buff ? 1.2 : 1) *
                this.fbase(delta) *
                this.spec.fmast_factor(delta) *
                (
                    1 + 
                    (this.spec.t15_4p_shaman ? 0.3 : 0) +
                    (
                        -1 +
                            2 *
                            (this.spec.critmeta? 1.03 : 1) *
                            1.3
                    ) *
                    (crit || this.spec.fcritp(delta))
                )
            );
        },
        fheal_disc: function(delta) {
            return(
                this.fbase(delta) *
                (1 + this.spec.fmastp(delta)) *
                (
                    1 +
                        (
                            -1 +
                                2 *
                                (this.spec.critmeta? 1.03 : 1) *
                                ( 1 + this.spec.fmastp(delta) )
                        ) *
                        this.spec.fcritp(delta)
                )
            );
        },
        fheal_disc_atonement: function(delta) {
            return(
                this.fbase(delta) *
                (1 + this.spec.fmastp(delta)) *
                (
                    1 +
                        (
                            -1 +
                                2 *
                                (this.spec.critmeta? 1.09 : 1) *
                                (this.spec.critmeta? 1.03 : 1) * 
                                 // For some reason atonement seems to triple-dip into the crit effect meta
                                (this.spec.critmeta? 1.03 : 1) *
                                ( 1 + this.spec.fmastp(delta) )
                        ) *
                        this.spec.fcritp(delta)
                )
            );
        },
        fheal_spirit_shell: function(delta) {
            return(
                this.fbase(delta) *
                ( 1 + this.spec.fmastp(delta) ) * 
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1+ 0.3 * this.spec.fcritp(delta))
            );
        },
        fheal_sth_holy: function(delta) {
            return(
                this.fbase(delta) *
                ( 1 +
                    (
                        -1 +
                        2 * (this.spec.critmeta? 1.03 : 0)
                    ) *
                    (
                        (this.spec.serenity ? 0.25 : 0) +
                        this.spec.fcritp(delta)
                    )
                ) *
                ( 1 + this.spec.fmastp(delta) )
            );
        },
        fheal_living_seed: function(delta) {
            return(
                this.fbase(delta) *
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    1 +
                    (
                        -1 +
                            2 *
                            (this.spec.critmeta? 1.03 : 1) *
                            1.3
                    ) *
                    this.spec.fcritp(delta)
                )
            );
        },
        fhps: function(delta) {
            return( this.fheal(delta) / this.fct(delta) );
        },
        fhpm: function(delta) {
            return( this.fheal(delta) / this.fmana(delta) );
        },
        fhpm_nomana: function(delta) {
            return( 0 );
        },
        fhpm_hp_pally_nomana: function(delta) {
            return(
                this.spec.cs_to_hp ? (this.fheal(delta) / this.fmana()) : 0
            );
        },
        fmps: function(delta) {
            return( this.fmana(delta) / this.fct(delta) );
        },
        val_update: function(delta) {
            can.Observe.startBatch();
            this.attr({
                'ct': Math.roundn(this.fct(), 2),
                'mana': Math.roundn(this.fmana()),
                'base_heal': Math.roundn(this.fbase()),
                'heal': Math.roundn(this.fheal()),
                'hps': Math.roundn(this.fhps()),
                'hpm': Math.roundn(this.fhpm(), 2),
                'mps': Math.roundn(this.fmps())
            });
            can.Observe.stopBatch();
        }
     };


    var len = SPELLS.length,
        spls = new can.Observe.List([]),
        i,
        spell;

    for (i=0; i< len; i++) {
        spell = new can.Observe(can.extend(SPELLS[i], spec_specific));
        // spell.id = i;
        spls.push(spell);
    }
    // Global update function
    spls.val_update = can.proxy(function(spec) {
        can.Observe.startBatch();
        this.each( function(spell) {
            // If no spec specified, update all spells
            if ( !spec || spell.specid == spec.id ) {
                 spell.val_update();
            }
        });
        can.Observe.stopBatch();
    }, spls);
    
    // Search for spell by code or id
    spls.find = function(code) {
        var _fun = ( typeof code === 'string' ) ? 
                    function(spell) { return( spell.code === code ) } :
                    function(spell) { return( spell.id === code ) },
            i = this.length;
        while (i--) {
            if ( _fun(this[i]) ) {
                return this[i]
            };
        };
        return false;
    };

    // Spell customization
    spls.each( function(sp) {
        sp.mask = (1 << sp.specid >> 1) |
                  (1 << (sp.aoe ? 6 : 7)) |
                  (1 << (sp.instant ? 8 : 9));  // Used for filtering
        if ( sp.specid == 1 ) {
            // General Disc spell setup
            sp.fbase = sp.fbase_disc;   // To account for Grace choice
            sp.fheal = sp.fheal_disc;   // To account for DA formula
        } else if ( sp.specid == 3 ) {
            // General Pally spell setup
            sp.fbase = sp.fbase_pally;
            sp.fheal = sp.fheal_pally;
        } else if ( sp.specid == 5 ) {
            // General Shaman spell setup
            sp.fheal = sp.fheal_shaman;
        } else if (sp.specid == 4) {
            // General Druid setup
            sp.fbase = sp.fbase_druid;
        }
    });
    
    // Individual Spell setups
    //
    //
    // DISC Spells setup
    spls.find('BhealDisc').attr({
        fmana: function(delta) {
            return(
                (this.spec.attr('glyph_binding_disc') ? 1.35 : 1) *
                this.base_mana
            );
        },
        ftargets: function(delta) {
            return(this.spec.attr('glyph_binding_disc') ? 3 : 2)
        }
    });

    spls.find('RenewDisc').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fnticks: function(delta) {
            return(
                Math.roundn(
                    (
                        this.nticks -
                        (this.spec.attr('glyph_renew_disc') ? 1 : 0)
                    ) *
                    this.time_tick /
                    this.ftick_time(delta)
                )
            );
        },
        fhot: function(delta) {
            return(
                (this.spec.attr('glyph_renew_disc') ? (1 + 1 / 3) : 1) *
                (this.Btick + this.ctick * this.spec.fsp(delta)) *
                this.ftargets(delta) *
                this.fnticks(delta)
            );
        }
    });
    
    spls.find('CascadeDisc').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        ftargets: function(delta) {
            return(
                this.spec.cascade_targets_disc *
                (
                    0.4 +
                    Math.min(this.spec.cascade_range_disc, 30) * 0.02
                )
            );
        }
    });
    
    spls.find('PWSDisc').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fbase: function(delta) {
            return(
                this.fdirect(delta) *
                (this.spec.attr('archangel') ? 1.25 : 1)
            );
        },
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                ( 1 + 2 * this.spec.fmastp(delta) ) *
                ( 1 + this.spec.fcritp(delta) )
            );
        },
    });
    
    spls.find('PoMDisc').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fdirect: function(delta) {
            return(
                ( this.B + this.c * this.spec.fsp(delta) ) *
                (
                    this.spec.attr('t15_2p_disc') ? 
                        1.1 * (1 + 1.1 * (1 + 1.1 * (1 + 1.1))) +  // The 2th through 5th heals
                        (this.spec.attr('glyph_pom_disc') ? 1.6 : (1 + Math.pow(1.1, 5)))
                    :
                        (this.spec.attr('glyph_pom_disc') ? 5.6 : 6)
                )
            );
        },
    });
    
    spls.find('PoHDisc').attr({
        // fheal: function(delta) { 
        //     var da = 0.5;
        //     return(
        //         this.fbase(delta) * 
        //         (
        //             1 + 
        //                 (
        //                     -1 +
        //                     2 * (this.spec.critmeta? 1.03 : 1)
        //                 ) *
        //                 this.spec.fcritp(delta)
        //         ) *
        //         ( 1 + da * ( 1 + this.spec.fmastp(delta)) )
        //     );
        // }, 
        ftargets: function(delta) {
            return( 1 * this.spec.poh_targets_disc );
        },
    });
    
    // spls.find('HealSSDisc').attr({
    //     fheal: function(delta) {
    //         return( this.fheal_spirit_shell(delta) );
    //     }
    // });
    
    spls.find('FhealDisc').attr({
        fmana: function(delta) {
            return(
                Math.roundn(
                    this.base_mana *
                    (this.spec.attr('t14_2p_disc') ? 0.8 : 1)
                )
            );
        },
    });
    
    // spls.find('FhealSSDisc').attr({
    //     fheal: function(delta) {
    //         return( this.fheal_spirit_shell(delta) );
    //     },
    //     fmana: function(delta) {
    //         return(
    //             Math.roundn(
    //                 this.base_mana *
    //                 (this.spec.attr('t14_2p_disc') ? 0.9 : 1)
    //             )
    //         );
    //     },
    // });
    
    // spls.find('GhealSSDisc').attr({
    //     fheal: function(delta) {
    //         return( this.fheal_spirit_shell(delta) );
    //     }
    // });
    
    // spls.find('PoHSSDisc').attr({
    //     fheal: function(delta) {
    //         return(
    //             this.fbase(delta) *
    //             ( 1 + this.spec.fcritp(delta) ) *
    //             ( 1 + this.spec.fmastp(delta) ) *
    //             1.3
    //         );
    //     },
    //     ftargets: function(delta) {
    //         return( 1 * this.spec.poh_targets_disc );
    //     },
    // });
    
    spls.find('HolyFireDisc').attr({
        fbase: function(delta) {
            return(
                (this.fhot(delta) + this.fdirect(delta)) *
                (this.spec.grace ? 1.3 : 1) *
                (this.spec.archangel ? 1.25 : 1) *
                ( 1 + this.spec.evang_stacks * 0.04 )
            ); 
        },
        fheal: this.fheal_disc_atonement,
        fmana: function(delta) {
            return(
                this.base_mana *
                ( 1 - this.spec.evang_stacks * 0.06 )
            );
        },
    });
    
    spls.find('SmiteDisc').attr({
        fbase: function(delta) {
            return(
                this.fdirect(delta) *
                (this.spec.grace ? 1.3 : 1) *
                (this.spec.archangel ? 1.25 : 1) *
                ( 1 + this.spec.evang_stacks * 0.04 ) *
                1.2
            ); 
        },
        fheal: this.fheal_disc_atonement,
        fmana: function(delta) {
            return(
                this.base_mana *
                ( 1 - this.spec.evang_stacks * 0.06 )
            );
        },
    });
    
    spls.find('PenanceDisc').attr({
        fbase: function(delta) {
            return(
                this.fdirect(delta) *
                (this.spec.grace ? 1.3 : 1) *
                (this.spec.archangel ? 1.25 : 1) *
                ( 1 + this.spec.evang_stacks * 0.04 )
            ); 
        },
        fheal: function(delta) {
            return(
                this.fheal_disc_atonement(delta) +
                (this.spec.attr('t15_4p_disc') ? 0.4 * 100000 : 0)
            );
        }, // This actually assumes penance is used as atonement
        fmana: function(delta) {
            return(
                this.base_mana *
                ( 1 - this.spec.evang_stacks * 0.06 )
            )
        },
    });

    spls.find('PenanceHealDisc').attr({
        fbase: function(delta) {
            return(
                this.fdirect(delta) *
                (this.spec.grace ? 1.3 : 1) *
                (this.spec.archangel ? 1.25 : 1) *
                ( 1 + this.spec.evang_stacks * 0.04 )
            ); 
        },
        fheal: function(delta) {
            return(
                this.fheal_disc(delta) +
                (this.spec.attr('t15_4p_disc') ? 0.4 * 100000 : 0)
            );
        }, 
        fmana: function(delta) {
            return(
                this.base_mana *
                ( 1 - this.spec.evang_stacks * 0.06 )
            )
        },
    });
    
    // END DISC Spells setup
    
    
    // HOLY Spells setup
    $.each(['HealHoly', 'FhealHoly', 'GhealHoly', 'BhealHoly'], function(i, spname) {
        spls.find(spname).attr({
            fbase: function(delta) {
                return( this.fbase_holy_sth(delta) );
            },
            fheal: function(delta) {
                return( this.fheal_sth_holy(delta) );
            }
        });
    });
    
    spls.find('BhealHoly').attr({
        fmana: function(delta) {
            return(
                (this.spec.attr('glyph_binding_holy') ? 1.35 : 1) *
                this.base_mana
            );
        },
        ftargets: function(delta) {
            return(this.spec.attr('glyph_binding_holy') ? 3 : 2)
        }
    });
    
    spls.find('FhealHoly').attr({
        fmana: function(delta) {
            return(
                Math.roundn(
                    this.base_mana *
                    (this.spec.attr('t14_2p_holy') ? 0.9 : 1)
                )
            )
        }
    });
    
    $.each(['PoHHoly', 'DHHoly', 'CoHHoly', 'PoMHoly', 'HWSanctuaryHoly'], function(i, spname) {
        spls.find(spname).attr({
            fbase: function(delta) {
                return( this.fbase_holy_aoe(delta) );
            },
        });
    });
    
    spls.find('HWSerenityHoly').attr({
        fbase: function(delta) {
            return( this.fbase_holy_sth(delta) );
        },
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
    });
    
    spls.find('CascadeHoly').attr({
        ftargets: function(delta) {
            return(
                this.spec.cascade_targets_holy *
                (
                    0.4 +
                    Math.min( this.spec.cascade_range_holy, 30 ) * 0.02
                )
            );
        }
    });
    
    spls.find('CoHHoly').attr({
       fheal: function(delta) {
           return(
               this.fbase(delta) *
               (
                   1 +
                       (
                           -1 +
                           2 * (this.spec.critmeta ? 1.03 : 1)
                       ) *
                       this.spec.fcritp(delta)
               ) *
               ( 1 + 1 * this.spec.fmastp(delta) ) +
               (this.spec.attr('t15_4p_holy') ? 0.4 * 100000 : 0)
           );
           
       },
    });
    
    spls.find('PoHHoly').attr({
        ftargets: function(delta) {
            return( 1 * this.spec.poh_targets_holy );
        },
    });
    
    spls.find('PoMHoly').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fdirect: function(delta) {
            return(
                ( this.B + this.c * this.spec.fsp(delta) ) *
                (
                    this.spec.attr('t15_2p_holy') ? 
                        1.1 * (1 + 1.1 * (1 + 1.1 * (1 + 1.1))) +  // The 2th through 5th heals
                        (this.spec.attr('glyph_pom_holy') ? 1.6 : (1 + Math.pow(1.1, 5)))
                    :
                        (this.spec.attr('glyph_pom_holy') ? 5.6 : 6)
                )
            );
        }
    });
    
    spls.find('RenewHoly').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fnticks: function(delta) { 
            return(
                Math.roundn(
                    (
                        this.nticks -
                        (this.spec.attr('glyph_renew_holy') ? 1 : 0)
                    ) *
                    this.time_tick /
                    this.ftick_time(delta)
                )
            );
        },
        fhot: function(delta) {
            return(
                (this.spec.attr('glyph_renew_holy') ? (1+1/3) : 1) *
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                this.ftargets(delta) *
                this.fnticks(delta)
            );
        },
        fbase: function(delta) {
            return(
                this.fhot(delta) *
                1.15 *    // Renew Heals for 15%
                1.15 *    // Renew instantly heals target for 15%
                (this.spec.sanctuary ? 1.25 : 1)
            );
        },
        fct: function(delta) { return( 1 ); },
    });
    
    spls.find('PWSHoly').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fheal: function(delta) {
            return( this.fbase(delta) );
        },
    });
    
    spls.find('LWCastHoly').attr({
        fmana: function(delta) {
            return( this.fmana_instant_priest(delta) );
        },
        fheal: function(delta) {
            return( this.fbase(delta) );
        },
        fhot: function(delta) {   
            return(
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                this.spec.lw_charges *
                this.fnticks(delta)
            ); 
        },
    });
    //END HOLY Spells setup
    
    
    
    //DRUID Spells setup
    spls.find('Nourish').attr({
        fct: function(delta) {
            return(
                (
                    this.base_ct -
                    (this.spec.attr('glyph_rejuv') ? 0.5 : 0)
                ) /
                ( 1 + this.spec.fhastep(delta) )
            );
        },
        fbase: function(delta) {
            return(
                this.fdirect(delta) *
                1.2 *   // Buff from 3 Rejuvs
                1.1     // 5.2 buff
            );
        },
        fheal: function(delta) {
            return( this.fheal_living_seed(delta) );
        },
    });
    
    spls.find('HealingTouch').attr({
        fheal: function(delta) {
            return( this.fheal_living_seed(delta) );
        }
    });
    
    spls.find('Regrowth').attr({
        fbase: function(delta) {
            return(
                (
                    this.fdirect(delta) +
                    (this.spec.attr('glyph_regrowth') ? 0 : this.fhot(delta))
                ) * 1.1  // 5.2 Buff
            );
        },
        fheal: function(delta) { 
            var crit = (
                        this.spec.attr('glyph_regrowth') ? 
                        1 :
                        ( Math.min(this.spec.fcritp(delta) + 0.6, 1) )
                       );
            return(
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    this.fbase(delta) *
                    (
                        1 +
                            (
                                -1 +
                                    2 * crit *
                                    (this.spec.critmeta ? 1.03 : 1)
                            )
                    ) + // Living seed only looks at direct heal part
                    // But should it not care about the glyph of regrowth?
                    // FIXME?
                    this.fdirect(delta) *
                    (this.spec.critmeta ? 1.03 : 1) *
                    0.6 * crit
                )
            ); 
        },
    });
    
    spls.find('Rejuv').attr({
        fmana: function(delta) {
            return(
                Math.roundn(
                    this.base_mana *
                    (this.spec.attr('t14_2p_druid') ? 0.9 : 1)
                )
            );
        },
        fct: function(delta) { return( 1 ); },
        fnticks: function(delta) {
            var ntick = Math.roundn(
                    this.nticks * this.time_tick / this.ftick_time(delta)
                );
                // If t15 set bonus, we count the ticks including the extra healing from the bonus
                // FIXME: Does the initial heal get affected by that? Guess is no
            return(
                1 +
                (
                    this.spec.attr('t15_4p_druid')
                    ? 
                        (Math.pow(1.06, ntick) - 1) / (1.06 - 1)   // Sum of powers of 1.06
                    :
                        ntick
                )
            );
        }
    });
    
    spls.find('Lifebloom').attr({
        fnticks: function(delta) {
            return(
                Math.roundn(
                    (
                        this.nticks - 
                        (this.spec.attr('glyph_blooming') ? 5 : 0)
                    ) * 
                    this.time_tick /
                    this.ftick_time(delta)
                )
            );
        },
        fdirect: function(delta) {
            return(
                ( this.B + this.c * this.spec.fsp(delta)) *
                (this.spec.attr('glyph_blooming') ? 1.5 : 1)
            );
        },
        fbase: function(delta) {
            return(
                (
                    this.fdirect(delta) +
                    this.fhot(delta)
                ) * 1.1 // 5.2 Buff
            );
        }
    });
    
    spls.find('WildGrowth').attr({
        fhot: function(delta) {
            return(
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                (
                    5 +
                    (this.spec.attr('glyph_wild_growth') ? 1 : 0) +
                    (this.spec.attr('incarnation') ? 2 : 0)
                ) *
                this.fnticks(delta)
            );
        }
    });
    
    spls.find('Swiftmend').attr({
        fnticks: function(delta) {
            return(
                1 +
                    0.12 *
                    (this.spec.t15_2p_druid ? 4 : 3) *
                    Math.roundn(
                        this.nticks *
                        this.time_tick /
                        this.ftick_time(delta)
                    )
            );
        },
        fheal: function(delta) {
            return(
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    this.fbase(delta) *
                    (
                        1 + 
                            ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                            this.spec.fcritp(delta)
                    ) +
                    
                    ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                    0.6 *
                    (this.spec.critmeta? 1.03 : 1) *
                    this.spec.fcritp(delta)
                )
            );
        }
    });
    
    spls.find('Mushrooms').attr({
        fheal: function(delta) {
            return(
                ( 1 + this.spec.fmastp(delta) ) *
                this.fbase(delta) *
                (
                    1 + 
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                )
            );
        }
    });
    
    spls.find('Tranquility').attr({
        fheal: function(delta) {
            var nticks = this.fnticks(delta);
            return(
                (
                    this.fdirect(delta) * nticks + 
                        (
                            -3 + 
                            3 * nticks + 
                            3 * nticks
                        ) * 
                        ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                        this.ftargets(delta)
                ) * 
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    1 + 
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                )
            );
        }
    });
    
    spls.find('ForceOfNature').attr({
        fnticks: function(delta) {
            return( this.fnticks_shaman_aoe(delta) );
        },
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        }
    });
    //END DRUID Spells setup



    // PALLY Spells setup
    spls.find('HolyLight').attr({
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) * 
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 1 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                     +
                    this.spec.fmastp(delta)
                )
            );
        }
    });

    spls.find('HolyShock').attr({
        fheal: function(delta) { 
            var crit = 0.25 + this.spec.fcritp(delta);
            return(
                (
                    1 +
                        (this.spec.bol ? 0.5 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                     +
                    this.spec.fmastp(delta)
                ) *
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        crit
                ) *
                (
                    this.spec.attr('daybreak') ? 
                        (this.spec.attr('t15_2p_pally') ? 2.5 : 2)
                    :
                        1
                )
            ); 
        }
    });

    spls.find('WoG').attr({
        fct: function(delta) {
            return( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return( this.fbase_pally_hp(delta) );
        }
    });

    spls.find('HolyRadiance').attr({
        fmana: function(delta) {
            return(
                Math.roundn(
                    this.base_mana *
                    ( this.spec.attr('t14_2p_pally') ? 0.9 : 1 )
                )
            );
        },
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        }
    });
    
    spls.find('LoD').attr({
        fct: function(delta) {
            return( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return( this.fbase_pally_hp(delta) );
        },
        ftargets: function(delta) {
            return( this.targets - (this.spec.attr('glyph_lod') ? 2 : 0) )
        },
        fdirect: function(delta) {
            return(
                ( this.B + this.c * this.spec.fsp(delta) ) *
                this.ftargets(delta) *
                (this.spec.attr('glyph_lod') ? 1.25 : 1)
            );
        },
        fheal: function(delta) {
             return(
                 this.fbase(delta) *
                 (
                     1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                     +
                    this.spec.fmastp(delta)
                )
            );
        }
    });
    
    spls.find('LightsHammer').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        },
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                ( 1 +
                    ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) * 
                    this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                )
            );
        }
    });
    
    spls.find('Execution').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        } 
    });
    
    spls.find('EternalFlame').attr({
        fct: function(delta) {
            return( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return(
                (
                    this.fhot(delta) +
                    this.fdirect(delta)
                ) *
                1.05 *
                1.25 *
                (this.spec.one_hp ? 1 : 3)
            );
        }   
    });
    
    spls.find('SacredShield').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        },
        fbase: function(delta) {
            return( this.fhot(delta) );
        }
    });
    
    spls.find('HolyPrism').attr({
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        }
    });
    
    spls.find('HolyPrismAoE').attr({
        fheal: function(delta) {
            return(
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (this.spec.critmeta? 1.03 : 1) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1+
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        }
    });
    // END PALLY Spells setup

    
    
    // SHAMAN Spells setup
    spls.find('HW').attr({
        fmana: function(delta) {
            return( this.fmana_shaman_resurgence(delta) );
        },
        fheal: function(delta) {
            return( this.fheal_shaman_aa(delta) );
        },
        fct: function(delta) {
            return(
                this.base_ct /
                ( 1 + this.spec.fhastep(delta) ) *
                (
                    this.spec.attr('tidal_waves') ? 
                        0.7 + (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                    :
                        1
                )
            );
        }
    });
    
    spls.find('GHW').attr({
        fmana: function(delta) {
            return(
                Math.roundn(
                    (
                        this.base_mana *
                        (this.spec.attr('t14_2p_shaman') ? 0.9 : 1)
                    ) -
                    (
                        8849 *
                        this.spec.fcritp(delta) *
                        this.res_factor *
                        (this.spec.resurgence ? 1 : 0)
                    )
                )
            )
        },
        fheal: function(delta) {
            return( this.fheal_shaman_aa(delta) );
        },
        fct: function(delta) {
            return(
                this.base_ct /
                ( 1 + this.spec.fhastep(delta) ) *
                (
                    this.spec.attr('tidal_waves') ? 
                        0.7 + (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                    :
                        1
                )
                
            );
        }
    });
    
    spls.find('HSurge').attr({
        fmana: function(delta) {
            var crit = this.spec.fcritp(delta) + 
                       (
                           this.spec.attr('tidal_waves') ? 
                               0.3 + (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                           :
                               0
                       );
            return(
                Math.roundn(
                    this.base_mana - 
                    (
                        crit *
                        8849 *
                        0.6 *
                        (this.spec.attr('resurgence') ? 1 : 0)
                    )
                )
            );
        },
        fheal: function(delta) {
            return(
                this.fheal_shaman_aa(
                    delta,
                    this.spec.fcritp(delta) +
                    (this.spec.attr('tidal_waves') ? 0.3 : 0)
                )
            );
        }
    });
    
    spls.find('ChainHeal').attr({
        fmana: function(delta) {
            return( this.fmana_shaman_resurgence(delta) );
        },
        ftargets: function(delta) {
            return(
                this.targets +
                (this.spec.earth_shield_buff ? 0.2 : 0)
            );
        },
        fbase: function(delta) { 
            return(
                this.fdirect(delta) *
                1.25 *
                (this.spec.attr('chain_heal_riptide') ? 1.25 : 1)
            ); 
        }
    });

    spls.find('Riptide').attr({
        fmana: function(delta) {
            return( this.fmana_shaman_resurgence(delta) );
        },
        fdirect: function(delta) {
            return(
                ( this.B + this.c * this.spec.fsp(delta) ) *
                (this.spec.attr('glyph_riptide') ? 0.1 : 1)
            );
        },
        fbase: function(delta) {
            return(
                this.fhot(delta) +
                this.fdirect(delta)
            );
        },
        fheal: function(delta) {
            return( this.fheal_shaman_aa(delta) );
        }
    });

    spls.find('UnleashLife').attr({
        fmana: function(delta) {
            return( this.fmana_shaman_resurgence(delta) );
        },
        fheal: function(delta) {
            return( this.fheal_shaman_aa(delta) );
        }
    });
    
    spls.find('HST').attr({
        fnticks: function(delta) {
            return( this.fnticks_shaman_aoe(delta) );
        },
        ftargets: function(delta) {
            return( this.spec.t15_2p_shaman ? 1.25 : 1);
        }
    });
    
    spls.find('HTT').attr({
        fnticks: function(delta) {
            return( this.fnticks_shaman_aoe(delta) );
        }
    });
    spls.find('HealingRain').attr({
        fnticks: function(delta) {
            return(
                1 +
                    this.nticks *
                    this.time_tick / 
                    Math.floor(
                        this.time_tick /
                        (1+this.spec.fhastep(delta)) +
                    0.0005, 3)
            );
        }
    });
    
    spls.find('Earthliving').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        }
    });
    //  END SHAMAN Spells setup
    
    
    
    // MONK Spells setup
    spls.find('EnvelopingMist').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        }
    });
    
    spls.find('SurgingMist').attr({
        fmana: function(delta) {
            return(
                this.base_mana *
                (this.spec.attr('t14_2p_monk') ? 0.9 : 1)
            );
        }
    });
    
    spls.find('Uplift').attr({
        fhpm: function(delta) {
            return( this.fhpm_nomana(delta) );
        }
    });
    
    spls.find('RenewingMist').attr({
        ftargets: function(delta) {
            return(
                this.spec.attr('t15_2p_monk') ?
                    1 + 1.15 * ( 1 + 1.15 )
                :
                    3
            );
        }
    });
    
    return spls;
});