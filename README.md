# Dra. Giovanna Saroli

Site editorial para a Dra. Giovanna Saroli, criado a partir do template Premium Vendas V4. Inclui hero fotográfico, narrativa de apresentação, galeria de oito registros com ampliação e comparação, navegação responsiva e favicon GS.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run typecheck
npm run build
```

## Publicação na Vercel

Importe este repositório na Vercel. O framework é Next.js e o diretório raiz é `./`. Use os comandos padrão de instalação e build. Não são necessárias variáveis de ambiente.

## Conteúdo

Identidade, textos, contato e galeria estão em `data/site.ts`. As informações profissionais e de localização foram obtidas da referência do perfil enviada no pedido. O botão de agendamento usa o WhatsApp público vinculado ao perfil da Dra. Giovanna.

As fotos e os registros foram enviados para este projeto e convertidos para WebP sem retoque visual. A galeria informa que os resultados são individuais. O favicon está em `app/icon.svg`. A imagem OG enviada pelo solicitante está otimizada em `public/og-giovanna-saroli.jpg`.
