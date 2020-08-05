import React from "react";

const SubscribeForm = () => {
  return (
    <form action="https://tinyletter.com/commanderking" method="post">
      <div style={{ paddingBottom: "8px" }}>
        Sign up for the monthly newsletter:
      </div>
      <input
        style={{ padding: "8px", width: "275px" }}
        placeholder="youremail@email.com"
        type="text"
        name="email"
        id="tlemail"
      />
      <input type="hidden" value="1" name="embed" />
      <input
        type="submit"
        value="Subscribe"
        style={{
          marginLeft: "2px",
          padding: "8px 12px 8px 12px",
        }}
      />
    </form>
  );
};

export default SubscribeForm;
