import { useState } from 'react'

import * as qiniu from 'qiniu-js'

import { uploadFileImg } from '@/api/upload'

const baseUrl = process.env.REACT_APP_CLOUD_URL

// setLoading?: (loading: boolean) => void
export function useUpload() {
  const [url, setUrl] = useState('')
  // 将图像上传至七牛云
  const upload = (options: any) => {
    // setLoading(true)
    return new Promise((resolve, reject) => {
      // 获取七牛云 token
      uploadFileImg().then((res) => {
        const token = res.data.uploadToken
        // 用户上传图片
        const file = options.file

        // compressImage 压缩图片
        // quality 压缩质量  noCompressIfLarger 为 true 时如果发现压缩后图片大小比原来还大，则返回源图片
        qiniu
          .compressImage(file, { quality: 0.92, noCompressIfLarger: true })
          .then((res) => {
            const observable = qiniu.upload(
              res.dist as File,
              null, // 文件名称,如果为null 则使用 hash 作为文件名称
              token
            )

            // 上传图片
            observable.subscribe({
              // 上传失败
              error(err) {
                reject(err.message)
              },
              // 上传成功
              complete(res) {
                setUrl(baseUrl + res.key)
                resolve('上传成功')
              }
            })
            // setLoading(false)
          })
      })
    })
  }

  return {
    url,
    upload,
    setUrl
  }
}
