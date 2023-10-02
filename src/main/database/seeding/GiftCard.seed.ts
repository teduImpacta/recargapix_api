import { GiftCard } from '../../../domain/product/entity/GiftCard'
import { GiftCardCategory } from '../../common'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'

export default class CreateGiftCards implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(GiftCard)
            .values([
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
    }
}
