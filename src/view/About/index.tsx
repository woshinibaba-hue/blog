import React from 'react'

import { Space, Divider } from 'antd'

import { useTip } from '@/hooks'

import { AboutContainer } from './styled'

function About() {
  const { tip, date } = useTip()
  return (
    <AboutContainer>
      <div className="bg">
        <img
          src="http://rfz86pha6.hn-bkt.clouddn.com/FmRQoFqh7d7rswPVxWNvFht_4wqp"
          alt=""
        />
      </div>
      <div className="container">
        <header>
          <div className="left">
            <img
              src="http://rfz86pha6.hn-bkt.clouddn.com/FhJqrWCZNnbVJmZug8Sx6Xgnmbr2"
              alt=""
            />
          </div>
          <div className="right">
            <div className="name">
              <Space split={<Divider type="vertical" />}>
                <span>一名菜鸡</span>
                <span>湖北 · 武汉</span>
              </Space>
            </div>
            <div className="info">
              Hello
              欢迎访问我的个人博客，本博客主要记录本人的学习历程和一些课程笔记，初来乍到，多有不足，请多包涵！
            </div>
          </div>
        </header>
        <main>
          <div className="date">
            现在是：
            <Space size="large">
              <span>{date}</span>
              <span>{tip}</span>
            </Space>
          </div>
          <Divider orientation="left">👨‍💻 关于博主</Divider>
          <ul>
            <li>😋 一名在校大学生</li>
            <li>👀 热衷于前端技术</li>
            <li>😍 希望有朝一日能够成为一名优秀的前端工程师</li>
          </ul>
          <p>欢迎大家来访问，如有问题请多指教 一名卑微的前端小菜鸟 🏹</p>
          <Divider orientation="left">🀄 联系方式</Divider>
          <ul>
            <li>
              QQ :{' '}
              <a
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=2011358693&site=qq&menu=yes"
                rel="noreferrer"
              >
                2011358693
              </a>
            </li>
            <li>
              WX :{' '}
              <a
                href="http://rfz86pha6.hn-bkt.clouddn.com/Fj7qRg43aPojTYW0CxKLqTS27Jov"
                target="_blank"
                rel="noreferrer"
              >
                2011358693
              </a>
            </li>
          </ul>
          <Divider orientation="left">💻 关于本站</Divider>
          <p>
            🔨 本站是在学习了 React 技术栈后，为了锻炼自己，就采用 React
            搭建的博客前台页面，本博客包含前台页面与后台页面。
          </p>
          <p>
            主要用来梳理学习的知识点，记录学习过程中的笔记，如有错误，欢迎大家指出
            👏
          </p>
          <p>📒 博客 (前台展示页面)</p>
          <ul>
            <li>技术栈包含：React + TS</li>
            <li>状态管理采用 Redux</li>
            <li>UI组件库采用 Antd</li>
            <li>时间格式化使用 Dayjs</li>
            <li>Markdown 渲染采用 React-Markdown</li>
            <li>🤔 后期再采用 SSR</li>
            <li>等等等 ...</li>
          </ul>
          <p>💼 博客 (后台展示页面)</p>
          <ul>
            <li>技术栈包含：Vue3 + TS</li>
            <li>状态管理采用 Pinia</li>
            <li>UI组件库采用 Element-Plus</li>
            <li>Markdown 编辑器采用 v-md-editor</li>
            <li>等等等 ...</li>
          </ul>
          <p>📡 博客 (后端)</p>
          <ul>
            <li>技术栈包含：Node + Express + TS</li>
            <li>数据库使用 MySql</li>
            <li>🤔 嗯 ... 后期打算采用 Nest 重构</li>
          </ul>
          <p>🤔 本站代码书写过程中也有很多的不足，待日后再进行重构</p>
          <p>
            🥢 本站前后端均为个人书写，本人能力有限，有什么问题大佬们还求指出
          </p>

          <Divider orientation="left">💪 共勉</Divider>
          <p>希望自己还要各位陌生人们，能够成为你想成为的人，加油 👍👍</p>
          <p>未来的路漫长且久远，我们一起努力鸭 😎😎 </p>
        </main>
      </div>
    </AboutContainer>
  )
}

export default React.memo(About)
