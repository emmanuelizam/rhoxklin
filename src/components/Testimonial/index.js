import React, { useEffect, useRef, useState } from "react";
import {
  Wrapper,
  Content,
  Testimony,
  LeftArrow,
  RightArrow,
  Title,
  Scroll,
  Dot,
} from "./Testimonial.styles";

import API from "../../API";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const res = await API.fetchTestimonials("");
        if (res.ok) {
          const data = await res.json();
          data.map((d) => (d.display = "none"));
          setTestimonials(data);
        } else {
          throw Error("there was an error in the response");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTestimonials();
  }, []);

  function updateIndex() {
    if (testimonials.length !== 0) {
      setTestimonials((prev) => {
        const update = [...prev];
        update[index].display = "flex";
        return update;
      });
      setPrevIndex(index);
      setIndex((prev) => {
        if (prev >= testimonials.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
      setTestimonials((prev) => {
        const update = [...prev];
        update[prevIndex].display = "none";
        return update;
      });
    }
  }

  useInterval(() => {
    updateIndex();
  }, 5000);

  function changeTestimonial(dir) {
    if (dir === "left") {
      if (testimonials) {
        setTestimonials((prev) => {
          const update = [...prev];
          update[prevIndex].display = "flex";
          return update;
        });
        setIndex(prevIndex);
        setPrevIndex((prev) => {
          if (prev <= 0) {
            return testimonials.length - 1;
          } else {
            return prev - 1;
          }
        });
        setTestimonials((prev) => {
          const update = [...prev];
          update[index].display = "none";
          return update;
        });
      }
    } else {
      updateIndex();
    }
  }

  return (
    <Wrapper>
      <Title>
        <h2>TESTIMONIALS</h2>
      </Title>
      <Content>
        <LeftArrow
          onClick={() => {
            changeTestimonial("left");
          }}
        >
          {"❮"}
        </LeftArrow>
        {testimonials ? (
          testimonials.map((testimonial) => (
            <Testimony
              className="testimony"
              display={testimonial.display}
              id={testimonial.id}
            >
              <img src={testimonial.picture} alt="Testimonee"></img>
              <div>
                <p>
                  <b>{testimonial.content}</b> <br />
                  <br /> <i>{"~" + testimonial.name}</i>
                </p>
              </div>
            </Testimony>
          ))
        ) : (
          <p>loading</p>
        )}
        <RightArrow
          onClick={() => {
            changeTestimonial("right");
          }}
        >
          {"❯"}
        </RightArrow>
      </Content>
      <Scroll>
        {testimonials ? (
          testimonials.map((testimonial) => (
            <Dot display={testimonial.display}></Dot>
          ))
        ) : (
          <div></div>
        )}
      </Scroll>
    </Wrapper>
  );
};
