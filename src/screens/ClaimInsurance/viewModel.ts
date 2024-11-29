import { useSelector } from 'react-redux';
import { contents } from '@src/context';
import { RootState, useAppDispatch } from '@src/store';
import { styles } from './style';
import { Service } from '@src/models/service';
import { Icons } from '@src/assets/icons';
import {
  setClaimType,
  setIdNo,
  setRefNo,
} from '@src/store/reducers/insuranceClaimData';
import { InsuranceType } from '@src/models/insuranceType';

const useProductsList = () => {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.insuranceClaimData);

  const claimTypes = [
    { title: 'Health Insurance' },
    { title: 'Auto Insurance' },
  ];

  const otherServices: Service[] = [
    { id: 1, title: 'Useful Documents', icon: Icons.DOCUMENT },
    { id: 2, title: 'Tips and Guide', icon: Icons.BULB },
    { id: 3, title: 'Claims History', icon: Icons.HISTORY },
    { id: 4, title: 'Claims Fraud Report', icon: Icons.WARNING },
    { id: 5, title: 'Claim Center Locator', icon: Icons.LOCATION },
    { id: 6, title: 'FAQs and Support', icon: Icons.FAQ },
    { id: 7, title: 'Roadside Assistance', icon: Icons.ROAD },
    { id: 8, title: 'Accident Assistance', icon: Icons.INJURED },
  ];
  const insuranceTypes: InsuranceType[] = [
    { id: 1, title: 'Motor', icon: Icons.CAR },
    { id: 2, title: 'Travel', icon: Icons.PLANE },
    { id: 3, title: 'Medical Malpractice', icon: Icons.STETHESCOPE },
    { id: 4, title: 'Health', icon: Icons.WARNING },
  ];

  const handleRegisterClaim = () => {
    console.log('Claim Registered');
  };

  const onClaimTypeChange = (type: InsuranceType) => {
    dispatch(setClaimType(type));
  };
  const onNationalIdChange = (value: string) => {
    dispatch(setIdNo(value));
  };
  const onCaseRefChange = (value: string) => {
    dispatch(setRefNo(value));
  };

  return {
    contents,
    data,
    handleRegisterClaim,
    styles: styles(),
    emojisWithIcons: claimTypes,
    otherServices,
    onClaimTypeChange,
    insuranceTypes,
    onNationalIdChange,
    onCaseRefChange,
  };
};

export default useProductsList;
