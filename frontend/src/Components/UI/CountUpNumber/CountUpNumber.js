import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function CountUpNumber({ number }) {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp
            start={viewPortEntered ? null : 0}
            end={number}
            duration={5}
            decimal={","}
            separator={"."}
        >
            {({ countUpRef }) => {
                return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                    >
                        <p className="h1 my-2" ref={countUpRef} />
                    </VisibilitySensor>
                );
            }}
        </CountUp>
    );
}

/*
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                    >
                        <p className="h1 my-2" ref={countUpRef} />
                    </VisibilitySensor>
*/
