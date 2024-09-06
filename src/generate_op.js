
function generate_op(state) {
    return (
        <div>
            if(state=="Telangana"){
                <Telangana></Telangana>
            }
            
            if(state=="Karnataka"){
                <Karnataka></Karnataka>
            }
            if(state=="TamilNadu"){
                <TamilNadu></TamilNadu>
            }
            if(state=="Sikkim"){
                <Sikkim></Sikkim>
            }
            if(state=="Maharashtra"){
                <Maharashtra></Maharashtra>
            }


        </div>
    );
}
export default generate_op;
function Telangana() {
    return (
        <div>
            <img src="https://www.telanganapindivantalu.in/wp-content/uploads/2019/12/Sarvapindi.jpg">Sarva Pindi: A savory pancake that represents the state's culinary heritage </img>
            <img src="https://www.indianrecipeinfo.com/wp-content/uploads/2020/05/Pachi-Pulusu-Recipe.jpg"> Pachi Pulusu: A stew-like dish made with tamarind, onions, chilies, jaggery, and other spices </img>
            <img src="https://www.blendwithspices.com/wp-content/uploads/2014/01/chakinalu-recipe.jpg"> Sakinalu: A crispy, deep-fried snack made with rice and sesame seeds </img>
            <img src="https://yummyindiankitchen.com/wp-content/uploads/2021/05/chicken-dum-biryani-hyderabadi-style.jpg"> Hyderabadi Biryani: A dish of marinated meat cooked in layers of rice in a handi </img>
            <img src="https://www.urbangroc.com/wp-content/uploads/2022/01/osmania-biscuit.jpg"> Osmania biscuits: A sweet and salty biscuit </img>
        </div>
    );
}

function Karnataka(){
return(
<div>

    <img src="https://www.holidify.com/images/cmsuploads/articles/419.jpg">Mysore Pak A melt-in-your-mouth fudge-like dessert made from ghee, besan, and sugar </img>
    <img src="https://www.holidify.com/images/cmsuploads/articles/422.jpg">Bisi bele bath  A wholesome dish of rice, lentils, veggies, and spices that originated in Mysore Palace </img>
    <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/maddur-vada-recipe.jpg">Maddur vada A crispy snack made from semolina, rice flour, and maida, and filled with onions and spices </img>
    <img src="https://www.holidify.com/images/cmsuploads/articles/414.jpg">Neer dosa A popular vegan rice crepe made from uncooked rice batter and water   </img>
    <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/ragi-mudde.jpg">Ragi mudde A traditional food made from ragi, a "wonder food" that's high in calcium, iron, and dietary fiber </img>
    
</div>
);
}

function TamilNadu(){
    return(
        <div>
            <img src="https://clubmahindra.gumlet.io/blog/images/pongal-res-766d9f558f36562-resized.jpg?w=576&dpr=2.7">Pongal A traditional dish made by cooking rice in a pan with milk and water.</img>
            <img src="https://www.sharmispassions.com/wp-content/uploads/2022/02/paniyaram8.webp">Paniyaram A dumpling-shaped dish made from dosa batter.</img>
            <img src="https://clubmahindra.gumlet.io/blog/images/Chicken-Chettinad-resized.jpg?w=576&dpr=2.7">Chettinad chicken curry A dish from the Chettinad region of Tamil Nadu with a rich culinary history</img>
            <img src="https://clubmahindra.gumlet.io/blog/images/Poriyal-resized.jpg?w=576&dpr=2.7">Poriyal It is a lively vegetable stir-fry</img>
            <img src="https://www.padhuskitchen.com/wp-content/uploads/2011/02/vathakulambu.jpg">Vatha Kulambu  A tangy gravy made by tempering veggies with onion, tomato and cooking it with tamarind extract & spices.</img>

        </div>
    );
    
}

function Sikkim(){
    
     
    return(
        <div>
            <img src="https://clubmahindra.gumlet.io/blog/images/Momo.jpg?w=576&dpr=2.7">Momos Steamed buns with a variety of fillings, including ground meat, tofu, or cheese.</img>
            <img src="https://clubmahindra.gumlet.io/blog/images/Thukpa-resized.jpg?w=576&dpr=2.7">Thukpa A hearty noodle soup that can be made with vegetables or meat.</img>
            <img src="https://clubmahindra.gumlet.io/blog/images/Sinki-resized.jpg?w=576&dpr=2.7"> Sinki A traditional dish made from radish tap roots that are covered in vegetation and mud, then sun-dried.</img>
            <img src="https://clubmahindra.gumlet.io/blog/images/Sel-Roti-resized.jpg?w=576&dpr=2.7">Sel Roti Sikkim's version of donuts</img>
            <img src="https://teapond.jp/cdn/shop/files/22_sSK-50-7.jpg?v=11669497865888274400"> Temi Tea A must-have drink from Sikkim</img>
            
        </div>
    );
   


}

function Maharashtra(){
    
 
    return(
        <div>
            <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b47eca22029676fc5b_Vada-Pav.jpeg">Vada Pav A spicy potato patty between soft bread slices, similar to an Indian burger    </img>
            <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b48f3b252aa5ebc148_Varan-Bhaat.jpeg">Varan Bhat A lentil soup made from pigeon pea lentils
            </img>
            <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b4970ee164d17da701_Sabudana-Khichdi.jpeg">Sabudana Kichidi  tapioca pearls are soaked and tempered with potatoes, spices and grated coconut.</img>
            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2011/06/misal-pav.jpg">Misal pav Made with usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture) </img>
            <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b4adf6729221751b0a_Modak.jpeg">Modak A sweet delicacy prepared in numerous styles
            </img>
            
        </div>
    );
}
