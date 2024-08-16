import React from "react";
import { styled } from "@mui/material";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";

export default function StepperIcon({ index, label }) {
  const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
    backgroundColor: "#9a9c9a",
    color: "#fff",
    width: "30px", // Set a fixed width
    height: "30px", // Set a fixed height equal to width
    borderRadius: "50%", // Ensures a perfect circle
    display: "flex", // Center the content
    alignItems: "center", // Vertically center the content
    justifyContent: "center", // Horizontally center the content
    ...(ownerState.active && {
      backgroundColor: "rgb(161, 207, 107)",
      color: "#000",
    }),
    ...(ownerState.completed && {
      backgroundColor: "rgb(161, 207, 107)",
      color: "#000",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className, icon } = props;

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icon}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <StepLabel
      StepIconComponent={(props) => (
        <ColorlibStepIcon {...props} icon={index + 1} />
      )}
    >
      {label}
    </StepLabel>
  );
}
