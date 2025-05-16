export const FileIcon = ({
  className,
  fileType,
  iconFontSize = 36,
}: {
  className: string;
  fileType: string;
  iconFontSize?: number;
}) => {
  return (
    <div className="file-icon">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 303.188 303.188"
        className={className}
      >
        <g>
          {/* Main file body - full opacity */}
          <polygon
            opacity="0.1"
            points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525"
          />

          {/* Document lines - medium opacity */}
          <g>
            <rect
              x="92.817"
              y="166.37"
              opacity="0.3"
              width="49.543"
              height="12.865"
            />
            <rect
              x="92.817"
              y="141.729"
              opacity="0.3"
              width="107.543"
              height="12.865"
            />
            <rect
              x="92.817"
              y="117.087"
              opacity="0.3"
              width="117.551"
              height="12.865"
            />
            <rect
              x="92.817"
              y="92.445"
              opacity="0.3"
              width="82.209"
              height="12.865"
            />
            {/* <rect
                            x="92.817"
                            y="67.804"
                            opacity="0.3"
                            width="117.551"
                            height="12.865"
                        /> */}
          </g>

          {/* Dynamic text for file type - full opacity */}
          <text
            x="151.5"
            y="260"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: `${iconFontSize}px`,
              fontWeight: 'bold',
              textAnchor: 'middle',
            }}
          >
            {fileType}
          </text>

          {/* Header bar - higher opacity */}
          <polygon
            opacity="0.7"
            points="227.64,25.263 32.842,25.263 32.842,0 219.821,0"
          />

          {/* Folded corner - medium opacity */}
          <polygon
            opacity="0.3"
            points="219.821,50.525 270.346,50.525 219.821,0"
          />
        </g>
      </svg>
    </div>
  );
};
