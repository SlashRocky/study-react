import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {
  const { items } = props;

  return (
    <div className={classes.grid}>

      {
        items &&
        items.map((item) => {
          return (
            <a href={item.href} className={classes.card} key={item.href}>
              <h2 className={classes.title}>{item.title}</h2>
              <p className={classes.description}>{item.description}</p>
            </a>
          );
        })
      }
    </div>
  );
};
