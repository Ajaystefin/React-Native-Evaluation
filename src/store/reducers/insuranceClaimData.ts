import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InsuranceType } from '@src/models/insuranceType';

type InsuranceClaimData = {
  refNo: string;
  idNo: string;
  claimType: InsuranceType | null;
};

const initialState: InsuranceClaimData = {
  refNo: '',
  idNo: '',
  claimType: null,
};

export const insuranceClaimDataSlice = createSlice({
  initialState,
  name: 'insuranceClaimData',
  reducers: {
    resetClaimData: () => initialState,
    setRefNo: (state, { payload }: PayloadAction<string>) => {
      state.refNo = payload;
    },
    setIdNo: (state, { payload }: PayloadAction<string>) => {
      state.idNo = payload;
    },
    setClaimType: (state, { payload }: PayloadAction<InsuranceType>) => {
      state.claimType = payload;
    },
  },
});

export const {
  actions: { resetClaimData, setRefNo, setIdNo, setClaimType },
  name: insuranceClaimDataName,
  reducer: insuranceClaimData,
} = insuranceClaimDataSlice;
