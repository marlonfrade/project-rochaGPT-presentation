import { useState, useEffect } from "react";
import StepOneForm from "./steponeform.jsx";
import StepTwoForm from "./steptwoform.jsx";
import StepThreeForm from "./stepthreeform.jsx";
import StepFourForm from "./stepfourform.jsx";
import StepFiveForm from "./stepfiveform.jsx";
import Loading from "./loading.jsx";
import { v4 as uuidv4 } from "uuid";

const WaitListForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    isUserAgreed: false,
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [activeStep === 1 || activeStep == 5]);

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
            setFormData={setFormData}
            data={formData}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
        break;
      case 3:
        return (
          <StepThreeForm
            setFormData={setFormData}
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
          <>
            {isLoading ? (
              <Loading isLoading={isLoading} />
            ) : (
              <StepFiveForm
                data={formData}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}
          </>
        );
        break;
    }
  };

  return <div>{getActiveStep()}</div>;
};

export default WaitListForm;
