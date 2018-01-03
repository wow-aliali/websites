<template>
    <div>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20" class="copyright">&copy; 2017 ReactNews. All Rights Reserved.</el-col>
            <el-col :span="2"></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "pc_footer"
}
</script>

<style>
.copyright {
    margin: 36px 0 10px;
    text-align: center;
    color: rgb(114, 114, 114);
}
</style>
