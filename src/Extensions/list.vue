<template>
  <div class="page">

    <template>
      <div class="heit">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="40"> </el-table-column>

          <el-table-column width="70" prop="set">
            <template slot-scope="scope">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-more moremuen"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <span>{{scope.id}}</span>
                  <!-- <el-dropdown-item @click.native="changeaccount(scope.row)"
                    >修改登录账户</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="rename(scope.row)"
                    >修改用户名</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="del(scope.row)"
                    >删除</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="changepassword(scope.row)"
                    >修改登录密码</el-dropdown-item
                  > -->
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>

          <el-table-column
        align="right"
        width="180"
        prop="create_time"
        label="创建时间">
      </el-table-column>
        </el-table>
      </div>
      <Pagination
        @pagination="query()"
        :page.sync="from.querypage"
        :pageCount.sync="totalPage"
        :total.sync="total"
        v-if="total > 0"
      />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Aaccountget
} from "@/api/account.js";
import Pagination from "@/components/Pagination";
export default {
  name: "accountManage",
  created() {
    this.query();
  },
  data() {
    return {
      tableData: [],
      from: {
        querypage: 1,
      },
      total: 0,
      totalPage: 0,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    query() {
      this.$http(Aaccountget(this.from), (res) => {
        console.log(res);
        if (res.code == 200) {
          this.tableData = res.data.result;
          this.total = res.data.total;
          this.totalPage = res.data.pageCount;
          this.$message("成功");
        } else {
          this.$message("登录失败");
        }
      });
    },
  },
};
</script>
<style scoped lang='scss'>
</style>
