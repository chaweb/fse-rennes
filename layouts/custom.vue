<template>
    <main>
        <nav class="nav">
            <img src="/fseRennes.png" alt="logo de la fse de Rennes" class="nav__icon">
            <navButton to="/">Rennes</navButton>
            <navButton to="/adhesion">adhésion</navButton>
            <navButton to="/cas">Fac beaulieu</navButton>
            <navButton to="/csr">CSR</navButton>

            <div class="nav__color">
                <select v-model="$colorMode.preference">
                    <option value="system">system</option>
                    <option value="light">lumineux</option>
                    <option value="dark">sombre</option>
                </select>
            </div>
        </nav>
        <slot/>
    </main>
</template>

<style lang="scss" scoped>

main {
    @include screen('+xl') {
        padding-top:100px;
    }
}

.nav{ 
    background: #fff;
    @include dark{
            color: #fff;
            background: $backcolor__dark;
    }

    width: 100vw;

    &__icon{
        width: 100px;
    }
    @include screen('+xl') {
        height: 100px;
        position: fixed;
        top:0;
        left:0;

    }

    @include flexbox('', 'center');

    @include screen('-xl') {
        padding: 5px 0;
        flex-direction: column;
    }

    border-bottom: #d60001 solid 4px;

    &__color{ ///input color mode
        position: relative;
        margin: 0 20px 0 auto;
        @include screen('-xl'){
            margin: 20px auto;
        }
        &::before {
            border-radius: 15px;
            content: "\f13a";
            font-family: FontAwesome;
            position: absolute;
            top: 0;
            right: 0%;
            width: 20%;
            height: 100%;
            text-align: center;
            font-size: 28px;
            line-height: 45px;
            color: rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.1);
            pointer-events: none;
        }

        &:hover::before {
            color: rgba(255, 255, 255, 0.6);
            background-color: rgba(255, 255, 255, 0.2);
        }
        select {
            border-radius: 15px;
            background-color: #c21d04;
            color: white;
            padding: 12px;
            width: 250px;
            border: none;
            font-size: 20px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
            appearance: button;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';
            option{
                border-radius: 15px;
            }
            
        }

        

    }

}
</style>