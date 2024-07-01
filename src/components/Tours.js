import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
          // key={tour.id} is not necessary needed
        })}
      </div>
    </section>
  );
};
