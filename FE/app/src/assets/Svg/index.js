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

export const LogoutSvg = ({
  color = "#192A3E",
  width = 24,
  height = 24,

  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={width} height={height} fill="white" fillOpacity={0.01} />
      <Path
        d="M23.9917 6L6 6L6 42H24"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33 33L42 24L33 15"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 23.9917H42"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DeleteSvg = ({
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
      <G clipPath="url(#clip0_13_530)">
        <Path
          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_13_530">
          <Rect width={width} height={height} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const BackArrowSvg = ({
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
      <G clipPath="url(#clip0_13_3550)">
        <Path
          d="M19.0005 11.0007H7.83047L12.7105 6.1207C13.1005 5.7307 13.1005 5.0907 12.7105 4.7007C12.3205 4.3107 11.6905 4.3107 11.3005 4.7007L4.71047 11.2907C4.32047 11.6807 4.32047 12.3107 4.71047 12.7007L11.3005 19.2907C11.6905 19.6807 12.3205 19.6807 12.7105 19.2907C13.1005 18.9007 13.1005 18.2707 12.7105 17.8807L7.83047 13.0007H19.0005C19.5505 13.0007 20.0005 12.5507 20.0005 12.0007C20.0005 11.4507 19.5505 11.0007 19.0005 11.0007Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_13_3550">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
