export const Layout = (props) => {
  return(
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      {props.children}
    </div>
  );
}

// .container {
//   padding: 0 2rem;
//   max-width: 600px;
//   margin: 0 auto;
// }
