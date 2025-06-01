import PageHeaderTitleWrapper from "../Wrappers/PageHeaderTitleWrapper";
import EventsCards from "../EventsCards";
import { EVENTS_DATA } from './events';
import _ from "lodash";

export default function Events() {
  const sortByDateDesc = (a, b) => new Date(a.date) - new Date(b.date);
  const sortByDateAsc = (a, b) => new Date(b.date) - new Date(a.date);
  const currentDate = new Date();
  const upcomingEvents = _.cloneDeep(EVENTS_DATA).filter(event => event.date >= currentDate).sort(sortByDateDesc);
  const pastEvents = _.cloneDeep(EVENTS_DATA).filter(event => event.date < currentDate).sort(sortByDateAsc);

  return (
    <PageHeaderTitleWrapper
      subheading={"OUR EVENTS"}
      heading={"Events"}
      text={"At W3B, we are a team of passionate students who are dedicated to bridging the gap between the Management and Computer Science, and promote Web3 technology and its potential benefits to the UofT community."}
    >
      <EventsCards titleName={"Upcoming Events"} eventsData={upcomingEvents} />
      <EventsCards titleName={"Past Events"} eventsData={pastEvents} />
    </PageHeaderTitleWrapper>
  );
}
