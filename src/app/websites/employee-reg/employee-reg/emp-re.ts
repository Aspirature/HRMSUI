// AddressRow

export interface DynamicAddressRow {
    title:string;
    dateOfBirth: string;
    placeOfBirth: string;
    bloodGroup: string;
    gender: string;
    maritualStatus: string;
}

// LocationRow

export interface DynamicLocationRow {
    title:string;
    addressLine1: string;
    addressLine2: string;
    country: string;
    district: string;
    state: string;
    pinCode:string 
}

// NationalRow

export interface DynamicNationalRow {
    title:string;
    panNumber: string;
    aadharNumber: string;
    voter: string;
    passport: string;
    passportStartDate: string;
    passportExpiryDate:string;
    passportIssueDate:string;
}

// EducationRow

export interface DynamicEducationalRow {
    title:string;
    institution: string;
    specialization: string;
    yearOfJoining: string;
    yearOfPassout: string;
    percentage: string;
}

// TravelRow

export interface DynamicTravelRow {
    title:string;
    country: string;
    passportNumber: string;
    issueDate: string;
    expiryDate: string;
}

// EmergencyRow

export interface DynamicEmergencyRow {
    title:string;
    emergencyContactNo: string;
    emergencyContactName: string;
    primaryContactNo: string;
    secondaryContactNo: string;
}

// ExperienceRow

export interface DynamicArrayElement {
    title:string;
    companyName: string;
    designation: string;
    startDate: string;
    endDate: string;
    lastDrawnCTC: string;
    payrollCompanyName: string;
    roles: string;
}
