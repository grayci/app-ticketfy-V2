import image1 from './assets/images/neon-party.jpg'
import image2 from './assets/images/musical-festival.jpg'
import image3 from './assets/images/exemplo-um.jpg'
import image4 from './assets/images/exemplo-dois.jpg'
import image5 from './assets/images/evento-um.jpg'
import image6 from './assets/images/evento-dois.jpg'

const presentations = [
  {
    id: 1,
    name: 'Neon Party',
    date: '22/05',
    hour: '16:00',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, massa at volutpat sodales, lectus purus rhoncus sapien, in interdum elit mi id libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
    location: '  Party Night Club, Centro | Porto Alegre, RS',
    image: image1,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 30,00',
        tax: 3,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 40,00',
        tax: 4,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 50,00',
        tax: 5,
        status: 'available'
      }
    ]
  },
  {
    id: 2,
    name: 'Music Festival',
    date: '05/06',
    hour: '16:00',
    description: `Fusce tempus volutpat rutrum. Quisque iaculis, ex vel faucibus hendrerit, felis risus ultrices arcu, at lacinia diam enim eu odio. Phasellus tincidunt imperdiet turpis vel imperdiet. Fusce consequat dui eu mauris tempus elementum.`,
    location: '  Parque de enventos, 1500 | Porto Alegre, RS',
    image: image2,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 50,00',
        tax: 5,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 70,00',
        tax: 7,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 90,00',
        tax: 9,
        status: 'available'
      }
    ]
  },
  {
    id: 3,
    name: 'Exemplo Um',
    date: '  19/05',
    hour: '14:00',
    description: `Etiam non eros sit amet tortor sagittis pellentesque sit amet id sapien. Curabitur eu enim sit amet diam sagittis sollicitudin eget ut lorem.`,
    location: '  Rua Exemplo 1, 100 | Porto Alegre, RS',
    image: image3,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 20,00',
        tax: 2,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 30,00',
        tax: 3,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 40,00',
        tax: 4,
        status: 'available'
      }
    ]
  },
  {
    id: 4,
    name: 'Exemplo Dois',
    date: '  26/05',
    hour: '16:00',
    description: `Nullam sed ultrices massa. Integer nisi metus, tempor sodales risus sed, ultricies placerat sapien. Nam luctus hendrerit scelerisque. Phasellus convallis eros ac neque blandit ultricies.`,
    location: '  Av. Exemplo 2, 200 | Porto Alegre, RS',
    image: image4,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 30,00',
        tax: 3,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 40,00',
        tax: 4,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 50,00',
        tax: 5,
        status: 'available'
      }
    ]
  },
  {
    id: 5,
    name: 'Evento Um',
    date: '  02/06',
    hour: '18:00',
    description: `  Etiam non eros sit amet tortor sagittis pellentesque sit amet id sapien. Curabitur eu enim sit amet diam sagittis sollicitudin eget ut lorem.`,
    location: 'Casa de Eventos Exemplo | Porto Alegre, RS',
    image: image5,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 30,00',
        tax: 3,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 40,00',
        tax: 4,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 50,00',
        tax: 5,
        status: 'available'
      }
    ]
  },
  {
    id: 6,
    name: 'Evento Dois',
    date: '  13/05',
    hour: '22:00',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas semper egestas. Proin imperdiet sagittis vulputate. Donec aliquam tincidunt massa, nec fringilla erat auctor vitae.`,
    location: '  Clube de Eventos | Porto Alegre, RS',
    image: image6,
    ticketTypes: [
      {
        id: 1,
        type: 'primeiro',
        name: 'Primeiro Lote',
        value: 'R$ 50,00',
        tax: 5,
        status: 'available'
      },
      {
        id: 2,
        type: 'segundo',
        name: 'Segundo Lote',
        value: 'R$ 60,00',
        tax: 6,
        status: 'available'
      },
      {
        id: 3,
        type: 'terceiro',
        name: 'Terceiro Lote',
        value: 'R$ 70,00',
        tax: 7,
        status: 'available'
      }
    ]
  }
]

export { presentations }
