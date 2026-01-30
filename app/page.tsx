import EventCard from "@/components/EventCard"
import Explorebtn from "@/components/Explorebtn"
import {events} from '@/lib/constants'


const Page = () => {

  return (
    <section>
      <h1 className="text-center">The Hub for Dev <br /> Event  You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons , Meet ups , and Conference ,All in One Place </p>
      <Explorebtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {/* Event Card  */}
          {
            events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))

          }
        </ul>

      </div>
    </section>
  )
}

export default Page
