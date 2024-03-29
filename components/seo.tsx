import React from 'react';
import Head from 'next/head';
import {
    DESCRIPTION,
    IMAGE_OG,
    SITE_URL,
    SOCIAL_HANDLE,
    TITLE,
} from '../utils/constants';
import { useRouter } from 'next/dist/client/router';

interface Props {
    title?: string;
    description?: string;
    imageUrl?: string;
}

export function SEO(props: Props) {
    const router = useRouter();
    const title = props.title ? `${props.title} · ${TITLE}` : TITLE;
    const description = props.description || DESCRIPTION;
    const image = props.imageUrl || IMAGE_OG;
    const url =
        router.route === '/'
            ? SITE_URL
            : SITE_URL.replace(/\/$/, '') +
              router.asPath.split('?')[0];

    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="application-name" content={TITLE} />
            <meta
                name="description"
                content={description}
                key="description"
            />
            <meta property="twitter:image" content={image} />
            <meta property="og:image" content={image} />
            <meta name="image" content={image} key="image" />

            <link rel="manifest" href="/manifest.json" />

            <meta
                property="og:type"
                content="website"
                key="og_type"
            />
            <meta
                property="og:site_name"
                content={TITLE}
                key="og_site_name"
            />
            <meta
                property="og:title"
                content={title}
                key="og_title"
            />
            <meta
                property="og:description"
                content={description}
                key="og_description"
            />
            <meta property="og:url" content={url} key="og_url" />

            <meta
                property="og:image"
                content={image}
                key="og_image"
            />
            <meta
                property="og:image:url"
                content={image}
                key="og_image_url"
            />
            <meta
                property="og:image:secure_url"
                content={image}
                key="og_image_secure_url"
            />
            <meta
                property="og:image:alt"
                content={`${TITLE} social image`}
                key="og_image_alt"
            />
            <meta
                property="og:image:type"
                content="image/png"
                key="og_image_type"
            />
            <meta
                property="og:image:width"
                content="1200"
                key="og_image_width"
            />
            <meta
                property="og:image:height"
                content="630"
                key="og_image_height"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Exo:wght@100;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
    );
}
