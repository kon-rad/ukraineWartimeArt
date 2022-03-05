import { Box, Text, Flex, Image } from '@chakra-ui/react';

const CreaturesContent = (
    <Flex></Flex>
)

export const COLLECTIONS = {
    creatures:
    {
        image: "/images/creatures/preview.gif",
        title: "Miroslava's Protector Creatures",
        desc: "The proceeds will go to Isida women's health clinic (95%) and to the artist (5%). Isida clinic provides free help to all women and it needs your support now. ",
        launch: "Friday March 4th, 7PM PST",
        network: "Polygon",
        price: "150 Matic",
        quantity: "2,500",
        link: "/collection/creatures",
        minting: true,
        longDescription: "Mira was born in 2011 in Donetsk, Ukraine. When the city was invaded and occupied by Russia sponsored separatists, her family had to flee the city. The art pieces presented here reflect a period of Mira's adaptation in her new environment as an internally displaced person. Recently, she and her mother had to flee the suburbs of Kyiv again to West Ukraine. Despite their disturbing appearance, all creatures Mira brings into existence are kind. According to her, these creatures are protectors who suffered while defending children. Their appearance is frightening and because of this they don't have friends. Beings that Mira creates are reminiscent of Tibetan wrathful deities, powers that channel their anger to provide safety for those who are in danger. Join Mira's creatures in making this world safer for children and babies affected by the war. ",
        descriptionElements: [
            {
                type: 'Text',
                content: 'Destiny',
                style: {
                    'fontSize': '20px'
                },
            },
            {
                type: 'Text',
                content: 'Destiny is a cute creature who used to be a security robot protecting kids. Destiny lost her mind as adults are extremely illogical, while robots need logic to operate. One day she got in a fire, which damaged the hull covering her endoskeleton and made her a bit mutant. Destiny didn’t understand why children are afraid of her. She is still striving to fulfill her mission, but now no one wants to be with her.'
            }
        ]
    },
    // defender: {
    //     image: "/images/defender/defender-compiled.png",
    //     title: "Ukrainian Defender",
    //     desc: "The proceeds will be channeled for support of Ukrainian community defense units.",
    //     launch: "Monday March 7th, 7PM PST",
    //     network: "Ethereum",
    //     price: "0.07 ETH",
    //     quantity: "10,000",
    //     link: "/collection/defender",
    // },
}
