import MyAccordion from './MyAccordion';

let counter = -1;

const data = [
  {
    header: "Історія",
    children: [
      {
        header: "Заснування",
        text: "Наша компанія була заснована з метою надання найкращих смартфонів на ринку."
      },
      {
        header: "Розвиток",
        text: "Протягом років ми розширили асортимент і впровадили інноваційні технології."
      }
    ]
  },
  {
    header: "Місія",
    text: "Надавати користувачам сучасні, якісні та доступні смартфони для щоденного використання."
  },
  {
    header: "Цілі",
    text: "Розширення ринку, покращення сервісу та постійне оновлення лінійки продуктів."
  }
];

function AboutList() {
  return (
    <MyAccordion counter={() => ++counter} data={data} />
  );
}

export default AboutList;
