import { useState, useEffect } from "react";
import StepOneForm from "./steponeform.jsx";
import StepTwoForm from "./steptwoform.jsx";
import StepThreeForm from "./stepthreeform.jsx";
import StepFourForm from "./stepfourform.jsx";
import StepFiveForm from "./stepfiveform.jsx";
import Loading from "./loading.jsx";

const WaitListForm = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, [activeStep === 1]);

  const getActiveStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <>
            {isLoading ? (
              <Loading isLoading={isLoading} />
            ) : (
              <StepOneForm
                data={formData}
                setFormData={setFormData}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}
          </>
        );
        break;
      case 2:
        return (
          <StepTwoForm
            data={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
        break;
      case 3:
        return (
          <StepThreeForm
            data={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
        break;
      case 4:
        return (
          <StepFourForm
            data={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );

      default:
        return (
          <StepFiveForm
            data={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
        break;
    }
  };

  return <div>{getActiveStep()}</div>;
};

export default WaitListForm;
