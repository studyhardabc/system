import {
  HomeOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const MenuArr = [
  {
    title: "首页",
    icon: HomeOutlined,
    permission: 1, //权限字段
    path: "/home",
  },
  {
    title: "用户管理",
    icon: UserOutlined,
    permission: 3, //权限字段
    path: "/user",
    children: [
      {
        title: "用户列表",
        permission: 3,
        path: "/user/usersList",
      }
    ],
  },
  {
    title: "学员后台",
    icon: UserOutlined,
    permission: 1, //权限字段
    path: "/student",
    children: [
      {
        title: "匿名投诉",
        permission: 1, //权限字段
        path: "/student/complaint",
      },
      {
        title: "技术问题",
        permission: 1, //权限字段
        path: "/student/problem",
      },
      {
        title: "项目上传",
        permission: 1, //权限字段
        path: "/student/itemupload",
      },
      {
        title: "VIP",
        permission: 1, //权限字段
        path: "/student/stuvip",
      },
      {
        title: "学员周报",
        permission: 1, //权限字段
        path: "/student/weekly",
      },
      {
        title: "我的资料",
        permission: 1, //权限字段
        path: "/student/data",
      },
      {
        title: "交费明细",
        permission: 1, //权限字段
        path: "/student/moneyDetail",
      },
      {
        title: "参加考试",
        permission: 1, //权限字段
        path: "/student/examination",
      },
      {
        title: "学员评价",
        permission: 1, //权限字段
        path: "/student/evaluate",
      },
      {
        title: "教学测评",
        permission: 1, //权限字段
        path: "/student/inquiry",
      },
    ],
  },
  {
    title: "学员考勤",
    icon: LaptopOutlined,
    permission: 1, //权限字段
    path: "/check",
    children: [
      {
        title: "学员请假",
        permission: 1, //权限字段
        path: "/check/leave",
      },
      {
        title: "学员违纪",
        permission: 1, //权限字段
        path: "/check/discipline",
      },
    ],
  },
  {
    title: "权限管理",
    icon: NotificationOutlined,
    permission: 3, //权限字段
    path: "/manage",
    children: [
      {
        title: "角色列表",
        permission: 3,
        path: "/manage/roles",
      },
      {
        title: "权限列表",
        permission: 3,
        path: "/manage/rights",
      },
    ],
  },
  {
    title: "考试系统",
    icon: LaptopOutlined,
    permission: 2, //权限字段
    path: "/system",
    children: [
      {
        title: "试卷列表",
        permission: 2,
        path: "/system/examinationPaper",
      },
      {
        title: "学员成绩",
        permission: 2,
        path: "/system/grade",
      },
    ],
  },
];

export default MenuArr;
