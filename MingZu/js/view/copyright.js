Vue.component('copyright', {
    template: '<p v-html="msg"></p>',
    data: function () {
      return {
        msg: 'copyright &#169; 2019 國立勤益科技大學機械工程系'
      }
    }
});
