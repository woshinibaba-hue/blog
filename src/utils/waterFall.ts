// 实现瀑布流
type Options = {
  gap?: number
}

class WaterFall {
  private containerEl: HTMLElement
  private gap: number
  private childrens: HTMLCollection
  private heightArr: number[]

  constructor(containerEl: HTMLElement, options?: Options) {
    this.containerEl = containerEl // 容器
    this.gap = options?.gap ?? 0 // 每个子元素之间的间距
    this.childrens = containerEl.children // 容器内的子元素
    this.heightArr = [] // 瀑布流列高度

    // 给每个子元素随机设置 260 ~ 420之间的高度
    for (let i = 0; i < this.childrens.length; i++) {
      ;(this.childrens[i] as HTMLElement).style.height =
        this.getRandomHeight() + 'px'
    }

    // 摆放瀑布流元素
    this.layout()
  }

  // 生成260 ~ 420之间的随机高度
  private getRandomHeight(min = 2, max = 4) {
    let height = (Math.random() * (max - min + 1) + min) * 100

    if (height > 420) {
      height = 420
    } else if (height < 250) {
      height = 260
    }

    return height
  }

  // 正确摆放瀑布流子元素
  // 瀑布流摆放要求：每一列高度最低的，再下一列会优先填充, 瀑布流子元素宽度相等，高度不一致
  private layout() {
    // 是否存在子元素
    if (!this.childrens.length) return

    // 获取一列能摆放多少个子元素(计算列数)
    const width = this.containerEl.offsetWidth
    const itemWidth = (this.childrens[0] as HTMLElement).offsetWidth // 获取子元素的宽度
    const columns = Math.floor(width / (itemWidth + this.gap))

    let top = 0,
      left = 0

    for (let i = 0; i < this.childrens.length; i++) {
      if (i < columns) {
        // 为什么是第一列：当每一列为3，那么 0 ~ 2 是三个元素，则是第一列
        // 第一列，top为0， left为当前子元素的宽度 + 边距 * 当前索引值
        top = 0
        left = itemWidth * i + this.gap * i

        // 保存当前列子元素的高度
        this.heightArr.push((this.childrens[i] as HTMLElement).offsetHeight)
      } else {
        // 剩下的子元素排列
        // 首先：需要找出上一列的最小高度
        const { minIndex, minHeight } = this.getMinHeight(this.heightArr)
        top = minHeight + this.gap
        left = (this.childrens[minIndex] as HTMLElement).offsetLeft

        // 更新列高度列表
        this.heightArr[minIndex] +=
          (this.childrens[i] as HTMLElement).offsetHeight + this.gap
      }

      ;(this.childrens[i] as HTMLElement).style.top = top + 'px'
      ;(this.childrens[i] as HTMLElement).style.left = left + 'px'

      // 将每列的最大高度给容器盒子，这样可以保证瀑布流下方元素布局不会出问题
      this.containerEl.style.height = Math.max(...this.heightArr) + 'px'
    }
  }

  // 获取最小高度 返回最小高度索引值
  private getMinHeight(heightArr: number[]) {
    let minIndex = 0
    let minHeight = heightArr[minIndex]
    heightArr.forEach((item, i) => {
      if (item < minHeight) {
        minHeight = item
        minIndex = i
      }
    })

    return { minIndex, minHeight }
  }
}

export default WaterFall
