import React from "react";

interface Props {
  text: string | React.ReactNode;
  styles?: string;
  additionalStyles?: string;
}

interface Typography {
  H1: React.FC<Props>;
  H2: React.FC<Props>;
  H3: React.FC<Props>;
  H4: React.FC<Props>;
  H5: React.FC<Props>;
  P: React.FC<Props>;
  PS: React.FC<Props>;
  PXS: React.FC<Props>;
  Label: React.FC<Props>;
  SubLabel: React.FC<Props>;
}

const H1: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <h1
      className={`${
        styles
          ? styles
          : `text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-[36px] md:leading-[44px] lg:leading-[52px] xl:leading-[60px] transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </h1>
  );
};

const H2: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <h2
      className={`${
        styles
          ? styles
          : `text-3xl md:text-4xl xl:text-5xl leading-[36px] md:leading-[44px] xl:leading-[56px] transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </h2>
  );
};

const H3: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <h3
      className={`${
        styles
          ? styles
          : `text-2xl md:text-[28px] lg:text-4xl md:leading-[34px] lg:leading-[44px] shrink-0 transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </h3>
  );
};

const H4: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <h4
      className={`${
        styles
          ? styles
          : `text-lg sm:text-xl md:text-2xl lg:text-3xl  transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </h4>
  );
};

const H5: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <h5
      className={`${
        styles
          ? styles
          : `text-[15px] leading-[23px] md:text-base  transition-all duration-300ont-sec ${additionalStyles}`
      } `}
    >
      {text}
    </h5>
  );
};

const P: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <p
      className={`${
        styles
          ? styles
          : `text-sm md:text-base xl:text-xl transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </p>
  );
};

const PS: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <p
      className={`${
        styles
          ? styles
          : `text-[15px]md:text-base xl:text-lg transition-all duration-500 ${additionalStyles}`
      } `}
    >
      {text}
    </p>
  );
};

const PXS: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <p
      className={`${
        styles
          ? styles
          : `text-sm xl:text-base transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </p>
  );
};

const Label: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <p
      className={`${
        styles
          ? styles
          : `text-sm transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </p>
  );
};

const SubLabel: React.FC<Props> = ({ text, styles, additionalStyles }) => {
  return (
    <p
      className={`${
        styles
          ? styles
          : `text-[10px] lg:text-xs transition-all duration-300 ${additionalStyles}`
      } `}
    >
      {text}
    </p>
  );
};

const Typography: Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  PS,
  PXS,
  Label,
  SubLabel,
};

export default Typography;