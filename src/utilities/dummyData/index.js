import moment from 'moment';
import { AppIcons, AppImages } from '../../assets';
import { appStrings } from '../appStrings';
import { SCREEN } from '../../constants';
import { Icon } from 'react-native-elements';

export const onBoardingData = [
  {
    id: 0,
    title: appStrings.onboardingTitle,
    description: appStrings.onboardingDescription1,
    image: AppImages.onboardingImage1,
  },
  {
    id: 1,
    title: appStrings.onboardingTitle,
    description: appStrings.onboardingDescription2,
    image: AppImages.onboardingImage1,
  },
  {
    id: 2,
    title: appStrings.onboardingTitle,
    description: appStrings.onboardingDescription3,
    image: AppImages.onboardingImage1,
  },
];

export const interestsData = [
  {
    id: 1,
    title: 'Sport',
    image: AppImages.interestImage1
  },
  {
    id: 2,
    title: 'Party',
    image: AppImages.interestImage2
  },
  {
    id: 3,
    title: 'Trip',
    image: AppImages.interestImage3
  },
  {
    id: 4,
    title: 'Food',
    image: AppImages.interestImage4
  },
  {
    id: 5,
    title: 'Music',
    image: AppImages.interestImage5
  },
  {
    id: 6,
    title: 'Cold',
    image: AppImages.interestImage6
  },


]

export const eventCategoriesList = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    title: 'Music',
  },
  {
    id: 2,
    title: 'Sports',
  },
  {
    id: 3,
    title: 'Arts',
  },
  {
    id: 4,
    title: 'Travel',
  },
]

// dropdown data
export const eventCategoriesDropdownData = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Music',
    value: 'Music',
  },
  {
    label: 'Sports',
    value: 'Sports',
  },
  {
    label: 'Arts',
    value: 'Arts',
  },
  {
    label: 'Travel',
    value: 'Travel',
  },
]
export const countryData = [
  {
    label: 'Pakistan',
    value: 'Pakistan',
  },
  {
    label: 'America',
    value: 'America',
  },
  {
    label: 'Afghanistan',
    value: 'Afghanistan',
  },
  {
    label: 'Iran',
    value: 'Iran',
  },
  {
    label: 'India',
    value: 'India',
  },
]
export const cityData = [
  {
    label: 'Islamabad',
    value: 'Islamabad',
  },
  {
    label: 'peshawar',
    value: 'peshawar',
  },

]
export const ProvinceData = [
  {
    label: 'KPK',
    value: 'KPK',
  },
  {
    label: 'Punjab',
    value: 'Punjab',
  },

]
export const eventNumberOfInvitation = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Music',
    value: 'Music',
  },
  {
    label: 'Sports',
    value: 'Sports',
  },
  {
    label: 'Arts',
    value: 'Arts',
  },
  {
    label: 'Travel',
    value: 'Travel',
  },
]

export const ageRangeDropdownData = [
  {
    label: '10-18',
    value: '10-18',
  },
  {
    label: '18-25',
    value: '18-25',
  },
  {
    label: '25-32',
    value: '25-32',
  },
]

export const friendListDropdownData = [
  {
    label: 'Yes',
    value: 'Yes',
  },
  {
    label: 'No',
    value: 'No',
  },
]

// event types e.g upcoming,past etc 
export const eventTypesList = [
  {
    id: 0,
    title: 'Upcoming',
  },
  {
    id: 1,
    title: 'Past',
  },
]

export const currentEventsList = [
  {
    id: 0,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true,

  },
  {
    id: 1,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event2,
    userName: "Welfare Community",
    category: 'Social Causes',
    live: true,
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 2,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 3,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 4,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 5,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 6,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 7,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 8,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
  {
    id: 9,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    live: true
  },
]

export const upcomingEventsList = [
  {
    id: 0,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('2', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 1,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event2,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('4', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 2,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('2', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 3,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('5', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 4,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('8', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 5,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('9', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 6,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('2', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 7,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('10', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 8,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('11', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 9,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).add('1', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
]

export const pastEventsData = [
  {
    id: 0,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event1,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).subtract('1', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 1,
    name: 'The welfare society Event',
    date: 'Mon, March 22 - 18:00 - 22:00 ',
    location: '5900 Cubero Dr NE, NY',
    image: AppImages.event2,
    userName: "Welfare Community",
    category: 'Social Causes',
    date: moment(new Date()).subtract('10', 'day'),
    startTime: new Date(),
    endTime: new Date(),
  },
]

// profile screens options list
export const profileOptionsData = [
  {
    id: 0,
    title: 'Saved Events',
    description: 'View the list of saved events',
    icon: AppIcons.heart,
    screenName: SCREEN.savedEvents, // screen to navigate
  },
  {
    id: 1,
    title: 'Invite Friends',
    description: 'Invite friends & family to use this app',
    icon: AppIcons.userPlus,
    screenName: SCREEN.inviteFriends
  },
  {
    id: 2,
    title: 'Need Help?',
    description: 'FAQ Answers for your questions',
    icon: AppIcons.helpCircle,
    screenName: SCREEN.faq, // screen to navigate

  },

  {
    id: 3,
    title: 'Terms & Conditions',
    description: 'Our terms and conditions and privacy policy',
    icon: AppIcons.notes,
    screenName: SCREEN.termsAndConditions, // screen to navigate
  }
]

export const faqsData = [
  {
    id: 0,
    question: 'What is H!Live?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Sit nisl nunc arcu elementum sed. Proin felis integer adipiscing egestas dignissim. Nunc molestie egestas mi in non fringilla. Consequat commodo lectus habitant in tincidunt urna. Ut auctor nisi congue lobortis a a. '
  },
  {
    id: 1,
    question: 'How It works?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Sit nisl nunc arcu elementum sed. Proin felis integer adipiscing egestas dignissim. Nunc molestie egestas mi in non fringilla. Consequat commodo lectus habitant in tincidunt urna. Ut auctor nisi congue lobortis a a. '
  },
  {
    id: 2,
    question: 'How to create events?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Sit nisl nunc arcu elementum sed. Proin felis integer adipiscing egestas dignissim. Nunc molestie egestas mi in non fringilla. Consequat commodo lectus habitant in tincidunt urna. Ut auctor nisi congue lobortis a a. '
  },
  {
    id: 3,
    question: 'How to join event?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Sit nisl nunc arcu elementum sed. Proin felis integer adipiscing egestas dignissim. Nunc molestie egestas mi in non fringilla. Consequat commodo lectus habitant in tincidunt urna. Ut auctor nisi congue lobortis a a. '
  },

]


export const termsAndConditionsData = {
  termsTitle: 'Term & conditions of CoLab',
  termsDescription: 'Lorem ipsum dolor sit amet consectetur. Pellentesque leo leo elementum id augue placerat egestas in interdum. Ac pellentesque purus rhoncus risus habitant elementum odio sodales. Eu id lorem at eget velit orci. Platea integer nibh ultrices netus velit id lorem vulputate. Viverra vulputate ultrices mattis vitae. Cras vitae donec iaculis quam in laoreet. Est ac viverra vulputate vel vel. Turpis pellentesque egestas at amet mauris varius non eu. Facilisis ut ultricies mauris rhoncus pretium eget ut. Sed diam velit nec mi et.{\n}Nulla a at ultricies vitae sit tempus malesuada bibendum turpis. Iaculis cras scelerisque commodo vulputate ultrices orci gravida pharetra. Cursus in fusce vestibulum lacus praesent enim cursus auctor vel. Vulputate praesent sed at ut nulla at fringilla. Vivamus cum sed a volutpat. Risus tellus hendrerit vitae enim. Ut felis pulvinar tempor tempus tellus venenatis pellentesque gravida blandit.',
  privacyTitle: 'Privacy Policy of CoLab',
  privacyDescription: 'Lorem ipsum dolor sit amet consectetur. Pellentesque leo leo elementum id augue placerat egestas in interdum. Ac pellentesque purus rhoncus risus habitant elementum odio sodales. Eu id lorem at eget velit orci. Platea integer nibh ultrices netus velit id lorem vulputate. Viverra vulputate ultrices mattis vitae. Cras vitae donec iaculis quam in laoreet. Est ac viverra vulputate vel vel. Turpis pellentesque egestas at amet mauris varius non eu. Facilisis ut ultricies mauris rhoncus pretium eget ut. Sed diam velit nec mi et.{\n}Nulla a at ultricies vitae sit tempus malesuada bibendum turpis. Iaculis cras scelerisque commodo vulputate ultrices orci gravida pharetra. Cursus in fusce vestibulum lacus praesent enim cursus auctor vel. Vulputate praesent sed at ut nulla at fringilla. Vivamus cum sed a volutpat. Risus tellus hendrerit vitae enim. Ut felis pulvinar tempor tempus tellus venenatis pellentesque gravida blandit.',
}

export const NotificationsData = [
  {
    id: 0,
    userName: 'Welfare Community',
    userProfile: AppIcons.avatar,
    description: 'You got new request to join your event.',
    date: new Date(),
    status: 'pending'
  },
  {
    id: 1,
    userName: 'Welfare Community',
    userProfile: AppIcons.avatar,
    description: 'Your request to join the Technology Summit is Accepted.',
    date: moment(new Date()).subtract(1, 'day'),


  },
  {
    id: 2,
    userName: 'Welfare Community',
    userProfile: AppIcons.avatar,
    description: 'Your request to join the Welfare Event is Accepted.',
    date: moment(new Date()).subtract(1, 'day'),

  },
  {
    id: 3,
    userName: 'Welfare Community',
    userProfile: AppIcons.avatar,
    description: 'You got new Reply on your question asked in Tech Summit',
    date: moment(new Date()).subtract(1, 'day'),

  }

]

export const InvitationScopeData = [
  {
    id: 1,
    km: '10km'
  },
  {
    id: 2,
    km: '20km'
  },
  {
    id: 3,
    km: '30km'
  },
  {
    id: 4,
    km: '40km'
  },
  {
    id: 5,
    km: '50km'
  },
]
export const EventDetailsImagesData = [
  {
    id: 1,
    EventDetailsImages: AppImages.eventDetails1
  },
  {
    id: 2,
    EventDetailsImages: AppImages.eventDetails2
  },
  {
    id: 3,
    EventDetailsImages: AppImages.eventDetails3
  },
  {
    id: 4,
    EventDetailsImages: AppImages.eventDetails4
  },
  {
    id: 5,
    EventDetailsImages: AppImages.eventDetails5
  },
  {
    id: 6,
    EventDetailsImages: AppImages.eventDetails1
  },
  {
    id: 7,
    EventDetailsImages: AppImages.eventDetails2
  },
]
export const PostData = [
  {
    id: 1,
    profileImages: AppImages.eventDetails1,
    postImages: "",
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },
  {
    id: 2,
    profileImages: AppImages.eventDetails1,
    postImages: "",
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },
  {
    id: 3,
    profileImages: AppImages.eventDetails1,
    postImages: AppImages.event1,
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },

]
export const PostCommentData = [
  {
    id: 1,
    profileImages: AppImages.eventDetails1,
    postImages: "",
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },
  {
    id: 2,
    profileImages: AppImages.eventDetails1,
    postImages: AppIcons.avatar,
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },
  {
    id: 3,
    profileImages: AppImages.eventDetails1,
    postImages: "",
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },
  {
    id: 4,
    profileImages: AppImages.eventDetails1,
    postImages: "",
    welfareCommunity: 'Welfare Community',
    description: 'Lorem ipsum dolor sit amet consectetur. In ultricies in viverra erat. Pretium ut est tortor placerat natoque iaculis rhoncus duis tortor. In in quisque mi adipiscing quis.',
    likeCount: 30,
    commentCount: 20,
    usageTime: '2 hour ago'
  },

]

export const MedicineData = [
  {
    id: 1,
    icon: <Icon name='injection-syringe' type='fontisto' />,
    medicineName: "Aspirin",
    usageTime: '08:00 am'
  },
  {
    id: 2,
    icon: <Icon name='bottle-tonic-plus-outline' type='material-community' />,
    medicineName: "Cymbalta",
    usageTime: '08:00 am'
  },
  {
    id: 3,
    icon: <Icon name='injection-syringe' type='fontisto' />,
    medicineName: "Lexapro",
    usageTime: '08:00 am'
  },
  {
    id: 4,
    icon: <Icon name='injection-syringe' type='fontisto' />,
    medicineName: "Codeine",
    usageTime: '08:00 am'
  },
  {
    id: 5,
    icon: <Icon name='injection-syringe' type='fontisto' />,
    medicineName: "Lexapro",
    usageTime: '08:00 am'
  },

]

export const AccordionData = [
  {
    id: 1,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },
  {
    id: 2,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },
  {
    id: 3,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },
  {
    id: 4,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },
  {
    id: 5,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },
  {
    id: 6,
    collapseHeader: "Question Text Here",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.",
  },

];

export const dummyLocations = [
  {
    latitude: 37.7828,
    longitude: -122.433333,
    image: AppImages.inviteFriends1,
  },
  {
    latitude: 37.7941111,
    longitude: -122.4312,
    image: AppImages.inviteFriends2
  },
  {
    latitude: 37.78999,
    longitude: -122.4365,
    image: AppImages.inviteFriends3
  },
  {
    latitude: 37.7891,
    longitude: -122.429,
    image: AppImages.inviteFriends4
  },

];