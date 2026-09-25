import { Calendar, GraduationCap, HelpCircle, Monitor, User } from 'lucide-react'

export const faqNav = [
  {
    slug: 'students',
    label: 'Students',
    icon: GraduationCap,
    tone: 'text-[#1236C2]',
    bg: 'bg-[#EEF3FF]',
    blurb: 'Indexing, entry requirements and the licensing exam.',
  },
  {
    slug: 'practitioners',
    label: 'Practitioners',
    icon: User,
    tone: 'text-[#C01025]',
    bg: 'bg-[#FDECEC]',
    blurb: 'Verification, name changes and log books for qualified staff.',
  },
  {
    slug: 'online-examination',
    label: 'Online Examination',
    icon: Monitor,
    tone: 'text-[#166534]',
    bg: 'bg-[#E7F8EF]',
    blurb: 'How the digital licensing exam works, end to end.',
  },
  {
    slug: 'indexing-guide',
    label: 'Indexing Guide',
    icon: HelpCircle,
    tone: 'text-[#6D28D9]',
    bg: 'bg-[#F3E8FF]',
    blurb: 'Step-by-step portal setup for students and institutions.',
  },
  {
    slug: null,
    label: 'Examination Timetable',
    icon: Calendar,
    tone: 'text-[#B45309]',
    bg: 'bg-[#FFF6DE]',
    blurb: 'Available as a download, not a FAQ page.',
    disabled: true,
  },
]

const electiveTable = {
  type: 'table',
  headers: ['NO.', 'ELECTIVE PROGRAMMES', 'ELECTIVE SUBJECTS'],
  rows: [
    ['a.', 'Science Option', 'Mathematics (Elective) Physics Chemistry Biology'],
    [
      'b.',
      'General Arts Options',
      'Literature in English French Ghanaian Language Christian Religious Studies OR [Islamic Religion/Studies] Economics Geography History Government Mathematics (Elective) General Knowledge in Arts',
    ],
    [
      'c.',
      'Agricultural Programme Option',
      'General Agriculture Chemistry Physics Mathematics (Elective) French',
    ],
    [
      'd.',
      'Home Economics Option',
      'Management in Living Food and Nutrition Economics Chemistry French General Knowledge in Art',
    ],
  ],
}

const sharedItems = [
  {
    question: 'What are the entry requirements for a nursing or a midwifery program?',
    blocks: [{ type: 'p', text: 'Read item number 11 on the downloads page or click here' }],
  },
  {
    question: 'What is indexing?',
    popular: true,
    blocks: [
      {
        type: 'p',
        text: 'It is the process of recording personal data as well as academic qualifications of newly admitted students into a data base and ensuring that the students meet the prescribed entry requirement for the particular programme applied for.',
      },
    ],
  },
  {
    question: 'What is the requirement for indexing as a student Nurse or Midwife',
    blocks: [
      { type: 'p', text: '(a) Nurses Assistant Programmes' },
      {
        type: 'ul',
        items: ['Nurses Assistant (Clinical) (NAC)', 'Nurses Assistant (Preventive) (NAP)'],
      },
      {
        type: 'p',
        text: 'Senior Secondary School Certificate Examination (SSSCE)/West Africa School Certificate Examination (WASCE) results with a minimum of a pass in three (3) Core Subjects (Mathematics, English and Integrated Science) and passes in three (3) elective subjects.',
      },
      { type: 'p', text: '(b) Basic Nursing and Midwifery Programmes' },
      {
        type: 'ul',
        items: [
          'Registered General Nursing (RGN)',
          'Registered midwifery (RM)',
          'Registered Community Nursing (RCN)',
          'Registered Mental Health Nursing (RMN)',
        ],
      },
      {
        type: 'p',
        text: 'A minimum of a Credit in three Core Subjects (Mathematics, English and Integrated Science)',
      },
      {
        type: 'p',
        text: 'A minimum of a Credit in three (3) electives from the following programme options.',
      },
      {
        type: 'ul',
        items: ['Science', 'General Arts', 'Home Economics', 'Agricultural Science'],
      },
      {
        type: 'p',
        text: 'Kindly refer to the table below for the combination of subjects accepted for the various programme options.',
      },
      electiveTable,
    ],
  },
  {
    question: 'What documents are required for indexing?',
    popular: true,
    blocks: [
      { type: 'ul', items: ['Verified result', 'Birth Certificate'] },
      {
        type: 'p',
        text: 'The names and all other details on all documents submitted for indexing must be the same. Where there are inconsistencies, the inconsistencies must be reconciled in a gazette.',
      },
    ],
  },
  {
    question: 'Which Private NMTCs and Programs have been accredited by council',
    blocks: [{ type: 'p', text: 'Read item number 2 on the downloads page or click here' }],
  },
  {
    question: 'How many times can I sit for Licensing Examination',
    popular: true,
    blocks: [{ type: 'p', text: 'As many times as will enable you pass' }],
  },
  {
    question: 'Can I register to re-sit the Licensing Examination in part?',
    blocks: [{ type: 'p', text: 'No. All referred papers must be re-sat at a go.' }],
  },
  {
    question: 'Can I change my Name?',
    blocks: [
      {
        type: 'p',
        text: 'Only female Nurses and Midwives can change their surnames from the maiden to their spouse’s name upon completing a prescribed Form.',
      },
      {
        type: 'p',
        text: 'You are also required to attach the following documents and any other relevant document.',
      },
      {
        type: 'ul',
        items: ['An Application Letter', 'A Gazette publication', 'A Legible Copy of Marriage Certificate'],
      },
    ],
  },
  {
    question: 'What is verification',
    popular: true,
    blocks: [
      {
        type: 'p',
        text: 'It is the processes of ascertaining one’s credentials as a qualified Nurse or Midwife.',
      },
      { type: 'p', text: 'The requirements for verification are:' },
      {
        type: 'ul',
        items: [
          'Applicant’s Name',
          'Name of training institution',
          'Dates of commencement of training and completion',
          'Type of programme and date(s) of Licensing Examinations',
        ],
      },
    ],
  },
  {
    question: 'What is the use of the log book?',
    blocks: [
      {
        type: 'p',
        text: 'The logbooks serve the purpose of keeping track of the practical sessions undertaken by newly qualified nurses during their fifty-two (52) weeks of mandatory internship.',
      },
      {
        type: 'p',
        text: 'Logbooks are given to tutors of training institutions to monitor their knowledge, attitude and clinical skills which is an important element in capacity building for the individual’s speciality area',
      },
    ],
  },
  {
    question: 'Who is qualified to be given a log book and a provisional license',
    blocks: [
      {
        type: 'p',
        text: 'A newly qualified Nurse or Midwife (one who has just passed his/her licensing examination)',
      },
    ],
  },
  {
    question: 'How do I register for the National Service',
    blocks: [
      { type: 'p', text: 'Procedure for registering with the National Service Scheme (NSS)' },
      { type: 'p', text: 'Instructions:' },
      {
        type: 'ul',
        items: [
          'Go to the National Service Scheme (NSS) website – www.nssghana.org',
          'Click on Enrollment',
          'Enter your Pin Code eg:GHS123456 (this code is from the NSS and it is issued by NMC during Registration)',
          'Complete the Registration Form',
          'When completed click on the submit button',
          'Wait a while, a new number (NSS Number) will be generated for you at the top left hand corner of the form',
          'This number would be required when checking your posting online',
        ],
      },
      { type: 'p', text: 'How to check postings with the NSS' },
      {
        type: 'ul',
        items: [
          'Go to the National Service Scheme (NSS) website – www.nssghana.org',
          'Click on postings',
          'Enter your NSS Number',
          'Posting form and letter will appear for printing',
          'Submit it at NSS Regional Office for Registration',
          'Go to the Regional Director of the Health Services (RDHS) for further posting instruction or his/her designated representative. That is, the DDNS in-charge of your respective region.',
        ],
      },
    ],
  },
]

export const faqPages = {
  students: {
    title: 'Students',
    source: 'https://www.nmc.gov.gh/web/students',
    items: sharedItems,
  },
  practitioners: {
    title: 'Practitioners',
    source: 'https://www.nmc.gov.gh/web/professionals',
    items: sharedItems,
  },
  'online-examination': {
    title: 'Online Examination',
    source: 'https://www.nmc.gov.gh/web/online-examination',
    items: [
      {
        question: 'Will students have an opportunity to write their mock online before the start of the main exams?',
        blocks: [
          {
            type: 'p',
            text: 'Yes, the Council would collaborate with various schools for candidates to try their hands on the demo questions in their schools computer labs before the main exams takes off.',
          },
        ],
      },
      {
        question: 'What happens when there is power outage, will students lose their work?',
        blocks: [
          {
            type: 'p',
            text: 'No, answers will be saved at every stage of the examination. And one of the criterion for giving accreditation is for a center to have a standby generator which would be turned on when light goes off. The UPS will support the computer for some time before it goes off.',
          },
        ],
      },
      {
        question: 'Can you change your answers',
        popular: true,
        blocks: [{ type: 'p', text: 'Yes. Candidates have a chance of changing their answers to any option of their choice.' }],
      },
      {
        question: 'Will the practical exams also be digitalized?',
        blocks: [
          {
            type: 'p',
            text: 'Care plan will still be paper base and case study will be written and submitted as it is done. All component task will be uploaded on a tablet which examiners will use to score candidates during the practical examination. This is the part that is digitalized.',
          },
        ],
      },
      {
        question: 'Do we have to go to the exams hall with pens and papers?',
        blocks: [
          {
            type: 'p',
            text: 'For pens yes, which would be used to register, the Council would provide candidates with papers for their rough work after which they will be collected.',
          },
        ],
      },
      {
        question: 'Can candidates enter the examination hall at any time?',
        blocks: [
          {
            type: 'p',
            text: 'No, candidates would be instructed when to enter the exams hall and the exams start as stated on the instructional sheets.',
          },
        ],
      },
      {
        question: 'What happens if a candidate mistakenly clicks on the submit button?',
        popular: true,
        blocks: [
          {
            type: 'p',
            text: 'A confirmation dialogue box will appear for the candidate to confirm if he/she truly wants to submit the work.',
          },
        ],
      },
      {
        question: 'Can a person impersonate a candidate?',
        blocks: [
          {
            type: 'p',
            text: 'No, once a candidate enters his/her password and index number, the picture, name of school and programme would appear on the screen throughout the exams.',
          },
        ],
      },
      {
        question: 'How will candidates participate in the online exams when the school has no accredited computer lab?',
        blocks: [
          {
            type: 'p',
            text: 'Schools that do not have accredited computer labs will have to go to centers that are accredited to write the exams or use the Council’s model computer lab.',
          },
        ],
      },
      {
        question: 'What happens when candidates are more than available/functional computers in the lab?',
        blocks: [
          {
            type: 'p',
            text: 'A school which has candidates more than available/functional computers in the examination center will write in batches until all candidates write.',
          },
        ],
      },
      {
        question: 'Will the results of the examination be known immediately after submitting the final work?',
        popular: true,
        blocks: [
          {
            type: 'p',
            text: 'No, results will be released later and send to the schools as it is done.',
          },
        ],
      },
    ],
    extra: {
      notes: [
        'CPD is ‘continuing’ because learning never stops! CPD is ‘professional’ because it is about maintaining the specialized knowledge and skills that nurses and midwives need in order to carry out their work.',
        'CPD is about ‘development’ because it is about moving towards something better so it will help raise the standards of healthcare across the country.',
        'All Nurse Assistants, Nurses and Midwives wherever they work – in hospitals, clinics, health centres, training schools, universities, nursing & midwifery organizations, commercial companies, charities, orphanages, schools and NGOs are encouraged to pursue CPD programmes from time to time because it is a requirement for renewal of PIN or AIN.',
      ],
      title: 'Excercise files for Online Examination',
      files: [
        ['Examination Instructions', 'Read all Instructins for the Online Examination'],
        ['How to Login', 'Login into the Digital Examination System'],
        ['Navigation', 'Know your way around the system'],
        ['Start Exams', 'What to expect when starting the Examination'],
        ['Exam submission', 'How to submit a finished work'],
        ['Practice yourself', 'Try your hands on the system'],
      ],
      noteTitle: 'Please Note',
      note: 'Due to periodic update of the system, the video you see may not be exactly as you would see when you sit for your exams. What is quaranteed is that features and functionalities remain the same.',
    },
  },
  'indexing-guide': {
    title: 'Indexing Guide',
    source: 'https://www.nmc.gov.gh/web/indexing-guide',
    groups: [
      {
        title: 'Student Indexing Guide',
        steps: [
          {
            title: 'Launch Portal',
            blocks: [
              {
                type: 'p',
                text: "Visit the Council's Website at www.nmc.gov.gh. Our Services >> Online services >> Online Indexing",
              },
            ],
          },
          {
            title: 'Account Creation',
            blocks: [
              {
                type: 'ol',
                items: [
                  'The Institution will assign a voucher code to you via mail. (It is a 16 digit numerical code)',
                  'Check your mail for the voucher',
                  'Fill in the details as required.',
                  'NB: That usernames are unique. If you get an error message "Username already taken" kindly create a new one until you are successful.',
                  'Choose a secure password. NB: More than 6 characters and alpha numeric in nature.',
                  'Confirm password by entering the chosen password again.',
                  'Click Submit',
                ],
              },
            ],
          },
          {
            title: 'Account Login',
            blocks: [
              {
                type: 'p',
                text: 'Login with the user name and password created during the account creation stage',
              },
            ],
          },
        ],
      },
      {
        title: 'Institution Indexing Guide',
        steps: [
          {
            title: 'Launch Portal',
            blocks: [
              {
                type: 'p',
                text: "Visit the Council's Website at www.nmc.gov.gh. Our Services >> Online services >> Online Indexing",
              },
            ],
          },
          {
            title: 'Account Creation',
            blocks: [
              {
                type: 'ol',
                items: [
                  "Provide the Institution's valid official email address to the Council",
                  'NB: Send to indexing@nmc.gov.gh and copy info@nmc.gov.gh',
                  'The Council would send you the account creation link via the mail you provided.',
                  'For Password reset, please send a mail to indexing@nmc.gov.gh. Don not place a telephone call as this could lead to delays.',
                ],
              },
            ],
          },
          {
            title: 'Account Login',
            blocks: [
              {
                type: 'p',
                text: 'Login with the user name and password created during the account creation stage',
              },
            ],
          },
        ],
      },
    ],
  },
}
