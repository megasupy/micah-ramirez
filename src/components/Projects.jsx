import React from "react";
import "../index.css";

// Needs to be wrapped in a container div of some sort.
export default function Projects() {
  return (
    <div className="default-paragraph-div pt-2">
      <p className="section-header-text">Projects</p>
      <p className="default-text-color">
        <p className="section-header-text-small">Pantry Management App </p>
        ● Implemented 2 interactive pages in React Native and JavaScript,
        handling both the frontend and backend.
        <br/>
        ● Integrated PostgreSQL via Supabase for authentication and database
        management, ensuring secure, user-specific access to data.
        <br/>
        ● Parsed JSON data fetched from TheMealDB API to display 300+ recipes
        dynamically based on user data.
        <br/>
      </p>
      <p className="default-text-color">
        <p className="section-header-text-small">Bash Clone </p>
        ● Developed a custom shell in C, implementing Linux system calls (such
        as fork, exec, pipe, and dup2) for command execution. <br/>
        ● Added support for piping and I/O redirection, enabling seamless
        command chaining. <br/>● Built and tested the shell using a Makefile
        for easy compilation and execution.
      </p>
      <p className="default-text-color">
        <p className="section-header-text-small">
          GMTK Game Jam 2024 Submission: ScaleBot’s Ascent{" "}
        </p>
        ● Designed physics-based movement, dynamic audio systems, and infinite
        procedural level generation for Unity Engine using C#. <br/>
        ● Developed a fully playable game in 48 hours with a team of 3
        developers.
        <br/>
      </p>
    </div>
  );
}
