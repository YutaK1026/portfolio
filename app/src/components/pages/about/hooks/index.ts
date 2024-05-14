type useAboutProps = () => {
  src: string
  imageStyle: {
    borderRadius: string
    border: string
  }
  title: string
  icon_style: {
    margin: string
  }
}

export const useAbout: useAboutProps = () => {
  const src: string = "/props/about/home.webp"
  const imageStyle = {
    borderRadius: '2%',
    border: '1px solid #fff',
  }
  const title = "自己紹介"
  const icon_style = {margin: '2px'}

  return {
    src,
    imageStyle,
    title,
    icon_style
  }
}