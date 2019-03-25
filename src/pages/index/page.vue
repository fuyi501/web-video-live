<template>
  <d2-container :filename="filename" class="page">
    <el-row>
      <el-col :span="12">
        <el-input v-model="input" placeholder="请输入文本"></el-input>

      </el-col> 
      <el-col :span="2">
        
      </el-col>
      <el-col :span="4">
        <el-button type="primary">搜索</el-button>

      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
export default {
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
