/*
 * @Author: suchiva@126.com
 * @Date: 2022-09-27 11:17:00
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-24 17:18:37
 * @Description: this is description
 */
export const colConfig = [
  {
    switch: true,
    searchKey: 'serial',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '序号',
      prop: 'serial',
      align: 'left',
      width: '50',
      'show-overflow-tooltip': false
    },
    slot: 'serial'
  },
  {
    switch: true,
    searchKey: 'belongOfCompanyName',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '厂区名称',
      prop: 'belongOfCompanyName',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    switch: true,
    searchKey: 'responsibleUnitName',
    switchDisabled: false,
    dragLocked: false,
    slot: 'responsibleUnitName',
    attrs: {
      label: '车间名称',
      prop: 'responsibleUnitName',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    switch: true,
    searchKey: 'completedOutputAndValue',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '完成产值(元)',
      prop: 'completedOutputAndValue',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    switch: true,
    searchKey: 'workOrderCostOfGenerated',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '发生工费(元)',
      prop: 'workOrderCostOfGenerated',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    switch: true,
    searchKey: 'boardCostOfGenerated',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '管理费(元)',
      prop: 'boardCostOfGenerated',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    switch: true,
    searchKey: 'diff',
    switchDisabled: false,
    dragLocked: false,
    attrs: {
      label: '产值差额(元)',
      prop: 'diff',
      align: 'left',
      width: '',
      'show-overflow-tooltip': false
    }
  },
  {
    slotHeaderName: 'hbSetting',
    switch: true,
    attrs: { label: '', width: '100px', fixed: 'right' }
  }
];

export const initData = {
  code: 0,
  msg: 'OK',
  success: true,
  timestamp: 1664248993659,
  data: {
    outputAndValueOfUintList: [
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '21121775NC3DRKP0',
        responsibleUnitName: '汉南下料机加车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CFHKM3YA8',
        responsibleUnitName: '汉南装焊一车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211223A30CC4A614',
        belongOfCompanyName: '海波重科江夏子公司',
        responsibleUnitId: '220413BM5DSXAKD4',
        responsibleUnitName: '董事会1'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '220608BH6PPBYGF8',
        belongOfCompanyName: '111111',
        responsibleUnitId: '22072286ZB009400',
        responsibleUnitName: '新部门'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2112166X94X11494',
        responsibleUnitName: '江夏单元件车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '21121775S2592PPH',
        responsibleUnitName: '汉南单元件车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '211221DTDFK4HBR4',
        responsibleUnitName: '江夏下料机加车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CMWDARR8H',
        responsibleUnitName: '汉南装焊二车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '211223A3AN1H7WPH',
        responsibleUnitName: '江夏总装车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2201296CSB9RZZ9P',
        responsibleUnitName: '江夏涂装车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2112166ZB5598X40',
        responsibleUnitName: '江夏转运车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CWNHD6AK4',
        responsibleUnitName: '汉南转运车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '220105BF8MBKF3C0',
        responsibleUnitName: '装焊车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '220516BMZCG44094',
        belongOfCompanyName: '生产一部',
        responsibleUnitId: '220822AMW6G8S70H',
        responsibleUnitName: '质量部门'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '21121775NC3DRKP0',
        responsibleUnitName: '汉南下料机加车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CFHKM3YA8',
        responsibleUnitName: '汉南装焊一车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211223A30CC4A614',
        belongOfCompanyName: '海波重科江夏子公司',
        responsibleUnitId: '220413BM5DSXAKD4',
        responsibleUnitName: '董事会1'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '220608BH6PPBYGF8',
        belongOfCompanyName: '111111',
        responsibleUnitId: '22072286ZB009400',
        responsibleUnitName: '新部门'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2112166X94X11494',
        responsibleUnitName: '江夏单元件车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '21121775S2592PPH',
        responsibleUnitName: '汉南单元件车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '211221DTDFK4HBR4',
        responsibleUnitName: '江夏下料机加车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CMWDARR8H',
        responsibleUnitName: '汉南装焊二车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '211223A3AN1H7WPH',
        responsibleUnitName: '江夏总装车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2201296CSB9RZZ9P',
        responsibleUnitName: '江夏涂装车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '2112166ZB5598X40',
        responsibleUnitName: '江夏转运车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211217757RANCACH',
        belongOfCompanyName: '海波重科汉南厂区',
        responsibleUnitId: '2201296CWNHD6AK4',
        responsibleUnitName: '汉南转运车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '211215C4KF7F5AW0',
        belongOfCompanyName: '海波重科江夏厂区',
        responsibleUnitId: '220105BF8MBKF3C0',
        responsibleUnitName: '装焊车间'
      },
      {
        completedOutputAndValue: 0.0,
        workOrderCostOfGenerated: 0.0,
        boardCostOfGenerated: 0.0,
        diff: 0.0,
        belongOfCompanyId: '220516BMZCG44094',
        belongOfCompanyName: '生产一部',
        responsibleUnitId: '220822AMW6G8S70H',
        responsibleUnitName: '质量部门'
      }
    ],
    aggregateMsg: {
      completedOutputAndValue: 0.0,
      workOrderCostOfGenerated: 0.0,
      boardCostOfGenerated: 0.0,
      diff: 0.0
    }
  }
};

export const searchColConfig = [];
