import React from 'react';
import { memo } from 'react';
import { BaseEdge, EdgeText, Position, SmoothStepEdgeProps, XYPosition, getSmoothStepPath } from 'reactflow';


function getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  }: {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
  }): [number, number, number, number] {
    const xOffset = Math.abs(targetX - sourceX) / 2;
    const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  
    const yOffset = Math.abs(targetY - sourceY) / 2;
    const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  
    return [centerX, centerY, xOffset, yOffset];
}

const isNumeric = (n: any): n is number => !isNaN(n) && isFinite(n);


const CommonOptionEdge = memo(
  ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    label,
    labelStyle,
    labelShowBg,
    labelBgStyle,
    labelBgPadding,
    labelBgBorderRadius,
    style,
    sourcePosition = Position.Bottom,
    targetPosition = Position.Top,
    markerEnd,
    markerStart,
    pathOptions,
    interactionWidth,
  }: SmoothStepEdgeProps) => {
    const [path, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius: pathOptions?.borderRadius,
      offset: pathOptions?.offset,
    });

    console.log("path, labelX, labelY", path, labelX, labelY)

    const clickHandle = () => {
        alert(1)
    }

    return (
        <>
            <div className="options">
              asdf
            </div>
            <path
                id={id}
                style={style}
                d={path}
                fill="none"
                className="react-flow__edge-path"
                markerEnd={markerEnd}
                markerStart={markerStart}
                onClick={clickHandle}
            />
            {interactionWidth && (
            <path
                d={path}
                fill="none"
                strokeOpacity={0}
                strokeWidth={interactionWidth}
                className="react-flow__edge-interaction"
                onClick={clickHandle}
            />
            )}
            {label && isNumeric(labelX) && isNumeric(labelY) ? (
            <EdgeText
                x={labelX}
                y={labelY}
                label={label}
                labelStyle={labelStyle}
                labelShowBg={labelShowBg}
                labelBgStyle={labelBgStyle}
                labelBgPadding={labelBgPadding}
                labelBgBorderRadius={labelBgBorderRadius}
            />
            ) : null}
        </>
    );
  }
);

CommonOptionEdge.displayName = "CommonOptionEdge"

export default CommonOptionEdge;