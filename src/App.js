import { Container, Segment, Statistic, Grid, Icon } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import StatisticFields from './components/StatisticFields';
import './App.css';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <StatisticFields size="small" label="Your balance" value="2,550.53" />

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatisticFields
                size="tiny"
                color="green"
                label="Income:"
                value="1,045.53"
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticFields
                size="tiny"
                color="red"
                label="Expenses:"
                value="623"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} style={{ textAlign: 'left' }}>
              Something
            </Grid.Column>
            <Grid.Column width={3}>$10.99</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} style={{ textAlign: 'left' }}>
              Something else
            </Grid.Column>
            <Grid.Column width={3}>$100.99</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} style={{ textAlign: 'left' }}>
              Something
            </Grid.Column>
            <Grid.Column width={3}>$20.99</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
