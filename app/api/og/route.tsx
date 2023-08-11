/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const imageData = (await fetch(
    new URL('../../../public/images/social-card-template.jpg', import.meta.url)
  ).then((res) => res.arrayBuffer())) as string

  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') ?? 'No post title'

    return new ImageResponse(
      (
        <div tw="absolute inset-0 flex flex-col">
          <img
            src={imageData}
            alt=""
            tw="flex-1 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div tw="absolute flex flex-col items-start justify-start w-full px-10 py-10 sm:justify-between">
            <div tw="flex items-start justify-start w-full">
              <div tw="text-white text-7xl font-bold">{title}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
