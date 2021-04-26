import {Header} from "components/header"
import {ActionBar} from "components/actionBar"
import {NewsList} from "components/newsList"
import Container from '@material-ui/core/Container';




export default function Home() {
  return (
    <div>

    <Header />
    <Container>
      <ActionBar />
      <NewsList />
    </Container>
    </div>
  )
}
