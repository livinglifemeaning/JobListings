import { useEffect, useState } from "react";
import Card from "./Card";
import data from "./assets/data.json";
import classes from "./Cards.module.css";

const Cards = ({ handleFilteredTags, filteredTags }) => {
  const [jobsData, setJobsData] = useState(data);

  useEffect(() => {
    let newData;
    if (filteredTags.length > 0) {
      for (let i = 0; i < filteredTags.length; i++) {
        newData = data.filter((job) => job.tags.includes(filteredTags[i]));
      }
      setJobsData(newData);
    }
  }, [filteredTags]);

  return (
    <div className={classes.cards}>
      {jobsData.map((job) => {
        return (
          <Card
            handleFilteredTags={handleFilteredTags}
            key={job.id}
            company={job.company}
            logoUrl={`${process.env.PUBLIC_URL}/${job.logo}`}
            newJob={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
          />
        );
      })}
    </div>
  );
};

export default Cards;
