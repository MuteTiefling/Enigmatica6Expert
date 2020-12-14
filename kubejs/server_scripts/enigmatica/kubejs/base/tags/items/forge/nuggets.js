events.listen('item.tags', function (event) {
    //     event.get('forge:nuggets').add('create:zinc_nugget').add('create:brass_nugget');
    event
        .get('forge:nuggets')
        .add('immersiveengineering:nugget_aluminum')
        .add('immersiveengineering:nugget_lead')
        .add('immersiveengineering:nugget_silver')
        .add('immersiveengineering:nugget_nickel')
        .add('immersiveengineering:nugget_uranium')
        .add('immersiveengineering:nugget_constantan')
        .add('immersiveengineering:nugget_electrum');
    //     event.get('forge:nuggets').add('occultism:iesnium_nugget');


    event.get('forge:nuggets/gold_bronze').add('#forge:nuggets/gold').add('#forge:nuggets/bronze');
    event.get('forge:nuggets/gold_copper').add('#forge:nuggets/gold').add('#forge:nuggets/copper');
    event.get('forge:nuggets/gold_silver').add('#forge:nuggets/gold').add('#forge:nuggets/silver');

});
