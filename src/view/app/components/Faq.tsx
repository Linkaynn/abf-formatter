const Faq = () => {
  return (
    <div>
      <h5>FAQ</h5>
      <h6>Works with all excel versions?</h6>
      <p>
        The formatter reads Excel cells, so, if your version contains the data
        on same position as the last one tested (v8.6.1)
      </p>
      <h6>It will break my character?</h6>
      <p>
        Of course, I hope not. Currently, I have been using it on almost 50
        characters and the results are good.{" "}
        <b>
          I recommend doing a character backup before use it:{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="assets/export-actor-example.mp4"
          >
            instructions here
          </a>
        </b>
      </p>
      <h6>I have an idea, where I can send my feedback?</h6>
      <p>You can reach me:</p>
      <ul>
        <li>
          Opening an issue:{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Linkaynn/abf-formatter/issues"
          >
            https://github.com/Linkaynn/abf-formatter/issues
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:jeseromeroarbelo@gmail.com">
            jeseromeroarbelo@gmail.com
          </a>
        </li>
        <li>Discord: Linkaynn#0276</li>
      </ul>
    </div>
  );
};

export default Faq;
