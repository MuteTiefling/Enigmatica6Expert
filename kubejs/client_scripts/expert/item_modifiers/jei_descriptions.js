events.listen('jei.information', (event) => {
    const recipes = [
        {
            items: ['tiab:timeinabottle'],
            description: ['Any Potion can be used for crafting this.']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });
});
