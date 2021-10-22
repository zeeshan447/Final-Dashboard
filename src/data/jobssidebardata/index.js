import {
  EditOutlined,
  MinusCircleOutlined,
  DislikeOutlined,
  FieldTimeOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { BusinessCenter } from "@material-ui/icons";

export const JobsSidebarData = [
  {
    id: 1,
    name: "Open Jobs",
    icon: <FileOutlined />,
  },

  {
    id: 2,
    name: "Drafts",
    icon: <EditOutlined />,
  },
  {
    id: 3,
    name: "Closed",
    icon: <MinusCircleOutlined />,
  },
  {
    id: 4,
    name: "Pending",
    icon: <FieldTimeOutlined />,
  },
  {
    id: 5,
    name: "Rejected",
    icon: <DislikeOutlined />,
  },
];
