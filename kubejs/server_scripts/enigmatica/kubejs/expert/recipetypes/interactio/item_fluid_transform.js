events.listen('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                { item: 'eidolon:enchanted_ash', count: 2 },
                { tag: 'forge:clay', count: 1 },
                { tag: 'forge:dusts/mana', count: 1 },
                { tag: 'forge:dusts/lapis', count: 1 }
            ],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:magic_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 1.0
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: recipe.inputs,
            output: recipe.output,
            fluid: recipe.fluid,
            consume_fluid: recipe.consume_fluid
        });
    });
});
