<template>
    <div id="prodCart">
        <div id="uppCart">
            <nav>
                <button> 
                    <img id="back" src="@/assets/images/back.png"> 
                </button>
                <p id="productName"> 
                    {{ products[$route.params.productId]['name'] }}
                </p>
            </nav>
            <hr class="divide">
        </div>
        <div id="mainCart">
            <div id="rightSide">
                <img id="prodImg" 
                src="@/assets/images/iphone8-shell.jpg" />
                <section class="blockAbout">
                    <article id="prodInfo">
                        <p> 
                            <br>Ett mobilskal med korthållare är snyggt och praktiskt på samma gång. 
                            I detta pris ingår både mobilskal och kortfickan. Dessa skal är magiskt fina!<br>
                            <br>Mixa och matcha vilka färger du vill, välj i rullistan.<br>
                            <br>Detaljer:<br>
                            <br>- 100% veganskt<br>
                            - Tryck i guld, silver eller rosé<br>
                            - Kortfickan ingår<br>
                            - Max fem bokstäver<br>
                        </p>
                    </article>
                </section>
            </div>
            <div id="leftSide">
                <hr class="solid">
                <section class="blockPrice">
                    <p id="price">
                        <!-- {{ product.price }} -->
                        300
                    </p>
                </section>
                <hr class="solid">

                <form class="blockSelectModel">
                    <label for="selectModel">Choose a model: </label>
                    <select id="selectModel" v-model="selectedModel">
                        <option v-for="model in models" v-bind:key="model.model">
                            {{ model.model }}
                        </option>
                    </select>
                </form>
                <form class="blockSelectColor">
                    <label for="selectColor">Choose a color: </label>
                    <select id="selectColor" v-model="selectedColor">
                        <option v-for="color in colors" v-bind:key="color.color">
                            {{ color.color }}
                        </option>
                    </select>
                </form>

                <section id="quantityAndBasket">
                    <input id="quantityProd" type="number" min="1" max="20" v-model="quantity"/>
                    <button id="basketBtn" @click="addToBasket">
                        <img class="btn-basket" src="@/assets/images/shopping-cart.png">
                    </button>
                </section>

                <hr class="solid">
                <section class="blockDelivery">
                    <p id="delInfo">
                        Leverans inom 1-4 arbetsdagar inom Sverige
                    </p>
                </section>
                <hr class="solid">
            </div>
        <!-- <checkout /> -->
        </div>
    </div>

</template>

<script>
import data from '../server/db.json'
export default {
    name: 'ProductCart',
    data: function() {
        return {
            // cart: [],
            products: data['products'],
            models: data['models'],
            colors: data['colors'],
            selectedModel: data['models'][0]['model'],
            selectedColor:  data['colors'][0]['color'],
            quantity: 1
        }
    },
    methods: {
        addToBasket() {
            const order = {
                model: this.selectedModel,
                color: this.selectedColor,
                quantity: this.quantity, 
            }
            const orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : []
            orders.push(order)
            localStorage.setItem("orders", JSON.stringify(orders))
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

#prodCart {
    width: 70rem;
    height: 60rem;
    display: flex;
    flex-direction: column;
    font-family: 'Abel', sans-serif;
    letter-spacing: 0.155em;
    color: #000000;
}
#uppCart {
    display: flex;
    flex-direction: column;
}
#back {
    width: 2rem;
    height: 3rem;
}
.divide {
    width: 70rem;
    border-top: 1rem solid #FA8585; 
}
#mainCart {
    display: flex;
    flex-direction: row;
}
#rightSide,
#leftSide {
    height: 60rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
}
#rightSide {
    background-color: #E5E5E5;
    width: 50rem;
    justify-content: center;
}
#leftSide {
    width: 40rem;
    justify-content: space-evenly;
}
#prodImg {
    width: 30rem;
    height: 30rem;
    margin: 2rem;
}

.solid {
    width: 30rem;
    border-top: 0.1rem solid;
}

/* .blockPrice {
    width: 15rem;
    height: 3rem;
    margin: 2rem;
} */

#selectModel,
#selectColor {
    width: 12rem;
    height: 4rem;
    border: 0.2rem solid #F0F0F0;
}
#quantityAndBasket {
    display: flex;
    flex-direction: row;
    justify-content: inherit;
}
#basketBtn {
    width: 9rem;
    height: 3rem;
    background-color: #FA8585;
    border: none;
}
.btn-basket {
    width: 2.5rem;
    height: 2.8rem;
}
#quantityProd {
    width: 8rem;
    height: 2rem;
    border: 0.2rem solid #F0F0F0;
    align-self: center;
}

#delInfo {
    font-size: 24px;
}
#price {
    color: #FA8585;
    font-size: 34px;
    line-height: 31px;
}
#prodInfo {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    margin: 2rem;
}

</style>