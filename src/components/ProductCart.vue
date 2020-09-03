<template>
    <div id="prodCart">
        <img id="prodImg" 
        src="" />
        
        <button id="basketBtn" @click="toCheckout">Lägga till</button>
        <button id="addBtn" />
        <button id="remBtn" />

        <section class="blockSelectModel">
            <select id="selectModel">
                <option value="0">model</option>
                <option value="1">iPhone 6</option>
                <option value="2">iPhone 7</option>
                <option value="3">iPhone 8</option>
                <option value="4">iPhone X</option>
                <option value="5">iPhone 11</option>

            </select>
        </section>

        <section class="blockSelectColor">
            <select id="selectColor">
                <option value="0">color</option>
                <option value="1">black</option>
                <option value="2">white</option>
                <option value="3">red</option>
                <option value="4">green</option>
                <option value="5">yellow</option>
            </select>
        </section>

        <section class="blockPrice">
            <p id="price">3000</p>
        </section>

        <section class="blockAbout">
            <p id="prodInfo">Ett mobilskal med korthållare är snyggt och praktiskt på samma gång. 
                I detta pris ingår både mobilskal och kortfickan. Dessa skal är magiskt fina!

                Mixa och matcha vilka färger du vill, välj i rullistan. 

                Detaljer: 

                - 100% veganskt
                - Tryck i guld, silver eller rosé
                - Kortfickan ingår
                - Max fem bokstäver</p>
        </section>

        <section class="blockDelivery">
            <p id="delInfo">Leverans inom 1-4 arbetsdagar inom Sverige</p>
        </section>
    <checkout />
    </div>
</template>

<script>
export default {
    name: 'ProductCart',
    methods: {
        toCheckout() {
            this.$router.push("/checkout");
        }
    }

}
</script>

<style>

</style>