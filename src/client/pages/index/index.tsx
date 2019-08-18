import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Study from '../study/index'
import Tabbar from '../../components/Tabbar/index'

import './index.scss'


interface IProps {

}

interface IState {
  count: number,
  current: number,
}
class Index extends Component<IProps, IState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      current: 0,
    }
  }


  async componentDidShow() {
  }

  switchTab(index: number): void {
    this.setState({ current: index })
  }

  render() {
    const { current } = this.state;
    return (
      <View className='index-container'>
        <Study></Study>
        <Tabbar onSwitchTab={this.switchTab.bind(this)} current={current} />
      </View>
    )
  }
}

export default Index as ComponentType
