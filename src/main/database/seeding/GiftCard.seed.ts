import { GiftCardValue } from '../../../domain/product/entity/GiftCardValue'
import { GiftCard } from '../../../domain/product/entity/GiftCard'
import { GiftCardCategory } from '../../common'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export default class CreateGiftCards implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const giftCard = await connection
            .createQueryBuilder()
            .insert()
            .into(GiftCard)
            .values([
                {
                    name: 'Sky',
                    logo: 'https://logodownload.org/wp-content/uploads/2014/09/sky-logo-0.png',
                    category: GiftCardCategory.audiovisual
                },
                {
                    name: 'Spotify',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png',
                    category: GiftCardCategory.audiovisual
                },
                {
                    name: 'Google',
                    logo: 'https://developer.android.com/static/images/cards/newsletter-play-july-2023.png?hl=pt-br',
                    category: GiftCardCategory.store
                },
                {
                    name: 'Apple',
                    logo: 'https://assets.simon.com/tenantlogos/279.png',
                    category: GiftCardCategory.store
                },
                {
                    name: 'Netflix',
                    logo: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
                    category: GiftCardCategory.audiovisual
                },
                {
                    name: 'Playstation',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Xbox',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Minecraft',
                    logo: 'https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image14-3.png',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Office',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg/2560px-Microsoft_Office_2013-2019_logo_and_wordmark.svg.png',
                    category: GiftCardCategory.software
                },
                {
                    name: 'Pagamento de contas',
                    logo: 'https://www.grupocard.com.br/image/produtos/servicosfinanceiros/pagamento-de-contas.png',
                    category: GiftCardCategory.software
                },
                {
                    name: 'Uber',
                    logo: 'https://logospng.org/download/uber/logo-uber-2048.png',
                    category: GiftCardCategory.services
                },
                {
                    name: 'Bilhete único',
                    logo: 'https://bu.voud.com.br/assets/images/bom/logo_bu.png',
                    category: GiftCardCategory.services
                },
                {
                    name: 'Telesena',
                    logo: 'https://devplace.com.br/wp-content/uploads/2016/05/logo-telesena-210x210.png',
                    category: GiftCardCategory.services
                }
            ])
            .execute()

        const values = [
            {
                value: 10,
                description: 'REC SMART3D + TL'
            },
            {
                value: 15,
                description: 'REC NEW MASTER'
            },
            {
                value: 20,
                description: 'REC NEW MASTER 0'
            },
            {
                value: 25,
                description: 'REC SMART - 15 D'
            },
            {
                value: 30,
                description: 'REC SMART7D+ FUT'
            },
            {
                value: 35,
                description: 'REC NEW MASTER 7'
            },
            {
                value: 40,
                description: 'REC SMART15D+ FU'
            }
        ]

        await connection
            .createQueryBuilder()
            .insert()
            .into(GiftCardValue)
            .values(
                giftCard.identifiers.reduce(
                    (
                        arr: QueryDeepPartialEntity<GiftCardValue>[],
                        id,
                        position
                    ) => {
                        values.forEach(({ description, value }) => {
                            arr.push({
                                value,
                                giftcard: id,
                                description: position > 0 ? '' : description
                            })
                        })

                        return arr
                    },
                    []
                )
            )
            .execute()
    }
}
