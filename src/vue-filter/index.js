import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDateTime', (date) => {
  if(!date) return 
  const ms = moment(date).valueOf()
  return moment(ms).format("hh:mm:ss DD/MM/YYYY")
})

Vue.filter('formatCurrency', (money) => {
  if(!money) return
  return money.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  })
})

