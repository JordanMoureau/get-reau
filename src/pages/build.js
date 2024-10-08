import "./build.css";
import Info from "../components/InfoBounce";
import Waves from "../components/Waves";
import { useState } from "react";

import emailjs from "emailjs-com";

import Squares from "../components/Squares";

const services = [
  "Web Design",
  "Branding",
  "SEO",
  "Photography",
  "Content Creation",
  "Brand Strategy",
  "Growth",
  "Digital Marketing",
  "E-mail Campaigns",
  "Event Promotion",
  "e-commerce website",
  "Ongoing Maintenance",
  "Wordpress website",
  "CopyWriting",
  "Ap Development",
  "Market Research",
  "Analytics",
  "Website Audits",
  "Social Media Management",
  "PPC Advertising",
  "User Experience Design",
];

function Build() {
  const [projectName, setProjectName] = useState("");
  const [projectEmail, setProjectEmail] = useState("");

  const [project, setProject] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  function addProjectServices(service) {
    if (!project.includes(service)) {
      setProject([...project, service]);
    }
    setSubmitted(false);
  }

  function removeService(service) {
    const updatedProject = project.filter((item) => item !== service);
    setProject(updatedProject);
  }

  function handleNameChange(e) {
    setProjectName(e.target.value);
  }

  function handleEmailChange(e) {
    setProjectEmail(e.target.value);
  }

  function submitProject(e) {
    e.preventDefault();

    const templateParams = {
      name: projectName,
      email: projectEmail,
      project: project.join(", "),
    };

    emailjs
      .send(
        "service_m48jv7r",
        "template_8trwzqy",
        templateParams,
        "p7oN8NqSYov4ZfxyP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setProject([]);
          setProjectName("");
          setProjectEmail("");
          setSubmitted(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <div className="build-project">
      <div className="build-box">
        <div className="build-top-bar">
          <div className="https">Https//:yourvibes.com</div>

          <Squares />
        </div>

        <div className="build-main">
          <div className="build-col-one">
            <div className="make-waves-box">
              <div className="make-waves-text">
                <MakeWaves />
              </div>
              <Waves />
            </div>
            <div className="instruct-tab">
              <Info />
            </div>
            <div className="add-buttons">
              <MappedServices addServices={addProjectServices} />
            </div>
          </div>
          <div className="build-col-two">
            <input
              type="text"
              id="project name"
              name="project name"
              value={projectName}
              onChange={handleNameChange}
              required
              placeholder="name the project"
            />
            <input
              type="text"
              id="email address"
              name="email address"
              value={projectEmail}
              onChange={handleEmailChange}
              required
              placeholder="an email address"
            />
            <div className="added-services">
              <Project project={project} removeService={removeService} />
            </div>

            {submitted && (
              <div className="build-submit-message">
                We're on it! You'll hear from us in 48hrs or less.
              </div>
            )}

            <div className="build-submit" onClick={submitProject}>
              <SubmitButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MappedServices({ addServices }) {
  return (
    <>
      {services.map((service, index) => (
        <button onClick={() => addServices(service)} key={index}>
          {service} +
        </button>
      ))}
    </>
  );
}

function Project({ project, removeService }) {
  return (
    <>
      {project.map((service, index) => (
        <button key={index} onClick={() => removeService(service)}>
          {" "}
          {service} -
        </button>
      ))}
    </>
  );
}

function SubmitButton() {
  return (
    <svg
      id="uuid-fb739ec4-7a93-4fc6-9e02-706f7695a835"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81.22 23.81"
    >
      <path
        d="m8.57,19.38c.19.15.53.22,1.02.22.4,0,.66-.12.78-.35.12-.23.17-.52.17-.86.02-.11.03-.22.02-.33-.01-.12-.02-.23-.02-.33,0-.42-.12-.85-.37-1.29-.24-.43-.54-.85-.91-1.24-.36-.39-.75-.76-1.16-1.11s-.78-.65-1.1-.91c-.47-.4-.92-.82-1.35-1.25s-.82-.9-1.14-1.38-.59-1.01-.79-1.56-.32-1.14-.37-1.78c-.04-.38-.05-.76-.03-1.14.02-.38.03-.77.03-1.18,0-.97.17-1.76.51-2.37.34-.6.79-1.08,1.37-1.42.57-.34,1.23-.57,1.99-.68.75-.12,1.54-.17,2.37-.17s1.59.07,2.3.22c.71.15,1.32.4,1.84.75.52.35.93.82,1.24,1.42.31.59.46,1.35.46,2.26v3.46h-4.89v-3.08c0-.49-.1-.8-.29-.94s-.53-.21-1.02-.21c-.42,0-.69.14-.81.41-.12.28-.17.58-.17.92,0,.51.06.96.17,1.37s.28.78.48,1.13c.2.35.46.68.76,1,.31.32.65.65,1.03.99.19.19.38.37.57.52.19.16.37.31.54.46.42.38.85.78,1.27,1.21s.8.87,1.13,1.35c.33.48.6.99.83,1.53.22.54.35,1.11.4,1.7.04.36.05.71.03,1.06-.02.35-.03.71-.03,1.06,0,.98-.17,1.76-.51,2.37-.34.6-.79,1.08-1.35,1.41-.56.34-1.22.57-1.97.68s-1.54.17-2.37.17-1.57-.07-2.29-.21c-.72-.14-1.35-.38-1.88-.73-.53-.35-.95-.83-1.26-1.43-.31-.6-.46-1.36-.46-2.27v-3.46h4.93v3.08c0,.49.1.79.29.92Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m21.98,9.63h5.34v3.78h-5.34v5.43h5.72v4.16h-10.65V.73h10.65v4.13h-5.72v4.77Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m38,15.28v-.06c-.02-.08-.03-.22-.03-.41V.76h3.97v22.25h-6.17l-2.29-14.56-.25.03v.03c.02.06.03.13.03.19v14.3h-3.97V.76h6.17l2.29,14.53h.25Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m55.32,20.66c-.23.59-.57,1.06-1.02,1.41s-1,.59-1.65.73c-.66.14-1.43.21-2.32.21h-6.8V.73h6.8c.89,0,1.66.07,2.32.21.66.14,1.21.38,1.65.73s.78.82,1,1.4.33,1.32.33,2.21v13.19c0,.89-.11,1.62-.32,2.19Zm-5.37-1.81c.3,0,.53-.09.7-.29.17-.19.25-.43.25-.73V5.91c0-.3-.08-.54-.25-.75-.17-.2-.4-.3-.7-.3h-1.59v13.98h1.59Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m62.19.73h4.93v22.28h-4.93V.73Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m68.86,4.86V.73h12.11v4.13h-3.66v18.15h-4.83V4.86h-3.62Z"
        fill="#f6915e"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m5.51,19.46c.19.15.53.22,1.02.22.4,0,.66-.12.78-.35.12-.23.17-.52.17-.86.02-.11.03-.22.02-.33-.01-.12-.02-.23-.02-.33,0-.42-.12-.85-.37-1.29-.24-.43-.54-.85-.91-1.24-.36-.39-.75-.76-1.16-1.11s-.78-.65-1.1-.91c-.47-.4-.92-.82-1.35-1.25s-.82-.9-1.14-1.38-.59-1.01-.79-1.56-.32-1.14-.37-1.78c-.04-.38-.05-.76-.03-1.14.02-.38.03-.77.03-1.18,0-.97.17-1.76.51-2.37.34-.6.79-1.08,1.37-1.42.57-.34,1.23-.57,1.99-.68.75-.12,1.54-.17,2.37-.17s1.59.07,2.3.22c.71.15,1.32.4,1.84.75.52.35.93.82,1.24,1.42.31.59.46,1.35.46,2.26v3.46h-4.89v-3.08c0-.49-.1-.8-.29-.94s-.53-.21-1.02-.21c-.42,0-.69.14-.81.41-.12.28-.17.58-.17.92,0,.51.06.96.17,1.37s.28.78.48,1.13c.2.35.46.68.76,1,.31.32.65.65,1.03.99.19.19.38.37.57.52.19.16.37.31.54.46.42.38.85.78,1.27,1.21s.8.87,1.13,1.35c.33.48.6.99.83,1.53.22.54.35,1.11.4,1.7.04.36.05.71.03,1.06-.02.35-.03.71-.03,1.06,0,.98-.17,1.76-.51,2.37-.34.6-.79,1.08-1.35,1.41-.56.34-1.22.57-1.97.68s-1.54.17-2.37.17-1.57-.07-2.29-.21c-.72-.14-1.35-.38-1.88-.73-.53-.35-.95-.83-1.26-1.43-.31-.6-.46-1.36-.46-2.27v-3.46h4.93v3.08c0,.49.1.79.29.92Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m18.92,9.7h5.34v3.78h-5.34v5.43h5.72v4.16h-10.65V.8h10.65v4.13h-5.72v4.77Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m34.94,15.36v-.06c-.02-.08-.03-.22-.03-.41V.83h3.97v22.25h-6.17l-2.29-14.56-.25.03v.03c.02.06.03.13.03.19v14.3h-3.97V.83h6.17l2.29,14.53h.25Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m52.26,20.73c-.23.59-.57,1.06-1.02,1.41s-1,.59-1.65.73c-.66.14-1.43.21-2.32.21h-6.8V.8h6.8c.89,0,1.66.07,2.32.21.66.14,1.21.38,1.65.73s.78.82,1,1.4.33,1.32.33,2.21v13.19c0,.89-.11,1.62-.32,2.19Zm-5.37-1.81c.3,0,.53-.09.7-.29.17-.19.25-.43.25-.73V5.98c0-.3-.08-.54-.25-.75-.17-.2-.4-.3-.7-.3h-1.59v13.98h1.59Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m59.12.8h4.93v22.28h-4.93V.8Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m65.8,4.93V.8h12.11v4.13h-3.66v18.15h-4.83V4.93h-3.62Z"
        fill="#f7cb3f"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

function MakeWaves() {
  return (
    <svg
      id="uuid-3a19aba4-517c-4ce0-b9da-b3af3d35af43"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260.96 44.22"
    >
      <path
        d="m26.82,15.67l.06-.12h-.48l-.06.06c-.28,1.63-.47,3.26-.57,4.87-.1,1.61-.23,3.24-.39,4.87l-1.62,17.7h-9.8l-1.67-17.7c-.12-1.51-.23-3.05-.33-4.6-.1-1.55-.27-3.09-.51-4.6l-.06-.06h-.42v26.96H3.51V1.21h12.26c.24,2.43.5,5.02.78,7.77.28,2.75.56,5.53.84,8.34s.54,5.59.78,8.34.44,5.34.6,7.77h.24c.08-.96.17-2.07.27-3.35.1-1.28.2-2.59.3-3.95.1-1.35.2-2.67.3-3.95.1-1.27.21-2.39.33-3.35l1.73-17.64h12.32v41.85h-7.41V15.67Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m52.23,35.76h-6.46l-.84,7.29h-8.31L41.95,1.15h14.17l5.2,41.91h-8.31l-.78-7.29Zm-3.11-26.3h-.24c-.32,3.31-.69,6.59-1.11,9.83-.42,3.25-.85,6.51-1.29,9.77v.06h4.96v-.06c-.44-3.27-.86-6.53-1.26-9.77-.4-3.25-.76-6.53-1.08-9.83Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m89.18,42.7l.12.36h-9.21l-4.54-17.22h-1.91v17.22h-9.27V1.15h9.27v17.22h1.91l3.77-17.22h8.97l-3.11,14.11c-.16.68-.32,1.29-.48,1.82-.16.54-.32,1.09-.48,1.64-.16.52-.29,1.05-.39,1.58s-.15,1.15-.15,1.82c.24.92.5,1.91.78,2.99.28.92.58,1.95.9,3.11.32,1.16.64,2.37.96,3.65.32,1.24.64,2.46.96,3.68.32,1.22.62,2.32.9,3.32s.51,1.83.69,2.51.29,1.12.33,1.32Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m101.61,17.89h10.04v7.11h-10.04v10.22h10.76v7.83h-20.03V1.15h20.03v7.77h-10.76v8.97Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m163.42,1.21l-4.24,41.85h-13.27c-.32-4.9-.65-9.76-.99-14.59-.34-4.82-.65-9.68-.93-14.59h-.24c-.24,4.9-.54,9.77-.9,14.59-.36,4.82-.7,9.68-1.02,14.59h-13.33L124.33,1.21h8.85c.2,2.55.39,5.26.57,8.13s.37,5.78.57,8.73c.2,2.95.4,5.86.6,8.73.2,2.87.38,5.6.54,8.19h.24c.16-2.59.35-5.32.57-8.19.22-2.87.44-5.78.66-8.73s.45-5.86.69-8.73.46-5.58.66-8.13h11.24c.2,2.55.42,5.26.66,8.13.24,2.87.48,5.78.72,8.73s.47,5.86.69,8.73c.22,2.87.41,5.6.57,8.19h.24c.16-2.59.34-5.32.54-8.19.2-2.87.4-5.78.6-8.73.2-2.95.4-5.86.6-8.73s.38-5.58.54-8.13h8.79Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m178.49,35.76h-6.46l-.84,7.29h-8.31l5.32-41.91h14.17l5.2,41.91h-8.31l-.78-7.29Zm-3.11-26.3h-.24c-.32,3.31-.69,6.59-1.11,9.83-.42,3.25-.85,6.51-1.29,9.77v.06h4.96v-.06c-.44-3.27-.86-6.53-1.26-9.77-.4-3.25-.76-6.53-1.08-9.83Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m199.05,34.98h.24c.56-5.7,1.16-11.34,1.79-16.92.64-5.58,1.28-11.22,1.91-16.92h8.85l-5.08,41.91h-15.18l-5.14-41.91h8.85c.64,5.7,1.28,11.34,1.91,16.92.64,5.58,1.26,11.22,1.85,16.92Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m224.1,17.89h10.04v7.11h-10.04v10.22h10.76v7.83h-20.03V1.15h20.03v7.77h-10.76v8.97Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m247.71,36.24c.36.28,1,.42,1.91.42.76,0,1.25-.22,1.46-.66.22-.44.33-.98.33-1.61.04-.2.05-.41.03-.63-.02-.22-.03-.43-.03-.63,0-.8-.23-1.6-.69-2.42-.46-.82-1.03-1.59-1.71-2.33-.68-.74-1.4-1.43-2.18-2.09-.78-.66-1.46-1.23-2.06-1.7-.88-.76-1.72-1.54-2.54-2.36-.82-.82-1.54-1.68-2.15-2.6-.62-.92-1.12-1.89-1.49-2.93s-.61-2.15-.69-3.35c-.08-.72-.1-1.43-.06-2.15.04-.72.06-1.46.06-2.21,0-1.83.32-3.32.96-4.45.64-1.14,1.49-2.02,2.57-2.66,1.08-.64,2.32-1.07,3.74-1.29,1.41-.22,2.9-.33,4.45-.33s3,.14,4.33.42c1.34.28,2.49.75,3.47,1.4.97.66,1.75,1.54,2.33,2.66.58,1.12.87,2.53.87,4.25v6.52h-9.21v-5.8c0-.92-.18-1.5-.54-1.76-.36-.26-1-.39-1.91-.39-.8,0-1.31.26-1.53.78-.22.52-.33,1.1-.33,1.73,0,.96.11,1.81.33,2.57.22.76.52,1.46.9,2.12s.86,1.29,1.44,1.88c.58.6,1.22,1.22,1.94,1.85.36.36.72.69,1.08.99.36.3.7.59,1.02.87.8.72,1.59,1.47,2.39,2.27.8.8,1.5,1.64,2.12,2.54.62.9,1.13,1.85,1.55,2.87.42,1.02.67,2.08.75,3.2.08.68.1,1.35.06,2-.04.66-.06,1.33-.06,2,0,1.83-.32,3.32-.96,4.45-.64,1.14-1.48,2.02-2.54,2.66-1.06.64-2.29,1.07-3.71,1.29-1.42.22-2.9.33-4.45.33s-2.95-.13-4.3-.39c-1.36-.26-2.53-.72-3.53-1.38-1-.66-1.79-1.55-2.36-2.69-.58-1.14-.87-2.56-.87-4.27v-6.52h9.27v5.8c0,.92.18,1.49.54,1.73Z"
        fill="#f1e6d8"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m23.57,15.7l.06-.12h-.48l-.06.06c-.28,1.63-.47,3.26-.57,4.87s-.23,3.24-.39,4.87l-1.61,17.7h-9.8l-1.67-17.7c-.12-1.51-.23-3.05-.33-4.6-.1-1.55-.27-3.09-.51-4.6l-.06-.06h-.42v26.96H.25V1.23h12.26c.24,2.43.5,5.02.78,7.77s.56,5.53.84,8.34c.28,2.81.54,5.59.78,8.34.24,2.75.44,5.34.6,7.77h.24c.08-.96.17-2.07.27-3.35.1-1.28.2-2.59.3-3.95.1-1.35.2-2.67.3-3.95.1-1.27.21-2.39.33-3.35l1.73-17.64h12.31v41.85h-7.41V15.7Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m48.97,35.78h-6.46l-.84,7.29h-8.31L38.69,1.17h14.17l5.2,41.91h-8.31l-.78-7.29Zm-3.11-26.3h-.24c-.32,3.31-.69,6.59-1.11,9.83-.42,3.25-.85,6.51-1.29,9.77v.06h4.96v-.06c-.44-3.27-.86-6.53-1.25-9.77-.4-3.25-.76-6.53-1.08-9.83Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m85.92,42.72l.12.36h-9.21l-4.54-17.22h-1.91v17.22h-9.27V1.17h9.27v17.22h1.91l3.77-17.22h8.97l-3.11,14.11c-.16.68-.32,1.29-.48,1.82-.16.54-.32,1.09-.48,1.64-.16.52-.29,1.05-.39,1.58s-.15,1.15-.15,1.82c.24.92.5,1.91.78,2.99.28.92.58,1.95.9,3.11.32,1.16.64,2.37.96,3.65.32,1.24.64,2.46.96,3.68.32,1.22.62,2.32.9,3.32.28,1,.51,1.83.69,2.51.18.68.29,1.12.33,1.32Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m98.35,17.91h10.04v7.11h-10.04v10.22h10.76v7.83h-20.03V1.17h20.03v7.77h-10.76v8.97Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m160.16,1.23l-4.24,41.85h-13.27c-.32-4.9-.65-9.76-.99-14.59-.34-4.82-.65-9.68-.93-14.59h-.24c-.24,4.9-.54,9.77-.9,14.59-.36,4.82-.7,9.68-1.02,14.59h-13.33L121.07,1.23h8.85c.2,2.55.39,5.26.57,8.13s.37,5.78.57,8.73.4,5.86.6,8.73c.2,2.87.38,5.6.54,8.19h.24c.16-2.59.35-5.32.57-8.19.22-2.87.44-5.78.66-8.73s.45-5.86.69-8.73c.24-2.87.46-5.58.66-8.13h11.24c.2,2.55.42,5.26.66,8.13.24,2.87.48,5.78.72,8.73.24,2.95.47,5.86.69,8.73.22,2.87.41,5.6.57,8.19h.24c.16-2.59.34-5.32.54-8.19.2-2.87.4-5.78.6-8.73s.4-5.86.6-8.73.38-5.58.54-8.13h8.79Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m175.23,35.78h-6.46l-.84,7.29h-8.31l5.32-41.91h14.17l5.2,41.91h-8.31l-.78-7.29Zm-3.11-26.3h-.24c-.32,3.31-.69,6.59-1.11,9.83-.42,3.25-.85,6.51-1.29,9.77v.06h4.96v-.06c-.44-3.27-.86-6.53-1.25-9.77-.4-3.25-.76-6.53-1.08-9.83Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m195.79,35h.24c.56-5.7,1.15-11.34,1.79-16.92.64-5.58,1.28-11.22,1.91-16.92h8.85l-5.08,41.91h-15.19l-5.14-41.91h8.85c.64,5.7,1.28,11.34,1.91,16.92.64,5.58,1.26,11.22,1.85,16.92Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m220.84,17.91h10.04v7.11h-10.04v10.22h10.76v7.83h-20.03V1.17h20.03v7.77h-10.76v8.97Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
      <path
        d="m244.46,36.26c.36.28,1,.42,1.91.42.76,0,1.24-.22,1.46-.66.22-.44.33-.98.33-1.61.04-.2.05-.41.03-.63-.02-.22-.03-.43-.03-.63,0-.8-.23-1.6-.69-2.42-.46-.82-1.03-1.59-1.7-2.33-.68-.74-1.41-1.43-2.18-2.09-.78-.66-1.46-1.23-2.06-1.7-.88-.76-1.72-1.54-2.54-2.36-.82-.82-1.54-1.68-2.15-2.6-.62-.92-1.12-1.89-1.49-2.93-.38-1.04-.61-2.15-.69-3.35-.08-.72-.1-1.43-.06-2.15.04-.72.06-1.46.06-2.21,0-1.83.32-3.32.96-4.45s1.5-2.02,2.57-2.66c1.08-.64,2.32-1.07,3.74-1.29,1.42-.22,2.9-.33,4.46-.33s3,.14,4.33.42c1.33.28,2.49.75,3.47,1.4.98.66,1.75,1.54,2.33,2.66.58,1.12.87,2.53.87,4.25v6.52h-9.21v-5.8c0-.92-.18-1.5-.54-1.76-.36-.26-1-.39-1.91-.39-.8,0-1.31.26-1.52.78-.22.52-.33,1.1-.33,1.73,0,.96.11,1.81.33,2.57.22.76.52,1.46.9,2.12.38.66.86,1.29,1.43,1.88.58.6,1.23,1.22,1.94,1.85.36.36.72.69,1.08.99s.7.59,1.02.87c.8.72,1.59,1.47,2.39,2.27.8.8,1.5,1.64,2.12,2.54.62.9,1.14,1.85,1.55,2.87s.67,2.08.75,3.2c.08.68.1,1.35.06,2s-.06,1.33-.06,2c0,1.83-.32,3.32-.96,4.45-.64,1.14-1.48,2.02-2.54,2.66-1.06.64-2.29,1.07-3.71,1.29-1.41.22-2.9.33-4.45.33s-2.95-.13-4.3-.39c-1.36-.26-2.53-.72-3.53-1.38-1-.66-1.78-1.55-2.36-2.69s-.87-2.56-.87-4.27v-6.52h9.27v5.8c0,.92.18,1.49.54,1.73Z"
        fill="#fff"
        stroke="#2d1d16"
        strokeMiterlimit="10"
        strokeWidth=".5"
      />
    </svg>
  );
}

export default Build;
