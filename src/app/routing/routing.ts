export const MainRoutes = [
    {
        path:'home',
        loadChildren:() => import('../websites/home/home.module').then(m=>m.HomeModule)
    },
    {
        path:'admin',
        loadChildren:() => import('../websites/admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'register',
        loadChildren:() => import('../websites/register/register.module').then(m=>m.RegisterModule)
    },
    {
        path:'',
        loadChildren:() => import('../websites/login/login.module').then(m=>m.LoginModule)
    },
    {
        path:'apply-leaves',
        loadChildren:() => import('../websites/applyleaves/applyleaves.module').then(m=>m.ApplyleavesModule)
    },
    {
        path:'profile',
        loadChildren:() => import('../websites/profile/profile.module').then(m=>m.ProfileModule)
    },
    {
        path:'view-assignment',
        loadChildren:() => import('../websites/viewassignment/viewassignment.module').then(m=>m.ViewassignmentModule)
    },
    {
        path:'time-sheet',
        loadChildren:() => import('../websites/timesheet/timesheet.module').then(m=>m.TimesheetModule)
    },
    {
        path:'time-entry',
        loadChildren:() => import('../websites/timeentrypage/timeentrypage.module').then(m=>m.TimeentrypageModule)
    },
    {
        path:'candidate-register',
        loadChildren:() => import('../websites/candidatereg/candidatereg.module').then(m=>m.CandidateregModule)
    },
    {
        path:'holiday-calendar',
        loadChildren:() => import('../websites/holiday-calendar/holiday-calendar.module').then(m=>m.HolidayCalendarModule)
    },
    {
        path:'employee-register',
        loadChildren:() => import('../websites/employee-reg/employee-reg.module').then(m=>m.EmployeeRegModule)
    },
    {
        path:'profile-details',
        loadChildren:() => import('../websites/profiledetails/profiledetails.module').then(m=>m.ProfiledetailsModule)
    },
    {
        path:'careers',
        loadChildren:() => import('../websites/careers/careers.module').then(m=>m.CareersModule)
    },
    {
        path:'manager-leaves',
        loadChildren:() => import('../websites/managerleaves/managerleaves.module').then(m=>m.ManagerleavesModule)
    },
    {
        path:'manager-leaves/:id',
        loadChildren:() => import('../websites/managerleaves/managerleaves.module').then(m=>m.ManagerleavesModule)
    },
    {
        path:'colleague',
        loadChildren:() => import('../websites/colleague/colleague.module').then(m=>m.ColleagueModule)
    },

]