import Accordion from 'react-bootstrap/Accordion';

function MyAccordion({ counter, data }) {
  return (
    <div className="dark-accordion">
      <Accordion defaultActiveKey="0">
        {data.map((e) => {
          const key = counter();

          return (
            <Accordion.Item key={key} eventKey={key.toString()}>
              <Accordion.Header>{e.header}</Accordion.Header>
              <Accordion.Body>
                {'children' in e
                  ? <MyAccordion counter={counter} data={e.children} />
                  : e.text
                }
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default MyAccordion;
