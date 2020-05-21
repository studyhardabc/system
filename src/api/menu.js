import {
  HomeOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';

const MenuArr = [
  {
    title: '首页',
    icon: HomeOutlined,
    permission:1, //权限字段
    path: '/home'
  },
  {
    title: '学员后台',
    icon: UserOutlined,
    permission:2, //权限字段
    path: '/student',
    children: [
      {
        title: '匿名投诉',
        permission:1, //权限字段
        path: '/student/complaint'
      },
      {
        title: '技术问题',
        permission:1, //权限字段
        path: '/student/problem'
      },
      {
        title: '项目上传',
        permission:1, //权限字段
        path: '/student/itemupload'
      },
      {
        title: '项目上传',
        permission:1, //权限字段
        path: '/student/itemupload'
      },
    ]
  },
  {
    title: '权限管理',
    icon: ScissorOutlined,
    permission:3, //权限字段
    path: '/right-manage',
    children: [
      {
        title: '角色列表',
        icon: ScissorOutlined,
        permission:3, //权限字段
        path: '/right-manage/roles'
      },
      {
        title: '权限列表',
        icon: ScissorOutlined,
        permission:3, //权限字段
        path: '/right-manage/rights'
      }
    ]
  },
  {
    title: '文章管理',
    icon: DeleteOutlined,
    permission:1, //权限字段
    path: '/article-manage',
    children: [
      {
        title: '文章列表',
        icon: DeleteOutlined,
        permission: 1,
        path: '/article-manage/list'
      },
      {
        title: '文章分类',
        icon: DeleteOutlined,
        permission: 2,
        path: '/article-manage/category'
      }
    ]
  }
]

export default MenuArr
