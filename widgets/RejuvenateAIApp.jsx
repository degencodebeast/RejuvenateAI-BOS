// const externalAppUrl = "http://localhost:3000/";
// const path = props.path;
// const initialViewHeight = 800;
// const initialPayload = {
//   myNiceProp: "me gusta :D",
// };

// /**
//  * Request Handlers.
//  */
// const requestHandler = (request, response, Utils) => {
//   switch (request.type) {
//     case "example":
//       exampleHandler(request, response);
//       break;
//   }
// };

// const exampleHandler = (request, response) => {
//   response(request).send({});
// };

// return (
//   <Widget
//     src="wendersonpires.near/widget/NearSocialBridgeCore"
//     props={{
//       externalAppUrl,
//       path,
//       initialViewHeight,
//       initialPayload,
//       requestHandler,
//     }}
//   />
// );

/* eslint-disable react/jsx-no-undef */
const externalAppUrl = 'http://localhost:3000';
//const externalAppUrl = "https://rejuvenate-ai.netlify.app/"
const initialViewHeight = 800;
const path = props.path;

return (
  <Widget
    src={'wendersonpires.near/widget/NearSocialBridgeCore'}
    props={{ externalAppUrl, initialViewHeight, path }}
  />
);

