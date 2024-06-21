import Head from 'next/head'

type Props = {
  description?: string
  title?: string
}

export const HeadMeta = ({ description, title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description || 'Generated by create next app'} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/logo.svg'} rel={'icon'} />
    </Head>
  )
}
