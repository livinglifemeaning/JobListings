import classes from "./Card.module.css";

const Card = (props) => {
  const {
    handleFilteredTags,
    company,
    logoUrl,
    newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props;


  return (
    <div className={`${classes.card} ${newJob && classes.new}`}>
      {/* Logo */}
      <div className={classes.logo}>
        <img src={logoUrl} alt={`${company} logo`} />
      </div>
      {/* Job Description */}
      <div className={classes.jobDescription}>
        <div className={classes.companyBox}>
          <p className={classes.company}>{company}</p>
          {newJob && <span className={classes.newTag}>New!</span>}
          {featured && <span className={classes.featuredTag}>Featured</span>}
        </div>

        <p className={classes.position}>{position}</p>
        <div className={classes.infoBox}>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>

      {/* Tags */}

      <div className={classes.tags}>
        <span onClick={(e) => handleFilteredTags(e)} className={classes.tag}>
          {role}
        </span>
        <span onClick={(e) => handleFilteredTags(e)} className={classes.tag}>
          {level}
        </span>

        {languages.map((language, i) => (
          <span key={i} onClick={(e) => handleFilteredTags(e)} className={classes.tag}>
            {language}
          </span>
        ))}

        {tools &&
          tools.map((tool, i) => (
            <span key={i} onClick={(e) => handleFilteredTags(e)} className={classes.tag}>
              {tool}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
