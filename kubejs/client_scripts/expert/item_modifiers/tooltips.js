onEvent('item.tooltip', (event) => {
    if (!expertMode) {
        return;
    }
    const recipes = [
        {
            items: ['tiab:timeinabottle'],
            description: ['Any Potion can be used for crafting this.']
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
