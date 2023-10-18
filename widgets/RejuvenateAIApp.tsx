const externalAppUrl = 'http://localhost:3000';
//const externalAppUrl = "https://rejuvenate-ai.netlify.app/"
const initialViewHeight = 800;

return (
  <Widget
    src={'wendersonpires.near/widget/NearSocialBridgeCore'}
    props={{ externalAppUrl, initialViewHeight }}
  />
);
