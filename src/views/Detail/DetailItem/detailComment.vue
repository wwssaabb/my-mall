<template>
  <div class="comment">
    <div class="title">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div class="contents" v-if="isEmpty">
      <div class="user">
        <el-image class="avatar" :src="comment.avatar"></el-image>
        <span class="name">{{comment.uname}}</span>
      </div>
      <div class="content">
        <p>{{comment.content}}</p>
      </div>
      <div class="created">
        <span class="date">{{comment.created|showDate}}</span>
        <span class="style">{{comment.style}}</span>
      </div>
      <div class="images">
        <el-image :src="item" v-for="(item,index) in comment.images"
                  :key="item+index" class="image"></el-image>
      </div>
    </div>
    <div class="empty" v-else>
      <p>无用户评价</p>
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    name: "detailComment",
    props: {
      detailComment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        comment: {}
      }
    },
    filters:{
      showDate(d){
        return moment(d*1000).format('YYYY-MM-DD')
      }
    },
    watch: {
      detailComment() {
        this.comment = this.detailComment
      }
    },
    computed:{
      isEmpty(){
        return  Object.keys(this.detailComment).length!==0
      }
    }
  }
</script>

<style scoped>
  .comment {
    width: 100%;
    border: 1px solid;
    border-bottom:10px solid rgba(241, 241, 241,0.9) ;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*border-bottom: 5px solid #7b7979;*/
    box-shadow:0 2px 6px rgba(123,121,121,0.9) ;
  }

  .title > p {
    font-size: 18px;
    padding: 20px 10px;
    color: black;
  }

  .title > p:nth-child(2) {
    font-size: 16px;
    color: #7b7979;
  }

  .user {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px 10px;
  }

  .name {
    color: black;
    margin: 5px 10px 5px 0;
    font-size: 20px;
  }

  .content {
    font-size: 16px;
    text-indent: 2em;
    padding: 5px 10px;
    color: #787777;
  }
  .created
  {
    display: flex;
    justify-content: left;
    align-items: center;
    padding:5px 10px;
  }
  .style
  {
    margin: 0 10px;
  }
  .images
  {
    padding: 5px 10px;
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap:wrap;
  }
  .image
  {
    width: 20%;
    height: auto;
    margin:0 2px;
  }
  .empty
  {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 100px;
  }
</style>