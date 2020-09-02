<template>
    <div id="prodCart">
        <img id="prodImg" 
        src="https://loremflickr.com/cache/resized/65535_49931829257_566d9ba824_c_640_480_nofilter.jpg" />
        
        <button id="basketBtn" @click="toCheckout">Lägga till</button>
        <button id="addBtn" />
        <button id="remBtn" />

        <section class="blockSelectModel">
            <select id="selectModel">
                <option value="0">model</option>
                <option value="1">iPhone 6</option>
                <option value="2">iPhone 6S Plus</option>
                <option value="3">iPhone 6S</option>
                <option value="4">iPhone 7 Plus</option>
                <option value="5">iPhone 7</option>
                <option value="6">iPhone 8 Plus</option>
                <option value="7">iPhone 8</option>
                <option value="8">iPhone X</option>
                <option value="9">iPhone XR</option>
                <option value="10">iPhone XS Max</option>
                <option value="11">iPhone XS</option>
                <option value="12">iPhone SE</option>
                <option value="13">iPhone 11</option>
                <option value="14">iPhone 11 Pro Max</option>
                <option value="15">iPhone 11 Pro</option>
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
                <option value="6">blue</option>
                <option value="7">brown</option>
                <option value="8">orange</option>
                <option value="9">pink</option>
                <option value="10">purple</option>
                <option value="11">grey</option>
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
            <p id="delInfo">Leverans inom 1- 4 arbetsdagar inom Sverige</p>
        </section>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>