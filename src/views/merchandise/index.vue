<template>
    <div class="merchandise">
        <div class="title">
            merchandise Manage
        </div>
        <div class="cards">
            <div class="search-board">
                <el-form :model="form" class="search-form">
                    <el-form-item label="名称" props="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌" props="brand">
                        <el-input v-model="form.brand"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" props="type">
                        <el-input v-model="form.type"></el-input>
                    </el-form-item>
                    <el-form-item label="进价" props="inprice">
                        <el-input v-model="form.inprice"></el-input>
                    </el-form-item>
                    <el-form-item label="定价" props="outprice">
                        <el-input v-model="form.outprice"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" props="number">
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>
                </el-form>
                <el-form class="search-btn">
                    <el-form-item>
                        <el-button class="btn" @click="handleSearch">SEARCH</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="datalist-board">
                <el-table class="data-table" :data="datalist" height="466">
                    <el-table-column type="selection" width="50" fixed></el-table-column>
                    <el-table-column prop="id" label="编号" width="50"></el-table-column>
                    <el-table-column prop="name" label="名称" width="200"></el-table-column>
                    <el-table-column prop="brand" label="品牌" width="100"></el-table-column>
                    <el-table-column prop="type" label="类型" width="100"></el-table-column>
                    <el-table-column prop="inprice" label="进价(件/元)" width="100"></el-table-column>
                    <el-table-column prop="outprice" label="定价(件/元)" width="100"></el-table-column>
                    <el-table-column prop="profit" label="利润(件/元)" width="100"></el-table-column>
                    <el-table-column prop="number" label="数量(个)" width="100"></el-table-column>
                    <el-table-column prop="handle" label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click="handleEdit(scope.$index, scope.row)" class="editbtn">编辑</el-button>
                            <el-button @click="handleView(scope.$index, scope.row)" class="viewbtn">查看</el-button>
                            <el-button @click="handleDelete(scope.$index, scope.row)" class="viewbtn">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            datalist: [
                { id: '001', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '002', name: '红米K50s pro', brand: '红米', type: '电子产品', inprice: 3000, outprice: 5000, profit: 2000, number: 30000 },
                { id: '003', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '004', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '005', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '006', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '007', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '008', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '009', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
                { id: '010', name: '华为mate60 pro', brand: '华为', type: '电子产品', inprice: 5000, outprice: 7000, profit: 2000, number: 10000 },
            ]
        }
    },
    mounted() {

    },
    methods: {
        handleSearch() {

        },
        handleEdit(index, row) {

        },
        handleView(index, row) {

        },
        handleDelete(index,row){
            this.$confirm('此操作将删除该记录','提示',{
                confirmButtonText:'确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() =>{
                this.$message({
                    message: '模拟删除成功',
                    type: 'success'
                })
            }).catch(() =>{
                this.$message({
                    message: '模拟取消删除',
                    type: 'info'
                })
            })  
        }
    }
}
</script>

<style lang="scss" scoped>
// 隐藏滚动条
::-webkit-scrollbar {
    display: none;
}

.merchandise {
    width: 100%;
    height: 100%;
}

.title {
    height: 65px;
    line-height: 65px;
    width: 100%;
    font-size: 29px;
    border-bottom: 1px solid #b8b8b8;
}

.cards {
    width: 100%;
    max-height: 800px;
}

.search-board {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #b8b8b8;
    padding: 20px;
}

.datalist-board {
    width: 100%;
    max-height: 500px;
}

.search-form {
    display: flex;
    flex-wrap: wrap;
}

.el-form-item {
    flex: 0 0 30%;
    margin: 0px 0px 0px 15px;
}

.search-btn {
    width: 100%;
}

.btn {
    width: 92%;
    margin: 10px;
    color: #fff;
    background: #1499ff;
}

.editbtn,
.viewbtn {
    width: 70px;
    font-size: 12px;
}</style>