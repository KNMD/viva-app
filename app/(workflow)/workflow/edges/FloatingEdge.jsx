import { useCallback } from 'react';
import { useStore, getBezierPath, getSmoothStepPath } from 'reactflow';

import { getEdgeParams } from '../utils/utils.js';


function FloatingEdge({ id, source, target, markerEnd, style }) {
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

  const [edgePath] = getSmoothStepPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    
    <path
      
          fill="none"
          stroke="#50748B"
          markerEnd={markerEnd}
          strokeWidth={1.5}
          style={style}
          d={edgePath}
      />
  );
}

export default FloatingEdge;
