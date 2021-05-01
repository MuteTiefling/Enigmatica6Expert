events.listen('recipes', (event) => {
    const idRemovals = [
        'ars_nouveau:magic_clay',

        'minecraft:conduit',

        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:explosion_crafting/compressed_iron_block'
    ];

    const outputRemovals = ['ars_nouveau:arcane_stone', 'create:andesite_alloy', 'tiab:timeinabottle'];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
