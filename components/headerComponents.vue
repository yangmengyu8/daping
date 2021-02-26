<template>
    <div class="container">
      <header>
      <div class="logo"></div>
      <div class="setting" @mouseover="mouseOverSetting">
        <div class="setting_bg">
          <img src="images/head_photo.png" width="32">
          <b>管理员</b>
          <span></span>
        </div>
      </div>
      <a class="menu" href="../views/menu.html"></a>
    </header>

    <div>
      <ul class="dropdown-menu" id="dropdown" @mouseleave="mouseLeaveSetting">
        <li><a href="javascript:void(0);"><i class="el-icon-chat-dot-square" id="tzgg_li"></i>&nbsp;消息</a></li>
        <li><a href="javascript:void(0);"><i class="el-icon-document"></i>&nbsp;通知公告(<span
              id="tzgg_nums_span">0</span>)</a></li>
        <li><a href="javascript:void(0);"><i class="el-icon-user"></i>&nbsp;待办事项(<span id="dbsx_nums_span">0</span>)</a>
        </li>
        <li><a href="javascript:void(0);"><i class="el-icon-edit"></i> 密码修改</a></li>
        <li role="separator" class="divider"></li>
        <li>
          <a href="javascript:;">
            <i class="el-icon-setting"></i> 个人信息
          </a>
        </li>


        <li>
          <a href="javascript:;">
            <i class="el-icon-setting"></i> 社区工作计划表
          </a>
        </li>


        <li>
          <a href="javascript:openMenu('','','index/nc_kcb',this)">
            <i class="el-icon-setting"></i> 农村工作计划表
          </a>
        </li>

        <li role="separator" class="divider"></li>
        <li>
          <a href="javascript:;">
            <i class="el-icon-switch-button"></i> 注销
          </a>
        </li>
      </ul>
    </div>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {

        }
    },
    props: ['updata'],
    methods:{
      mouseOverSetting() {
        const menu = document.getElementById("dropdown")
        menu.style.visibility = "visible"
      },
      mouseLeaveSetting() {
        const menu = document.getElementById("dropdown")
        menu.style.visibility = "hidden"
      },
    },
}
</script>
<style>
/*css 初始化 */
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
  /*去掉原样式中的小黑点*/
  /*ctrl+alt+l*/
}
/* 头部样式 */
header{
  background: url('images/header.png') no-repeat center;
  width: 100%;
  height: 1.09375rem;
  background-size: 100% 100%;
  display: flex;
  flex-flow: row nowrap;
}
header .logo{
  background: url('images/logo.png') no-repeat left;
  width: 100%;
  height: 1.09375rem;
  background-size: 50%;
} 
header .setting {
  width: 11%;
  /* background: green; */
  text-align: center;
  padding: .234375rem 0px;
}
.setting:hover{
  background-color: rgba(255, 255, 255, .2)
}
.menu:hover {
  background-color: rgba(255, 255, 255, .2)
}
.menu {
  width: 7%;
  height: 100%;
  background: url('images/menu.png') no-repeat center;
}
.setting_bg{
  background-color: #FFFFFF;
  border-radius: .234375rem;
  height: .625rem;
  line-height: .625rem;
}
.setting_bg img {
  display: inline-block;
  vertical-align: middle;
}
.setting b{
  display: inline-block;
  vertical-align: middle;
  color: #FF6A33;
  font-size: .25rem;
  padding: 0 .15625rem;
}
.setting span{
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid\9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  color: #FF6A33;
}

/* 设置下拉样式 */

.dropdown-menu{
  position: absolute;
  z-index: 100;
  width: 3.2rem;
  height: 6.25rem;
  background: #ffffff;
  right: 1.4rem;
  border: 1px solid rgba(120, 130, 140, .13);
  border-radius: 0;
  box-shadow: 0 3px 12px rgba(0, 0, 0, .05);
}
.dropdown-menu .divider{
  height: 1px;
  margin: .140625rem 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu li:hover{
  background-color: #DC2124;
}
.dropdown-menu li:hover>a{
  color: #FFFFFF;
}

.dropdown-menu>li>a {
  padding: .140625rem .3125rem;
  display: block;
  /* padding: 3px 20px; */
  clear: both;
  font-weight: 400;
  line-height: 1.8;
  text-decoration: none;
  color: #333;
  white-space: nowrap;
  font-size: .21875rem;
}
#dropdown{
  visibility: hidden;
}
</style>