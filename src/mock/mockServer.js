import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/swipers',{code:0, data: data.swipers})
Mock.mock('/infos',{code:0, data: data.info})
Mock.mock('/goods',{code:0, data: data.goods})
Mock.mock('/ratings',{code:0, data: data.ratings})