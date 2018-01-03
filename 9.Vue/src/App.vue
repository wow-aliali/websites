<template>
    <div>
        <PCHeader></PCHeader>

        <div id="container">
            <router-view/>
        </div>

        <PCFooter></PCFooter>
    </div>
</template>

<script>
import PCHeader from '@/components/common/pc_header'
import PCFooter from '@/components/common/pc_footer'

export default {
    name: 'app',
    components: {
        PCHeader,
        PCFooter
    }
}
</script>

<style>
#container:before {
    content: '';
    display: table;
    clear: both;
}
</style>
