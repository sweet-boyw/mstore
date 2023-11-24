<template>
  <div class="main">
    <div class="search-btn">
        <el-form 
        ref="search-form"
        class="search-form"
        :model="searchForm">
            <el-form-item label="名称">
                <el-input v-model="searchForm.name"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-input v-model="searchForm.date"></el-input>
            </el-form-item>
        </el-form>
        <el-form class="search-btn">
            <el-form-item>
                <el-button round type="primary" @click="handleSearch">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="datalist">
        <el-table :data="datalist">
            <el-table-column prop="id" label="序号" width="180"></el-table-column>
            <el-table-column prop="name" label="名称" width="200" v-edit>
                <!-- <template slot-scope="scope">
                    <el-input v-model="scope.row.name" v-if="scope.row[scope.column.property + 'Show']" @blur="InputBlur(scope.row, scope.column)"></el-input>
                    <span v-else>{{ scope.row.name }}</span>
                </template> -->
            </el-table-column>
            <el-table-column prop="date" label="时间" width="300"></el-table-column>
            <el-table-column prop="status" label="状态" width="150">
                <template slot-scope="scope">
                    {{ scope.row.status == 1 ? '使用中' : '未使用'}}
                </template>
            </el-table-column>
            <el-table-column prop="handle" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button round type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    <el-button round type="info" @click="handleDetail(scope.$index,scope.row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import { Input } from 'element-ui'

export default {
    data(){
        return{
            searchForm:{
                name:"",
                date:""
            },
            datalist:[
                {id:1,name:"降龙十八掌",date:"2000-01-01",status:0},
                {id:2, name:"凌波微步", date:"2021-09-02",status:1}
            ],
            show: true
        }
    },
    mounted(){

    },
    methods:{
        handleSearch(){
            console.log("查询")
        },
        handleDelete(i,r){
            console.log(i,r)
        },
        handleDetail(i,r){
            console.log(i,r)
        },
        dbclickCell(row, column ){
            console.log(1111)
            console.log(row, column)
            console.log(row[column.property])
            row[column.property + 'Show'] = true
            if(!['name'].includes(column.property)) return
            row[column.property + 'Show'] = true
        },
        InputBlur(row,column){
            row[column.property + 'Show'] = false
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
}
.search-btn{
    width: 100%;
    max-height: 180px;
    background-color: azure;
}
.el-form-item{
    display: flex;
}
</style>