import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

interface DraggedFileItem {
  files: FileList;
}

const useDnD = (
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: (item: DraggedFileItem, monitor) => {
      if (monitor) {
        const { files } = monitor.getItem();
        if (files && files.length > 0) {
          handleFileChange({
            target: { files },
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const borderStyle =
    isOver && canDrop ? '1px solid #97BEF4' : '1px dashed #97BEF4';

  return {
    borderStyle,
    drop,
  };
};

export default useDnD;
