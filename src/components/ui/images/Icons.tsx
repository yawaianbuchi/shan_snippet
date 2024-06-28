import React from 'react';
import {
  IoChevronDown,
  IoCheckmarkDoneOutline,
  IoEyeOutline,
  IoWarningOutline,
  IoCheckmark,
} from 'react-icons/io5';
import { LuSearch, LuPlusCircle, LuArrowUpRight, LuRefreshCw, LuPalette } from 'react-icons/lu';
import { IoMdLogOut, IoMdNotificationsOutline, IoMdSwap } from 'react-icons/io';
import { FaRegTrashAlt, FaRegTimesCircle, FaRegCopy, FaCalendarAlt } from 'react-icons/fa';
import { HiMiniArrowLongLeft } from 'react-icons/hi2';
import { BiMessageRoundedError } from 'react-icons/bi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MdBlockFlipped, MdOutlineSettingsInputComposite } from 'react-icons/md';
import { IoLogoHtml5 } from 'react-icons/io';
import { CiText } from 'react-icons/ci';

export const Icons = {
  logo: IoLogoHtml5,
  input: MdOutlineSettingsInputComposite,
  text: CiText,
  palette: LuPalette,
  search: LuSearch,
  plus_circle: LuPlusCircle,
  notification: IoMdNotificationsOutline,
  chevron_down: IoChevronDown,
  trash: FaRegTrashAlt,
  check_mark: IoCheckmarkDoneOutline,
  logout: IoMdLogOut,
  times: FaRegTimesCircle,
  eye_open: IoEyeOutline,
  arrow_long: HiMiniArrowLongLeft,
  warning: IoWarningOutline,
  arrowUpRight: LuArrowUpRight,
  check_mark_one: IoCheckmark,
  fileCopy: FaRegCopy,
  calendar: FaCalendarAlt,
  eyeOpen: FiEye,
  eyeClose: FiEyeOff,
  block: MdBlockFlipped,
  swap: IoMdSwap,
  hamburger: () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12H20M4 8H20M4 16H12"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  refresh: LuRefreshCw,
  messageInfo: BiMessageRoundedError,
};
