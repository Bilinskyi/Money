
ymaps.ready(init);
var myMap, 
myPlacemark;

function init(){ 
    myMap = new ymaps.Map ("map-canvas", {
        center: [55.781053, 37.698242],
        zoom: 17            }); 
    
    

    var myPlacemark = new ymaps.Placemark([55.781053, 37.698242], {
       hintContent: 'Большая Почтовая, д.36'
   }, 
   {
    preset: 'twirl#redDotIcon' 
});


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
        }
