import React from 'react';
import './App.css';

function Generate_op({ state }) {
    let component;

    if (state === "Telangana") {
        component = <Telangana />;
    } else if (state === "Karnataka") {
        component = <Karnataka />;
    } else if (state === "Tamil Nadu") {
        component = <TamilNadu />;
    } else if (state === "Sikkim") {
        component = <Sikkim />;
    } else if (state === "Maharashtra") {
        component = <Maharashtra />;
    } else {
        component = null;
    }

    return (
        <div className="Output">
            {component}
        </div>
    );

}

export default Generate_op;

function Telangana() {
    return (
        <div className="dishes">
            <div className='box'>
                <img src="https://www.telanganapindivantalu.in/wp-content/uploads/2019/12/Sarvapindi.jpg" alt="Sarva Pindi" />
                <p>Sarva Pindi: A savory pancake that represents the state's culinary heritage</p>
            </div>

            <div className='box'>

                <img src="https://www.indianrecipeinfo.com/wp-content/uploads/2020/05/Pachi-Pulusu-Recipe.jpg" alt="Pachi Pulusu" />
                <p>Pachi Pulusu: A stew-like dish made with tamarind, onions, chilies, jaggery, and other spices</p>
            </div>
            <div className='box'>

                <img src="https://www.blendwithspices.com/wp-content/uploads/2014/01/chakinalu-recipe.jpg" alt="Sakinalu" />
                <p>Sakinalu: A crispy, deep-fried snack made with rice and sesame seeds</p>
            </div>
            <div className='box'>

                <img src="https://yummyindiankitchen.com/wp-content/uploads/2021/05/chicken-dum-biryani-hyderabadi-style.jpg" alt="Hyderabadi Biryani" />
                <p>Hyderabadi Biryani: A dish of marinated meat cooked in layers of rice in a handi</p>
            </div>
            <div className='box'>

                <img src="https://www.urbangroc.com/wp-content/uploads/2022/01/osmania-biscuit.jpg" alt="Osmania biscuits" />
                <p>Osmania biscuits: A sweet and salty biscuit</p>
            </div>
        </div>
    );
}

function Karnataka() {
    return (
        <div className="dishes">
            <div className='box'>
                <img src="https://www.holidify.com/images/cmsuploads/articles/419.jpg" alt="Mysore Pak" />
                <p>Mysore Pak: A melt-in-your-mouth fudge-like dessert made from ghee, besan, and sugar</p>
            </div>

            <div className='box'>
                <img src="https://www.holidify.com/images/cmsuploads/articles/422.jpg" alt="Bisi Bele Bath" />
                <p>Bisi Bele Bath: A wholesome dish of rice, lentils, veggies, and spices that originated in Mysore Palace</p>
            </div>

            <div className='box'>
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/maddur-vada-recipe.jpg" alt="Maddur Vada" />
                <p>Maddur Vada: A crispy snack made from semolina, rice flour, and maida, filled with onions and spices</p>
            </div>

            <div className='box'>
                <img src="https://www.holidify.com/images/cmsuploads/articles/414.jpg" alt="Neer Dosa" />
                <p>Neer Dosa: A popular vegan rice crepe made from uncooked rice batter and water</p>
            </div>

            <div className='box'>
                <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/ragi-mudde.jpg" alt="Ragi Mudde" />
                <p>Ragi Mudde: A traditional food made from ragi, a "wonder food" that's high in calcium, iron, and dietary fiber</p>
            </div>
        </div>
    );
}

function TamilNadu() {
    return (
        <div className="dishes">
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/pongal-res-766d9f558f36562-resized.jpg?w=576&dpr=2.7" alt="Pongal" />
                <p>Pongal: A traditional dish made by cooking rice in a pan with milk and water</p>
            </div>
            <div className='box'>
                <img src="https://www.sharmispassions.com/wp-content/uploads/2022/02/paniyaram8.webp" alt="Paniyaram" />
                <p>Paniyaram: A dumpling-shaped dish made from dosa batter</p>
            </div>
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Chicken-Chettinad-resized.jpg?w=576&dpr=2.7" alt="Chettinad Chicken Curry" />
                <p>Chettinad Chicken Curry: A dish from the Chettinad region of Tamil Nadu with a rich culinary history</p>
            </div>
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Poriyal-resized.jpg?w=576&dpr=2.7" alt="Poriyal" />
                <p>Poriyal: A lively vegetable stir-fry</p>
            </div>

            <div className='box'>
                <img src="https://www.padhuskitchen.com/wp-content/uploads/2011/02/vathakulambu.jpg" alt="Vatha Kulambu" />
                <p>Vatha Kulambu: A tangy gravy made by tempering veggies with onion, tomato, and cooking it with tamarind extract & spices</p>
            </div>
        </div>
    );
}

function Sikkim() {
    return (
        <div className="dishes">
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Momo.jpg?w=576&dpr=2.7" alt="Momos" />
                <p>Momos: Steamed buns with a variety of fillings, including ground meat, tofu, or cheese</p>
            </div>
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Thukpa-resized.jpg?w=576&dpr=2.7" alt="Thukpa" />
                <p>Thukpa: A hearty noodle soup that can be made with vegetables or meat</p>
            </div>
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Sinki-resized.jpg?w=576&dpr=2.7" alt="Sinki" />
                <p>Sinki: A traditional dish made from radish tap roots that are covered in vegetation and mud, then sun-dried</p>
            </div>
            <div className='box'>
                <img src="https://clubmahindra.gumlet.io/blog/images/Sel-Roti-resized.jpg?w=576&dpr=2.7" alt="Sel Roti" />
                <p>Sel Roti: Sikkim's version of donuts</p>
            </div>
            <div className='box'>
                <img src="https://teapond.jp/cdn/shop/files/22_sSK-50-7.jpg?v=11669497865888274400" alt="Temi Tea" />
                <p>Temi Tea: A must-have drink from Sikkim</p>
            </div>
        </div>
    );
}

function Maharashtra() {
    return (
        <div className="dishes">
            <div className='box'>
                <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b47eca22029676fc5b_Vada-Pav.jpeg" alt="Vada Pav" />
                <p>Vada Pav: A spicy potato patty between soft bread slices, similar to an Indian burger</p>
            </div>
            <div className='box'>
                <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b48f3b252aa5ebc148_Varan-Bhaat.jpeg" alt="Varan Bhat" />
                <p>Varan Bhat: A lentil soup made from pigeon pea lentils</p>
            </div>
            <div className='box'>
                <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b4970ee164d17da701_Sabudana-Khichdi.jpeg" alt="Sabudana Kichidi" />
                <p>Sabudana Kichidi: Tapioca pearls soaked and tempered with potatoes, spices, and grated coconut</p>
            </div>
            <div className='box'>
                <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2011/06/misal-pav.jpg" alt="Misal Pav" />
                <p>Misal Pav: Made with usal (sprouts curry) topped with onions, tomatoes, and farsan (fried savory mixture)</p>
            </div>
            <div className='box'>
                <img src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/65dfb0b4adf6729221751b0a_Modak.jpeg" alt="Modak" />
                <p>Modak: A sweet delicacy prepared in numerous styles</p>
            </div>
        </div>
    );
}
