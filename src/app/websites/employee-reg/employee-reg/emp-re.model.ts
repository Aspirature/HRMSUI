

// Employee Details

export interface EmployeeDetails {
    employeeid: number,
    username: string,
    firstname: string,
    lastname: string,
    age: number,
    dateofbirth: string,
    gender: string,
    materialstatus: string,
    personalEmail: string,
    officialEmail: string,
    userid: number,
    roleId: number,
    designation: string,
    department: string,
    homeManagerId: number,
    departmentId: number,
    designationId: number
}


// AddressRow

export interface DynamicAddressRow {
    
    employeeaddressid: number,
    addresstype: string,
    address: string,
    addresslinE1: string,
    addresslinE2: string,
    pincode: string,
    employeeid: number,
    countryid: number,
    stateid: number,
    districtid: number,
    country: string,
    state: string,
    districtname: string
}

// NationalRow

export interface DynamicNationalRow {
    
    employeenationalid: number,
    pannumber: string,
    addharnumber: string,
    voternumber: string,
    passportnumber: string,
    passportexpdate: string,
    passportstartdate: string,
    passportissueoffice: string,
    employeeid: number,
}

// EducationRow

export interface DynamicEducationalRow {
    employeeeducationalid: number,
    coursename: string,
    institutionname: string,
    dateofjoined: string,
    dateofpassedout: string,
    percentage: number,
    institutionaddress: string,
    employeeid: number,
}


// ExperienceRow

export interface DynamicExperienceElement {
    employeeexperienceid: number,
    companyname: string,
    designation: string,
    startdate: string,
    enddate: string,
    totalyearsexp: number,
    lastdrawncts: number,
    employeeid: number,
}

// TravelRow

export interface DynamicTravelRow {
    
    employeenationalid: number,
    pannumber: string,
    addharnumber: string,
    voternumber: string,
    passportnumber: string,
    passportexpdate: string,
    passportstartdate: string,
    passportissueoffice: string,
    employeeid: number,
  }

// EmergencyRow

export interface DynamicEmergencyRow {
    
    employeePersonalId: number,
    dateOfBirth: string,
    placeOfBirth: string,
    employeeId: number,
    bloodGroup: string,
    primaryPhNo: string,
    secondaryPhNo: string,
    emergencyContactName: string,
    emergencyPhNo: string,
    emergencyContactRelation: string
  }


