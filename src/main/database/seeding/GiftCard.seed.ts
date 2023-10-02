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
                    logo: 'https://www.grupocard.com.br/image/produtos/streaming/spotify.jpg',
                    category: GiftCardCategory.audiovisual
                },
                {
                    name: 'Google',
                    logo: 'https://www.grupocard.com.br/image/produtos/conteudo/play-store.png',
                    category: GiftCardCategory.store
                },
                {
                    name: 'Apple',
                    logo: 'https://www.grupocard.com.br/image/produtos/conteudo/apple-store.png',
                    category: GiftCardCategory.store
                },
                {
                    name: 'Netflix',
                    logo: 'https://www.grupocard.com.br/image/produtos/streaming/netflix.jpg',
                    category: GiftCardCategory.audiovisual
                },
                {
                    name: 'Playstation',
                    logo: 'https://www.grupocard.com.br/image/produtos/jogos/playstation.jpg',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Xbox',
                    logo: 'https://www.grupocard.com.br/image/produtos/jogos/xboxgamepass.jpg',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Minecraft',
                    logo: 'https://www.grupocard.com.br/image/produtos/jogos/minecraft.jpg',
                    category: GiftCardCategory.games
                },
                {
                    name: 'Office',
                    logo: 'https://www.grupocard.com.br/image/produtos/conteudo/office.png',
                    category: GiftCardCategory.software
                },
                {
                    name: 'Pagamento de contas',
                    logo: 'https://www.grupocard.com.br/image/produtos/servicosfinanceiros/pagamento-de-contas.png',
                    category: GiftCardCategory.software
                },
                {
                    name: 'Uber',
                    logo: 'https://www.grupocard.com.br/image/produtos/transporte/uber.jpg',
                    category: GiftCardCategory.services
                },
                {
                    name: 'Bilhete único',
                    logo: 'https://www.grupocard.com.br/image/produtos/transporte/bilhete-unico.png',
                    category: GiftCardCategory.services
                },
                {
                    name: 'Telesena',
                    logo: 'https://www.grupocard.com.br/image/produtos/capitalizacao/telesena.jpgas',
                    category: GiftCardCategory.services
                }
            ])
            .execute()
    }
}
