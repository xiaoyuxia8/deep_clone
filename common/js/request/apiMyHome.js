import axios from 'axios';
import appConfig from '../../../config/index'
export const getShopTaskList = (data) => {
  return axios.request({
    url: appConfig.crmreport + "/shopSaleTask/list?token=pc_aa66411369ea4e6d9d3ca2ce492d9c03",
    data,
    method: 'post'
  })
}