import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

export const CameraSvg = ({
  color = "#192A3E",
  width = 24,
  height = 24,

  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_13_2874)">
        <Path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          fill={color}
        />
        <Path
          d="M20 4H16.83L15.59 2.65C15.22 2.24 14.68 2 14.12 2H9.88C9.32 2 8.78 2.24 8.4 2.65L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_13_2874">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const SearchSvg = ({
  color = "#192A3E",
  width = 24,
  height = 24,

  ...props
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_13_1038)">
        <Path
          d="M15.4996 14.0006H14.7096L14.4296 13.7306C15.6296 12.3306 16.2496 10.4206 15.9096 8.39063C15.4396 5.61063 13.1196 3.39063 10.3196 3.05063C6.08965 2.53063 2.52965 6.09063 3.04965 10.3206C3.38965 13.1206 5.60965 15.4406 8.38965 15.9106C10.4196 16.2506 12.3296 15.6306 13.7296 14.4306L13.9996 14.7106V15.5006L18.2496 19.7506C18.6596 20.1606 19.3296 20.1606 19.7396 19.7506C20.1496 19.3406 20.1496 18.6706 19.7396 18.2606L15.4996 14.0006ZM9.49965 14.0006C7.00965 14.0006 4.99965 11.9906 4.99965 9.50063C4.99965 7.01063 7.00965 5.00063 9.49965 5.00063C11.9896 5.00063 13.9996 7.01063 13.9996 9.50063C13.9996 11.9906 11.9896 14.0006 9.49965 14.0006Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_13_1038">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const LogoutSvg = ({
  color = "#192A3E",
  width = 24,
  height = 24,

  ...props
}) => {
  return (
    <Svg
      className="svg-icon"
      style={{
        verticalAlign: "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill={color}
        d="M835.669333 554.666667h-473.173333A42.453333 42.453333 0 0 1 320 512a42.666667 42.666667 0 0 1 42.474667-42.666667h473.173333l-161.813333-161.834666a42.666667 42.666667 0 0 1 60.330666-60.330667l234.666667 234.666667a42.666667 42.666667 0 0 1 0 60.330666l-234.666667 234.666667a42.666667 42.666667 0 0 1-60.330666-60.330667L835.669333 554.666667zM554.666667 42.666667a42.666667 42.666667 0 1 1 0 85.333333H149.525333C137.578667 128 128 137.578667 128 149.482667v725.034666C128 886.4 137.6 896 149.525333 896H554.666667a42.666667 42.666667 0 1 1 0 85.333333H149.525333A106.816 106.816 0 0 1 42.666667 874.517333V149.482667A106.773333 106.773333 0 0 1 149.525333 42.666667H554.666667z"
      />
    </Svg>
  );
};

export const LoginSvg = ({
  color = "#192A3E",
  width = 24,
  height = 24,

  ...props
}) => {
  return (
    <Svg
      className="svg-icon"
      style={{
        verticalAlign: "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M624.112 547.68c9.76-8.768 15.888-21.52 15.888-35.68s-6.144-26.896-15.888-35.68l-160-144a48 48 0 0 0-64.224 71.36L466.912 464H176a48 48 0 1 0 0 96h290.912l-67.024 60.32a48 48 0 1 0 64.224 71.36l160-144zM896 510.912V142.96a48 48 0 0 0-48-48H608a48 48 0 1 0 0 96h192v640H608a48 48 0 1 0 0 96h240a48 48 0 0 0 48-48V510.992v-0.048-0.032z"
        fill={color}
      />
    </Svg>
  );
};
