import React, { useState, useEffect } from 'react'

import { Badge, Tag } from 'antd'
import { LikeFilled, MessageFilled } from '@ant-design/icons'

import storage from '@/utils/storage'

import ParseMd from '@/components/ParseMd'
import Comment from '@/components/Comment'

import { ArticleStyle } from './style'

const Article = () => {
  const mdStr = `
## 文章主题
陌生人你好，我是一名菜鸡，一名正在努力的菜鸡。从名字就可以看出，我并不是什么大佬，只是一名普普通通的大学生。
2020 年在疫情肆虐的年代，也是我接触前端的开始，在这年十月底，我面临着找工作带给我的压迫感，同学们都找到了自己满意的工作，而我却什么也不会，至此我走上了学习前端的漫长旅途。从上大学开始到那年，我从一个不学无术，成天沉迷于游戏的我，成功蜕变成了一个正在努力爱学习的 \`程序猿\`。

> 6666 **8888**

欢迎来到[yimiciji的主页](http://localhost:3000 "yimiciji的主页")

类型 | 书籍
:---: | :---:
Android | 《第一行代码》 <br> 《Android 开发艺术探索》
Java | 《深入理解 Java 虚拟机》

### 蜕变过程

20 年 10 月底，初次接触前端的我，那个时候我连 前端 最基本的 html，css 都写不明白，就连编辑器也用的云里雾里，那个时候就开始怀疑自己到底适不适合学，然后也是因为别人的鼓励，我才得以一步一步坚持下来，才有了现在的水平。从什么都不懂的小白，到现在能独立的开发项目，进步还是蛮大滴，嘿嘿，虽然过程很艰辛，但是结果还是美好滴，所以呀，屏幕前的陌生人，你如果也有跟我当初一样的困惑，迷茫，请不要放弃和怀疑自己，没有人天生就会，只能靠自己一步一步的积累，慢慢的你也会成为那个你想成为的人。

### 学习成长

**技术栈不断完善**

- HTML - CSS - JavaScript
- TypeScript
- Vue - Vue3
- React
- Node.js
- MySql - MongoDB
- ...

### 一点建议(送给大家，也送给我自己)

#### 程序员的写作之路是有必要的

写博客可以让我们得到成长，可以让更多人看到你的文章，还能提高自己的技术。博客与笔记不同，博客不仅需要自己能看懂，还需要读你博客的人也能看懂，发布博客之后，可能会收到赞许和批评，我们要学会接受批评，才能让我们能够得到进一步的成长，得到赞许也不要骄傲，需要再接再厉，争取写出更多有质量的文章。

#### 做一个有问题的人

我们作为程序猿更多的时候应该在于思考，要多想想为什么，不要只停留在应用层面，可以多去了解了解为什么这样写，
这个函数是怎么实现的，我自己能不能手写简单的实现一下，等等等，这样将来肯定会对自己有很大的帮助

#### 一定要注重与基础

就拿前端来举栗叭，前端的框架有很多很多，各式各样，总类繁多，但是归根结底来说，还是 JavaScript，所有的框架原理最终也都是 JavaScript，所以不要看框架更新的快，只要基础打牢了，框架更新的再快，自己也是可以轻松上手的，所以重中之重就是一定要打牢基础，不要像我一样，最后回头恶补基础 😢😢 ...

#### 当不知道怎么提升自己，出去面试一下

当自己进入了瓶颈期，迷茫期的时候，不妨出去面试一下，让面试官虐杀一下自己，让自己了解到自己的不足，通过弥补这些不足，让自己快速成长起来，争取吊打面试官 😂🤣 ...

### 展望未来

**技术提升**

  - 学习数据结构和算法
  - TypeScript 实践
  - JavaScript 更深入的学习
  - 前端工程化学习
  - 项目部署运维知识学习
  - ...
  学无止境呀 ... 嘻嘻嘻 😁😁

**坚持的事**

- 赶紧找个女朋友，争取早日脱单
- 一定开始写文章，提升自己
- 不要熬夜了，不要熬夜了
- ...

### 共勉

感谢这一路走过来，帮助过我的朋友，
也希望自己还要各位陌生人们，能够成为你想成为的人，加油 👍
未来的路很长，我们一起努力
😎😎 👍👍


`

  const [msg, setMsg] = useState('')
  const [isLogin, setIsLogion] = useState(false)

  const onChange = (value: string) => {
    setMsg(value)
  }

  // 留言提交
  const onSubmit = () => {
    console.log('留言')
  }

  // 回复评论事件
  const handlerReply = (id: number, content: string) => {
    console.log(content, id, '回复评论')
  }

  // 留言 / 评论 点击喜欢
  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  useEffect(() => {
    const token = storage.get<string>('user_token')
    setIsLogion(!!token)
  }, [])

  const data = Array.from({ length: 23 }).map((_, i) => ({
    id: i,
    user: {
      username: `前端吴彦祖_${i * 10}`,
      avatar:
        'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
    },
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date(),
    children: (function test() {
      if (i % 2) {
        return Array.from({ length: 2 }).map((item, id) => ({
          id: (id + 1) * 10,
          user: {
            username: `前端吴彦祖_${(id + 1) * 100}`,
            avatar:
              'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image'
          },
          content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
          createtime: new Date()
        }))
      }

      return undefined
    })()
  }))

  return (
    <>
      <ArticleStyle>
        <div className="header">
          <h1 className="title">我是标题</h1>
          <div className="info">
            <div className="left">
              <img src="https://p26-passport.byteacctimg.com/img/user-avatar/ae82bf3bce57bbaa1782e18740868353~300x300.image" />
            </div>
            <div className="right">
              <div className="name">我是姓名</div>
              <div>2022年06月22日 05:20 · 阅读 9999</div>
            </div>
          </div>
          <div className="cover">
            <img
              src="http://localhost:8888/upload/1657189319151-2019_end_year.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="options">
          <Badge count={999} color="#c2c8d1">
            <LikeFilled />
          </Badge>
          <a href="#comment">
            <Badge count={999} color="#c2c8d1">
              <MessageFilled />
            </Badge>
          </a>
        </div>
        <ParseMd textConent={mdStr} />
        <div className="tags">
          标签：
          <Tag>React</Tag>
          <Tag>React</Tag>
          <Tag>React</Tag>
          <Tag>React</Tag>
          <Tag>React</Tag>
          <Tag>React</Tag>
          <Tag>React</Tag>
        </div>
      </ArticleStyle>

      <div
        className="comment"
        id="comment"
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '6px',
          marginTop: '10px'
        }}
      >
        <Comment
          describe="欢迎各位大佬们前来吐槽 😁😁"
          isLogin={isLogin}
          onChange={onChange}
          onSubmit={onSubmit}
          value={msg}
          mainText="评论"
          list={data}
          handlerLike={handlerLike}
          reply={handlerReply}
        />
      </div>
    </>
  )
}

export default React.memo(Article)
