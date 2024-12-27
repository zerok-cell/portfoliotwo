import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandUbuntu,
  IconBrandWindows,
  IconDeviceUnknown,
} from '@tabler/icons-react';
import { OS } from '@mantine/hooks';

const dataOs: Record<OS, JSX.Element> = {
  android: <IconBrandAndroid color="#47ff2b" />,
  linux: <IconBrandUbuntu color="#ff832b" />,
  windows: <IconBrandWindows color="#2b5cff" />,
  macos: <IconBrandApple color="white" />,
  ios: <IconBrandApple color="white" />,
  undetermined: <IconDeviceUnknown color="#ff2b2b" />,
};
export default dataOs;
