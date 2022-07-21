// 手写瀑布流

import { debounce } from '@/utils/debounce'

type OptionsType = {
  gap?: number
  colNum?: number
}

class WaterFall {
  private containerEl: HTMLElement
  private gap: number
  private heightArr: number[]
  private items: HTMLCollection

  constructor(containerEl: HTMLElement, options?: OptionsType) {
    this.containerEl = containerEl // 瀑布流容器盒子
    this.gap = options?.gap ?? 10 // 子元素之间的间距
    this.heightArr = [] // 保存列的高度信息
    this.items = containerEl.children // 容器当中的所有子节点

    // 给子元素设置宽高
    for (let i = 0; i < this.items.length; i++) {
      ;(this.items[i] as HTMLElement).style.height =
        this.getRandomHeight() + 'px'
    }

    this.layout()

    window.addEventListener(
      'resize',
      debounce(() => {
        this.layout()
      })
    )
  }

  // 获取最短列的索引
  private getMinHeightIndex(heightArr: number[]): number {
    let minHeight = heightArr[0]
    let minHeightIndex = 0
    for (let i = 0; i < heightArr.length; i++) {
      if (heightArr[i] < minHeight) {
        minHeight = heightArr[i]
        minHeightIndex = i
      }
    }
    return minHeightIndex
  }

  // 随机生成一个高度(260 ~ 410)
  private getRandomHeight(min = 260, max = 410): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // 对瀑布流进行布局
  private layout() {
    this.heightArr = []
    // 没有子元素就不需要布局了
    if (this.items.length === 0) return
    // 获取容器宽度
    const containerWidth = this.containerEl.offsetWidth
    // 获取子元素宽度
    const itemWidth = (this.items[0] as HTMLElement)?.offsetWidth
    // 计算列数 = 容器宽度 / (子元素宽度 + 间距)
    const colNum = parseInt(containerWidth / (itemWidth + this.gap) + '')

    console.log(containerWidth)

    // 开始布局
    for (let i = 0; i < this.items.length; i++) {
      let top, left

      if (i < colNum) {
        // 为什么现在是第一列，如果有4列，那么 colNum 为 4， 当 i < 4 时，则是第一列
        // 第一列元素，top为0，left (itemWidth + gap) * i
        top = 0
        left = (itemWidth + this.gap) * i
        // 保存每一列的高度
        this.heightArr.push((this.items[i] as HTMLElement)?.offsetHeight)
      } else {
        // 当第一列已经插入完毕之后，需要获取上一列最小高度的索引值
        const minIndex = this.getMinHeightIndex(this.heightArr)
        // 获取最小的高度
        top = this.heightArr[minIndex] + this.gap
        // 获取最小的高度元素的offsetLeft值，作为下一个元素的left值，这样就可以保证下一个元素是插入到上一列最小高度的下方
        left = (this.items[minIndex] as HTMLElement)?.offsetLeft

        // 将最小高度 加上 当前元素的高度
        this.heightArr[minIndex] +=
          (this.items[i] as HTMLElement).offsetHeight + this.gap
      }

      ;(this.items[i] as HTMLElement).style.top = top + 'px'
      ;(this.items[i] as HTMLElement).style.left = left + 'px'

      // 优化1：获取当列最大高度，将它设置为当前容器的高度，这样就可以保证瀑布流下方的元素能够正常布局了
      this.containerEl.style.height = Math.max(...this.heightArr) + 'px'
    }
  }
}

export default WaterFall
