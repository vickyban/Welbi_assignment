import { Ambulation, IResident } from "../entities.interface";

export const mockResidents: IResident[] = [
  {
    id: "1",
    name: "Jeff Winger",
    firstName: "Jeffrey",
    lastName: "Winger",
    preferredName: "Jeff",
    status: "HERE",
    room: "204",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T04:44:10Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T04:44:10Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
        author: "b967b369-bce4-4c35-a8c3-f9a3ecc5ce91",
      },
      {
        status: "Active",
        programId: "117",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Active",
        programId: "1191",
        author: "b967b369-bce4-4c35-a8c3-f9a3ecc5ce91",
      },
      {
        status: "Active",
        programId: "122",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Declined",
        programId: "223",
        author: "1dfb7697-2d7d-472a-96a3-e363cd84aa7f",
      },
      {
        status: "Active",
        programId: "309",
      },
      {
        status: "Active",
        programId: "109",
        author: "dbef4b68-5d7a-431b-894e-22302872e6b1",
      },
      {
        status: "Active",
        programId: "288018872122999304",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "114",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "288097796254335500",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "1192",
        author: "1",
      },
      {
        status: "Active",
        programId: "290001311799181833",
        author: "99b55aa8-bdf6-42d8-b591-847477217e51",
      },
      {
        status: "Active",
        programId: "290017923044475400",
        author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
      },
      {
        status: "Active",
        programId: "291237824806519305",
        author: "b59274b7-f8e0-447c-9457-767df177e88f",
      },
      {
        status: "Active",
        programId: "291200077491339789",
        author: "a8ba4455-f13b-4570-9cfb-3fe9fa4d87bb",
      },
      {
        status: "Active",
        programId: "291198909616751113",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Active",
        programId: "293188660609679880",
        author: "57fc817f-fa13-47e0-8570-ae3d57f1b42d",
      },
      {
        status: "Active",
        programId: "289654114580693517",
        author: "3aeb775e-e3f6-46a2-89a1-80bfc6a2d84b",
      },
    ],
  },
  {
    id: "2",
    name: "Britta Perry",
    firstName: "Britta",
    lastName: "Perry",
    status: "HERE",
    room: "3030-B",
    levelOfCare: "MEMORY",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1982-10-19T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T01:41:50Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T01:41:51Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "114",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Passive",
        programId: "1192",
      },
      {
        status: "Active",
        programId: "122",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Passive",
        programId: "109",
        author: "1",
      },
      {
        status: "Declined",
        programId: "117",
        author: "1",
      },
      {
        status: "Passive",
        programId: "1191",
        author: "1",
      },
      {
        status: "Active",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "290892831121211917",
        author: "e4be0ac1-0841-45b8-b99d-38eb0c13cf8f",
      },
      {
        status: "Declined",
        programId: "305671542237299266",
        author: "890bf02b-006d-4720-983b-9a9b3562ecd6",
      },
      {
        status: "Active",
        programId: "288018872122999304",
        author: "8a565042-444a-43f2-826b-eb89c4952c91",
      },
      {
        status: "Active",
        programId: "290001311799181833",
        author: "8a565042-444a-43f2-826b-eb89c4952c91",
      },
    ],
  },
  {
    id: "3",
    name: "Abed Nadir",
    firstName: "Abed",
    lastName: "Nadir",
    status: "HERE",
    room: "303",
    levelOfCare: "MEMORY",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1989-03-10T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T02:50:36Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T02:50:36Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Active",
        programId: "1191",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Passive",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Passive",
        programId: "223",
        author: "86062a1f-1e45-4d31-a569-379e8da3dd59",
      },
      {
        status: "Active",
        programId: "109",
        author: "dc22cc57-ab4f-4828-9056-b9e9af96fe6d",
      },
      {
        status: "Passive",
        programId: "114",
        author: "1",
      },
      {
        status: "Undefined",
        programId: "291200077491339789",
        author: "a8ba4455-f13b-4570-9cfb-3fe9fa4d87bb",
      },
      {
        status: "Active",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Declined",
        programId: "305678602621420097",
        author: "5621c03c-645c-4be9-b17b-dccbbd7487b2",
      },
      {
        status: "Active",
        programId: "117",
        author: "2b97d975-6788-47a7-847f-800b4c97158c",
      },
      {
        status: "Active",
        programId: "122",
        author: "b3a36742-2a49-42ed-adcd-e656ee0642b7",
      },
    ],
  },
  {
    id: "4",
    name: "Shirley Bennett",
    firstName: "Shirley",
    lastName: "Bennett",
    status: "HERE",
    room: "",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "1971-08-12T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T14:28:58Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T14:28:58Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Active",
        programId: "1192",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "204",
      },
      {
        status: "Declined",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "309",
      },
      {
        status: "Active",
        programId: "109",
        author: "1",
      },
      {
        status: "Active",
        programId: "291198909616751113",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Active",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "293188660609679880",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "122",
        author: "ff0825a4-d49e-4732-9ecc-19d69d93bd33",
      },
      {
        status: "Active",
        programId: "114",
        author: "32a0a1c0-fa36-4755-9a30-6ac3525db274",
      },
    ],
  },
  {
    id: "5",
    name: "Annie Edison",
    firstName: "Anne",
    lastName: "Edison",
    preferredName: "Annie",
    status: "HERE",
    room: "202",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1990-12-19T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T11:32:17Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T11:32:17Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Active",
        programId: "1191",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "109",
      },
      {
        status: "Active",
        programId: "122",
        author: "b8f94e6a-d585-4a87-b0b6-55eef5d8e3d8",
      },
      {
        status: "Active",
        programId: "114",
        author: "32a0a1c0-fa36-4755-9a30-6ac3525db274",
      },
    ],
  },
  {
    id: "6",
    name: "Troy Barnes",
    firstName: "Troy",
    lastName: "Barnes",
    status: "LOA",
    room: "303",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1989-12-04T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T02:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T02:16:10Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T02:16:10Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "114",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Active",
        programId: "1192",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Passive",
        programId: "291198909616751113",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Declined",
        programId: "293188660609679880",
        author: "18166e5f-4b19-44be-97e1-143fdb747afe",
      },
      {
        status: "Active",
        programId: "109",
        author: "71bdfdf7-e771-4521-a997-a6280d30c3ad",
      },
      {
        status: "Active",
        programId: "122",
        author: "5254c6a8-6896-4084-adf7-fabb84747946",
      },
    ],
  },
  {
    id: "7",
    name: "Pierce Hawthorne",
    firstName: "Piercinald",
    lastName: "Hawthorne",
    preferredName: "Pierce",
    status: "HOSPITAL",
    room: "34236",
    levelOfCare: "LONGTERM",
    ambulation: "WHEELCHAIR",
    birthDate: {
      "@ts": "1944-11-27T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T14:13:38Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T14:13:38Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
      },
      {
        status: "Active",
        programId: "118",
      },
      {
        status: "Passive",
        programId: "1192",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Declined",
        programId: "204",
      },
      {
        status: "Active",
        programId: "210",
      },
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Passive",
        programId: "293188660609679880",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "109",
        author: "0d6cc29b-c3d2-4cde-876a-a53dff329a62",
      },
      {
        status: "Active",
        programId: "122",
        author: "8f4dfde7-a069-4fc2-9298-808cf2b5fc0f",
      },
    ],
  },
  {
    id: "8",
    name: "Ben Chang",
    firstName: "Benjamin Franklin",
    lastName: "Chang",
    preferredName: "Ben",
    status: "ISOLATION",
    room: "107",
    levelOfCare: "MEMORY",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1969-02-11T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-24T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-24T16:44:31Z",
    },
    updatedAt: {
      "@ts": "2009-09-24T16:44:31Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "118",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Passive",
        programId: "204",
      },
      {
        status: "Passive",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "293188660609679880",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "109",
        author: "89858509-0a9b-4dde-ae8d-ef6e77740050",
      },
      {
        status: "Active",
        programId: "112",
        author: "b717d7a8-a512-4400-995e-56f2301758bd",
      },
      {
        status: "Active",
        programId: "210",
        author: "3aeb775e-e3f6-46a2-89a1-80bfc6a2d84b",
      },
      {
        status: "Active",
        programId: "122",
        author: "8f4dfde7-a069-4fc2-9298-808cf2b5fc0f",
      },
    ],
  },
  {
    id: "9",
    name: "Craig Pelton",
    firstName: "Craig",
    lastName: "Pelton",
    status: "HERE",
    room: "101",
    levelOfCare: "ASSISTED",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1973-05-24T11:31:07Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-17T19:24:10Z",
    },
    updatedAt: {
      "@ts": "2009-09-17T19:24:10Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "118",
      },
      {
        status: "Passive",
        programId: "123",
      },
      {
        status: "Passive",
        programId: "204",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "109",
        author: "89858509-0a9b-4dde-ae8d-ef6e77740050",
      },
      {
        status: "Active",
        programId: "112",
        author: "f62a4aa7-a2f9-48b3-a678-3c2664623e42",
      },
      {
        status: "Active",
        programId: "214",
        author: "f62a4aa7-a2f9-48b3-a678-3c2664623e42",
      },
      {
        status: "Active",
        programId: "122",
        author: "8f4dfde7-a069-4fc2-9298-808cf2b5fc0f",
      },
    ],
  },
  {
    id: "10",
    name: "Ian Duncan",
    firstName: "Ian",
    lastName: "Duncan",
    status: "LOA",
    room: "103",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1972-03-08T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-05-22T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-05-22T14:40:20Z",
    },
    updatedAt: {
      "@ts": "2009-05-22T14:40:20Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "223",
        author: "48efb0a6-f9e6-4f00-82ae-3efabfe65c47",
      },
      {
        status: "Declined",
        programId: "291198909616751113",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Active",
        programId: "109",
        author: "38fb79a8-dfab-482d-815a-43bfefa1539c",
      },
      {
        status: "Active",
        programId: "214",
        author: "207ea89c-8b93-45fe-8cd5-b5183277968d",
      },
      {
        status: "Active",
        programId: "123",
        author: "8a565042-444a-43f2-826b-eb89c4952c91",
      },
      {
        status: "Active",
        programId: "122",
        author: "8f4dfde7-a069-4fc2-9298-808cf2b5fc0f",
      },
      {
        status: "Active",
        programId: "112",
        author: "2bd91ebd-fbde-46b0-a102-2ec9d67a8bee",
      },
    ],
  },
  {
    id: "11",
    name: "Alex Osborne",
    firstName: "Alexander",
    lastName: "Osborne",
    preferredName: "Alex",
    status: "ISOLATION",
    room: "109",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1981-10-12T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-24T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-09-24T04:14:00Z",
    },
    updatedAt: {
      "@ts": "2009-09-24T04:14:00Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "123",
        author: "4dacda19-bfa6-4660-8530-74e43565c502",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Declined",
        programId: "291200077491339789",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Active",
        programId: "305671368865743424",
        author: "890bf02b-006d-4720-983b-9a9b3562ecd6",
      },
      {
        status: "Active",
        programId: "305678602621420097",
        author: "5621c03c-645c-4be9-b17b-dccbbd7487b2",
      },
      {
        status: "Active",
        programId: "109",
        author: "0a7bc233-2e2c-4fca-8a7f-99eecce5eb04",
      },
      {
        status: "Active",
        programId: "112",
        author: "4ff2fb85-ec9d-44d2-9787-99265ab6b546",
      },
    ],
  },
  {
    id: "12",
    name: "Garrett Lambert",
    firstName: "Garrett",
    lastName: "Lambert",
    status: "HERE",
    room: "208",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1990-08-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-10-08T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-10-08T04:14:00Z",
    },
    updatedAt: {
      "@ts": "2009-10-08T04:14:00Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "123",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "109",
        author: "0a7bc233-2e2c-4fca-8a7f-99eecce5eb04",
      },
    ],
  },
  {
    id: "13",
    name: "Vicki Koontz",
    firstName: "Victoria",
    lastName: "Koontz",
    preferredName: "Vicki",
    status: "HERE",
    room: "211",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1990-09-30T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2011-02-24T07:00:00Z",
    },
    createdAt: {
      "@ts": "2011-02-24T19:46:29Z",
    },
    updatedAt: {
      "@ts": "2011-02-24T19:46:29Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "109",
        author: "d3297415-1c81-4d96-a996-a936273d2bea",
      },
      {
        status: "Active",
        programId: "123",
        author: "8a565042-444a-43f2-826b-eb89c4952c91",
      },
    ],
  },
  {
    id: "14",
    name: "Neil Koontz",
    firstName: "Neil",
    lastName: "Koontz",
    status: "HERE",
    room: "211",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1990-01-11T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2011-01-20T07:00:00Z",
    },
    createdAt: {
      "@ts": "2011-01-20T19:49:31Z",
    },
    updatedAt: {
      "@ts": "2011-01-20T19:49:31Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "214",
      },
      {
        status: "Active",
        programId: "223",
        author: "48efb0a6-f9e6-4f00-82ae-3efabfe65c47",
      },
      {
        status: "Active",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "109",
        author: "84b03d93-e8d1-4a5a-97ae-7525b060ee63",
      },
    ],
  },
  {
    id: "15",
    name: "Leonard Rodriguez",
    firstName: "Leonard",
    lastName: "Rodriguez",
    status: "HERE",
    room: "222",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1925-06-01T07:00:00Z",
    },
    moveInDate: {
      "@ts": "1975-09-18T07:00:00Z",
    },
    createdAt: {
      "@ts": "2009-10-15T16:12:36.935Z",
    },
    updatedAt: {
      "@ts": "2009-10-15T16:12:36.935Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "118",
      },
      {
        status: "Active",
        programId: "123",
      },
      {
        status: "Active",
        programId: "223",
      },
      {
        status: "Active",
        programId: "112",
        author: "dc22cc57-ab4f-4828-9056-b9e9af96fe6d",
      },
      {
        status: "Passive",
        programId: "1191",
        author: "undefined",
      },
      {
        status: "Active",
        programId: "291200077491339789",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Active",
        programId: "109",
        author: "048d4f60-c0c8-45ac-b528-c70165c3c8c0",
      },
    ],
  },
  {
    id: "16",
    name: "Rich Stephenson",
    firstName: "Richard",
    lastName: "Stephenson",
    preferredName: "Rich",
    status: "HERE",
    room: "216",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1976-04-27T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2010-03-18T07:00:00Z",
    },
    createdAt: {
      "@ts": "2010-03-18T16:12:36.935Z",
    },
    updatedAt: {
      "@ts": "2010-03-18T16:12:36.935Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "1191",
        author: "undefined",
      },
      {
        status: "Active",
        programId: "109",
        author: "e1c8cccd-f0d5-42c3-ac9d-d0b37c6c98d9",
      },
    ],
  },
  {
    id: "288018720610058760",
    name: "Josh Cohen",
    firstName: "Josh",
    lastName: "Cohen",
    preferredName: "Juice",
    status: "HERE",
    room: "904",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1976-04-27T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2010-03-18T07:00:00Z",
    },
    createdAt: {
      "@ts": "2021-01-18T01:55:06.368Z",
    },
    updatedAt: {
      "@ts": "2021-01-18T01:55:06.368Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "288018872122999304",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "109",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "288098090335863304",
        author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
      },
      {
        status: "Active",
        programId: "112",
        author: "1",
      },
      {
        status: "Undefined",
        programId: "293188660609679880",
        author: "57fc817f-fa13-47e0-8570-ae3d57f1b42d",
      },
    ],
    author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
  },
  {
    name: "test test",
    firstName: "test",
    lastName: "test",
    preferredName: "test",
    status: "HERE",
    room: "904",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1993-08-04T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2020-01-01T00:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "112",
        author: "1",
      },
      {
        status: "Passive",
        programId: "114",
        author: "1",
      },
      {
        status: "Declined",
        programId: "123",
        author: "f4df52a9-b9da-41af-9f12-887a3336fcf2",
      },
      {
        status: "Declined",
        programId: "291198909616751113",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Passive",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "109",
        author: "4ff2fb85-ec9d-44d2-9787-99265ab6b546",
      },
    ],
    id: "288098901038203405",
    createdAt: {
      "@ts": "2021-01-18T23:09:32.432Z",
    },
    updatedAt: {
      "@ts": "2021-01-18T23:09:32.432Z",
    },
    author: "32f31617-ee26-4948-b1e6-ac32756e09cc",
  },
  {
    name: "Dmitrii Kartashev",
    preferredName: "",
    status: "",
    firstName: "Dmitrii",
    lastName: "Kartashev",
    room: "503",
    birthDate: {
      "@ts": "1991-01-27T04:04:00Z",
    },
    moveInDate: {
      "@ts": "2021-01-30T04:04:49.693Z",
    },
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    id: "289114073329566216",
    attendance: [
      {
        status: "Active",
        programId: "289121324585976328",
        author: "1",
      },
      {
        status: "Declined",
        programId: "223",
        author: "1dfb7697-2d7d-472a-96a3-e363cd84aa7f",
      },
      {
        status: "Active",
        programId: "291200077491339789",
        author: "72f2bb6b-e168-4172-8b4f-6046b94e1658",
      },
      {
        status: "Passive",
        programId: "293188660609679880",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "214",
        author: "207ea89c-8b93-45fe-8cd5-b5183277968d",
      },
      {
        status: "Active",
        programId: "109",
        author: "85b169ea-2611-45f1-a0dc-8a64ee6a7e9a",
      },
    ],
    createdAt: {
      "@ts": "2021-01-30T04:05:16.147Z",
    },
    updatedAt: {
      "@ts": "2021-01-30T04:05:16.147Z",
    },
    author: "1",
  },
  {
    name: "Test Test",
    preferredName: "",
    status: "",
    firstName: "Test",
    lastName: "Test",
    room: "1",
    birthDate: {
      "@ts": "2021-01-30T04:07:35.212Z",
    },
    moveInDate: {
      "@ts": "2021-01-30T04:07:35.212Z",
    },
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    id: "289114232702632460",
    attendance: [
      {
        status: "Active",
        programId: "223",
        author: "ac0cb2a0-c11a-4227-b80f-601ac22eeaa3",
      },
      {
        status: "Active",
        programId: "291198909616751113",
        author: "b8773981-1a9c-40af-b58c-3b6a2eda6ea8",
      },
      {
        status: "Active",
        programId: "109",
        author: "84b03d93-e8d1-4a5a-97ae-7525b060ee63",
      },
    ],
    createdAt: {
      "@ts": "2021-01-30T04:07:48.150Z",
    },
    updatedAt: {
      "@ts": "2021-01-30T04:07:48.150Z",
    },
    author: "1",
  },
  {
    name: "eeee ffff",
    preferredName: "sdfadfafdadf",
    status: "sdfdsadsafdsf####",
    firstName: "eeee",
    lastName: "ffff",
    room: "sdadf",
    birthDate: {
      "@ts": "2021-02-01T10:53:07.019Z",
    },
    moveInDate: {
      "@ts": "2021-02-01T10:53:07.019Z",
    },
    levelOfCare: "ASSISTED",
    ambulation: "CANE",
    id: "289320980306723336",
    attendance: [
      {
        status: "Active",
        programId: "290891116450939405",
        author: "f0520a05-1a9b-4087-920d-1b567167bd36",
      },
      {
        status: "Active",
        programId: "291200077491339789",
        author: "4c3b4555-e41c-449f-ab6d-572d3284992f",
      },
    ],
    createdAt: {
      "@ts": "2021-02-01T10:53:58.052Z",
    },
    updatedAt: {
      "@ts": "2021-02-01T10:53:58.052Z",
    },
    author: "f4df52a9-b9da-41af-9f12-887a3336fcf2",
  },
  {
    name: "bob bob",
    preferredName: "",
    status: "",
    firstName: "bob",
    lastName: "bob",
    room: "401",
    birthDate: {
      "@ts": "2021-02-01T13:01:57.656Z",
    },
    moveInDate: {
      "@ts": "2021-02-01T13:01:57.656Z",
    },
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    id: "289329064516256268",
    attendance: [
      {
        status: "Passive",
        programId: "214",
        author: "4dacda19-bfa6-4660-8530-74e43565c502",
      },
      {
        status: "Passive",
        programId: "1192",
        author: "4dacda19-bfa6-4660-8530-74e43565c502",
      },
      {
        status: "Passive",
        programId: "123",
        author: "4dacda19-bfa6-4660-8530-74e43565c502",
      },
    ],
    createdAt: {
      "@ts": "2021-02-01T13:02:27.732Z",
    },
    updatedAt: {
      "@ts": "2021-02-01T13:02:27.732Z",
    },
    author: "f4df52a9-b9da-41af-9f12-887a3336fcf2",
  },
  {
    name: "Anton Test",
    preferredName: "",
    status: "",
    firstName: "Anton",
    lastName: "Test",
    room: "1",
    birthDate: {
      "@ts": "2021-01-30T04:07:35.212Z",
    },
    moveInDate: {
      "@ts": "2021-01-30T04:07:35.212Z",
    },
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    id: "289654309107270157",
    attendance: [
      {
        status: "Active",
        programId: "289654114580693517",
        author: "b751ca8f-bc5a-419e-9e5e-b28902dbb17e",
      },
      {
        status: "Active",
        programId: "293188660609679880",
        author: "18166e5f-4b19-44be-97e1-143fdb747afe",
      },
    ],
    author: "b751ca8f-bc5a-419e-9e5e-b28902dbb17e",
    createdAt: {
      "@ts": "2021-02-05T03:12:05.122Z",
    },
    updatedAt: {
      "@ts": "2021-02-05T03:12:05.122Z",
    },
  },
  {
    id: "290000938960159245",
    name: "Michelle Slater",
    firstName: "Michelle",
    lastName: "Slater",
    preferredName: "Slater",
    status: "LOA",
    room: "312",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1971-03-12T07:00:00.127Z",
    },
    moveInDate: {
      "@ts": "2021-02-07T03:00:05.127Z",
    },
    createdAt: {
      "@ts": "2021-02-08T23:01:37.125Z",
    },
    updatedAt: {
      "@ts": "2021-02-08T23:01:37.125Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "290001311799181833",
        author: "99b55aa8-bdf6-42d8-b591-847477217e51",
      },
      {
        status: "Passive",
        programId: "109",
        author: "dc22cc57-ab4f-4828-9056-b9e9af96fe6d",
      },
      {
        status: "Passive",
        programId: "114",
        author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
      },
      {
        status: "Active",
        programId: "293188660609679880",
        author: "18166e5f-4b19-44be-97e1-143fdb747afe",
      },
    ],
    author: "99b55aa8-bdf6-42d8-b591-847477217e51",
  },
  {
    id: "290016143297479177",
    preferredName: "The Kid",
    lastName: "Schmid",
    firstName: "Squid",
    room: "999",
    birthDate: {
      "@ts": "2000-01-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-02-09T03:02:30.810Z",
    },
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    name: "[object HTMLInputElement], [object HTMLInputElement]",
    attendance: [
      {
        status: "Active",
        programId: "109",
        author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
      },
      {
        status: "Passive",
        programId: "112",
        author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
      },
      {
        status: "Active",
        programId: "290017923044475400",
        author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
      },
    ],
    createdAt: {
      "@ts": "2021-02-09T03:03:16.220Z",
    },
    updatedAt: {
      "@ts": "2021-02-09T03:03:16.220Z",
    },
    author: "947a27a5-4ac2-454c-b5fb-fbbb105e1651",
  },
  {
    name: "Magnitude",
    firstName: "Magnitude",
    lastName: "Pop Pop!",
    preferredName: "Magnitude",
    room: "1",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1971-03-18T20:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-02-18T20:00:00Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "118",
        author: "4dacda19-bfa6-4660-8530-74e43565c502",
      },
    ],
    id: "290892260308943373",
    createdAt: {
      "@ts": "2021-02-18T19:08:46.875Z",
    },
    updatedAt: {
      "@ts": "2021-02-18T19:08:46.875Z",
    },
    author: "4dacda19-bfa6-4660-8530-74e43565c502",
  },
  {
    name: "Magnitude",
    firstName: "Magnitude",
    lastName: "Pop Pop!",
    room: "1",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1971-03-18T20:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-02-18T20:00:00Z",
    },
    attendance: [],
    id: "290892512846938632",
    createdAt: {
      "@ts": "2021-02-18T19:12:48.126Z",
    },
    updatedAt: {
      "@ts": "2021-02-18T19:12:48.126Z",
    },
    author: "4dacda19-bfa6-4660-8530-74e43565c502",
  },
  {
    name: "Magnitude",
    firstName: "Magnitude",
    lastName: "Pop Pop!",
    room: "1",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1971-03-18T20:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-02-18T20:00:00Z",
    },
    id: "290892557395689997",
    attendance: [],
    createdAt: {
      "@ts": "2021-02-18T19:13:30.739Z",
    },
    updatedAt: {
      "@ts": "2021-02-18T19:13:30.739Z",
    },
    author: "4dacda19-bfa6-4660-8530-74e43565c502",
  },
  {
    name: "Vaughn Miller",
    firstName: "Vaughn",
    lastName: "Miller",
    room: "123344",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "2021-02-22T16:32:36.278Z",
    },
    moveInDate: {
      "@ts": "2021-02-22T16:32:36.278Z",
    },
    id: "291244846153204233",
    attendance: [
      {
        status: "Active",
        programId: "223",
        author: "48efb0a6-f9e6-4f00-82ae-3efabfe65c47",
      },
      {
        status: "Active",
        programId: "214",
        author: "207ea89c-8b93-45fe-8cd5-b5183277968d",
      },
    ],
    createdAt: {
      "@ts": "2021-02-22T16:32:59.456Z",
    },
    updatedAt: {
      "@ts": "2021-02-22T16:32:59.456Z",
    },
    author: "4dacda19-bfa6-4660-8530-74e43565c502",
  },
  {
    firstName: "Andy",
    lastName: "De Mel",
    name: "Andy De Mel",
    room: "445",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1963-04-06T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2000-04-05T00:00:00Z",
    },
    id: "293174832687743501",
    attendance: [
      {
        status: "Active",
        programId: "112",
        author: "fca2bb8f-dac1-4d64-b33a-3be18fdd6b96",
      },
      {
        status: "Active",
        programId: "223",
        author: "1dfb7697-2d7d-472a-96a3-e363cd84aa7f",
      },
    ],
    createdAt: {
      "@ts": "2021-03-15T23:49:18.041Z",
    },
    updatedAt: {
      "@ts": "2021-03-15T23:49:18.041Z",
    },
    author: "9ff3d67a-04b2-4ea6-aaf1-76523f39f71b",
  },
  {
    firstName: "Sam",
    lastName: "De Mel",
    name: "Sam De Mel",
    room: "446",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1921-02-23T05:00:00Z",
    },
    moveInDate: {
      "@ts": "2020-06-18T04:00:00Z",
    },
    id: "293176858531332617",
    attendance: [
      {
        status: "Active",
        programId: "112",
        author: "b967b369-bce4-4c35-a8c3-f9a3ecc5ce91",
      },
      {
        status: "Active",
        programId: "1191",
        author: "7836c747-fecc-47c6-be0e-9a8e633689cb",
      },
      {
        status: "Active",
        programId: "223",
        author: "b2422ec4-6291-4cd0-8449-d3bbbae79bdc",
      },
      {
        status: "Declined",
        programId: "293188660609679880",
        author: "18166e5f-4b19-44be-97e1-143fdb747afe",
      },
    ],
    createdAt: {
      "@ts": "2021-03-16T00:21:30.083Z",
    },
    updatedAt: {
      "@ts": "2021-03-16T00:21:30.083Z",
    },
    author: "9ff3d67a-04b2-4ea6-aaf1-76523f39f71b",
  },
  {
    firstName: "Kamal",
    lastName: "Perera",
    name: "Kamal Perera",
    room: "355",
    levelOfCare: "INDEPENDENT",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "1944-03-22T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2020-09-14T04:00:00Z",
    },
    id: "293244705912652298",
    attendance: [
      {
        status: "Active",
        programId: "112",
        author: "7836c747-fecc-47c6-be0e-9a8e633689cb",
      },
      {
        status: "Active",
        programId: "293245202551800333",
        author: "7836c747-fecc-47c6-be0e-9a8e633689cb",
      },
      {
        status: "Passive",
        programId: "291200077491339789",
        author: "e4be0ac1-0841-45b8-b99d-38eb0c13cf8f",
      },
    ],
    createdAt: {
      "@ts": "2021-03-16T18:19:54.374Z",
    },
    updatedAt: {
      "@ts": "2021-03-16T18:19:54.374Z",
    },
    author: "7836c747-fecc-47c6-be0e-9a8e633689cb",
  },
  {
    name: "Carlos Winger",
    firstName: "Jeffrey",
    lastName: "Winger",
    preferredName: "Jeff",
    status: "HERE",
    room: "204",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    attendance: [],
    id: "305484640788939329",
    createdAt: {
      "@ts": "2021-07-29T20:48:25.871Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T20:48:25.871Z",
    },
    author: "3e3c7707-c262-4297-95b6-459a7b0059c5",
  },
  {
    name: "CARLOS RIVERA",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "CARLITOS",
    status: "Hospital",
    room: "44",
    levelOfCare: "INDEPENDENT",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-16T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-29T00:00:00Z",
    },
    attendance: [
      {
        status: "Declined",
        programId: "223",
        author: "b2422ec4-6291-4cd0-8449-d3bbbae79bdc",
      },
      {
        status: "Active",
        programId: "305676175640887873",
        author: "899b6fd0-59f0-49c9-a1b3-d33df2915597",
      },
    ],
    id: "305485726490821185",
    createdAt: {
      "@ts": "2021-07-29T21:05:41.258Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:05:41.258Z",
    },
    author: "{0}",
  },
  {
    name: "CARLOS RIVERA",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "CARLITOS",
    status: "Hospital",
    room: "44",
    levelOfCare: "INDEPENDENT",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-16T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-29T00:00:00Z",
    },
    attendance: [],
    id: "305485895424803394",
    createdAt: {
      "@ts": "2021-07-29T21:08:22.403Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:08:22.403Z",
    },
    author: "{0}",
  },
  {
    name: "Juan Sebastian",
    firstName: "Rivera",
    lastName: "Ojeda",
    preferredName: "Juanito",
    status: "Loa",
    room: "207",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2014-08-25T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-28T00:00:00Z",
    },
    attendance: [],
    id: "305485947899740736",
    createdAt: {
      "@ts": "2021-07-29T21:09:12.481Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:09:12.481Z",
    },
    author: "{0}",
  },
  {
    name: "alisson",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "CARLITOS",
    status: "HERE",
    room: "434",
    levelOfCare: "ASSISTED",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-06T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-27T04:00:00Z",
    },
    attendance: [],
    id: "305486075838595648",
    createdAt: {
      "@ts": "2021-07-29T21:11:14.492Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:11:14.492Z",
    },
    author: "{0}",
  },
  {
    name: "asdfasdf",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "CARLITOS",
    status: "Loa",
    room: "32",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-01T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "305671542237299266",
        author: "890bf02b-006d-4720-983b-9a9b3562ecd6",
      },
      {
        status: "Active",
        programId: "109",
        author: "d3297415-1c81-4d96-a996-a936273d2bea",
      },
    ],
    id: "305486138631520834",
    createdAt: {
      "@ts": "2021-07-29T21:12:14.378Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:12:14.378Z",
    },
    author: "{0}",
  },
  {
    name: "RUBEN",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "RUB",
    status: "Loa",
    room: "324",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-15T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Undefined",
        programId: "291200077491339789",
        author: "a8ba4455-f13b-4570-9cfb-3fe9fa4d87bb",
      },
    ],
    id: "305489136139108929",
    createdAt: {
      "@ts": "2021-07-29T21:59:52.956Z",
    },
    updatedAt: {
      "@ts": "2021-07-29T21:59:52.956Z",
    },
    author: "{0}",
  },
  {
    name: "Eudelio",
    firstName: "Roberto",
    lastName: "Pupo",
    preferredName: "pupo",
    status: "Loa",
    room: "584",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-15T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-20T04:00:00Z",
    },
    attendance: [
      {
        status: "Passive",
        programId: "291200077491339789",
        author: "19ce08ac-c158-433b-8079-dfb8a58b4c1c",
      },
      {
        status: "Active",
        programId: "290891116450939405",
        author: "319cf105-70b9-4e35-b158-c4ce09c3e3e1",
      },
      {
        status: "Active",
        programId: "112",
        author: "048d4f60-c0c8-45ac-b528-c70165c3c8c0",
      },
    ],
    id: "305510191854518848",
    createdAt: {
      "@ts": "2021-07-30T03:34:33.319Z",
    },
    updatedAt: {
      "@ts": "2021-07-30T03:34:33.319Z",
    },
    author: "{0}",
  },
  {
    name: "JUAN RIVERA",
    firstName: "JUAN",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "HERE",
    room: "456",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-23T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-28T04:00:00Z",
    },
    attendance: [],
    id: "305512864959955521",
    createdAt: {
      "@ts": "2021-07-30T04:17:02.584Z",
    },
    updatedAt: {
      "@ts": "2021-07-30T04:17:02.584Z",
    },
    author: "{0}",
  },
  {
    name: "ANDRES",
    firstName: "JUAN",
    lastName: "ADSF",
    preferredName: "pupo",
    status: "Loa",
    room: "444",
    levelOfCare: "LONGTERM",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-01T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-23T04:00:00Z",
    },
    attendance: [],
    id: "305651566234305089",
    createdAt: {
      "@ts": "2021-07-31T17:01:38.363Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:01:38.363Z",
    },
    author: "{0}",
  },
  {
    name: "Andres Juan",
    firstName: "rivera",
    lastName: "ojeda",
    preferredName: "pupo",
    status: "Loa",
    room: "333",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-31T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-21T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "305676175640887873",
        author: "899b6fd0-59f0-49c9-a1b3-d33df2915597",
      },
      {
        status: "Active",
        programId: "305671542237299266",
        author: "899b6fd0-59f0-49c9-a1b3-d33df2915597",
      },
    ],
    id: "305651626110091842",
    createdAt: {
      "@ts": "2021-07-31T17:02:35.538Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:02:35.538Z",
    },
    author: "{0}",
  },
  {
    name: "CARLOS RIVERA",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "HERE",
    room: "502",
    levelOfCare: "ASSISTED",
    ambulation: "NOLIMITATIONS",
    birthDate: {
      "@ts": "2021-07-14T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-27T04:00:00Z",
    },
    attendance: [],
    id: "305651975407534657",
    createdAt: {
      "@ts": "2021-07-31T17:08:08.646Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:08:08.646Z",
    },
    author: "{0}",
  },
  {
    name: "Javier Ricardo",
    firstName: "Javier",
    lastName: "Ricardo",
    preferredName: "adsfasdf",
    status: "Loa",
    room: "322",
    levelOfCare: "INDEPENDENT",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-01T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [],
    id: "305652019724550720",
    createdAt: {
      "@ts": "2021-07-31T17:08:50.914Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:08:50.914Z",
    },
    author: "{0}",
  },
  {
    name: "Javier Ricardo",
    firstName: "Javier",
    lastName: "Riverado",
    preferredName: "adsf",
    status: "HERE",
    room: "3333",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-07T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-27T04:00:00Z",
    },
    attendance: [],
    id: "305652059741356608",
    createdAt: {
      "@ts": "2021-07-31T17:09:29.078Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:09:29.078Z",
    },
    author: "{0}",
  },
  {
    name: "CARLOS RIVERA",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "RUB",
    status: "Loa",
    room: "156",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-09T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-04T04:00:00Z",
    },
    attendance: [],
    id: "305652483466723906",
    createdAt: {
      "@ts": "2021-07-31T17:16:13.115Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:16:13.115Z",
    },
    author: "{0}",
  },
  {
    name: "Juan Felipe",
    firstName: "Espitia",
    lastName: "Rivera",
    preferredName: "Pipe",
    status: "HERE",
    room: "333",
    levelOfCare: "MEMORY",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "290891116450939405",
        author: "19ce08ac-c158-433b-8079-dfb8a58b4c1c",
      },
    ],
    id: "305652512632865344",
    createdAt: {
      "@ts": "2021-07-31T17:16:40.988Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:16:40.988Z",
    },
    author: "{0}",
  },
  {
    name: "Rita",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "HERE",
    room: "33",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-22T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-22T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "290892831121211917",
        author: "e4be0ac1-0841-45b8-b99d-38eb0c13cf8f",
      },
    ],
    id: "305653283069887041",
    createdAt: {
      "@ts": "2021-07-31T17:28:55.731Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T17:28:55.731Z",
    },
    author: "{0}",
  },
  {
    name: "JUAN go m",
    firstName: "JUAN",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "HERE",
    room: "456",
    levelOfCare: "LONGTERM",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-16T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "305663563377148480",
        author: "890bf02b-006d-4720-983b-9a9b3562ecd6",
      },
    ],
    id: "305671425546519104",
    createdAt: {
      "@ts": "2021-07-31T22:17:17.748Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T22:17:17.748Z",
    },
    author: "{0}",
  },
  {
    name: "Welbi Carlos",
    firstName: "Welbi",
    lastName: "Carlos",
    preferredName: "WelCar",
    status: "Loa",
    room: "555",
    levelOfCare: "ASSISTED",
    ambulation: "WALKER",
    birthDate: {
      "@ts": "2021-07-01T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "305671542237299266",
        author: "890bf02b-006d-4720-983b-9a9b3562ecd6",
      },
    ],
    id: "305671583034245697",
    createdAt: {
      "@ts": "2021-07-31T22:19:47.937Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T22:19:47.937Z",
    },
    author: "{0}",
  },
  {
    name: "CARLOS RIVERA munera",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "Loa",
    room: "333",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "2021-07-08T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-07-30T04:00:00Z",
    },
    attendance: [
      {
        status: "Declined",
        programId: "305676175640887873",
        author: "899b6fd0-59f0-49c9-a1b3-d33df2915597",
      },
      {
        status: "Active",
        programId: "109",
        author: "c903aa8b-0df3-4dcc-98dc-7fbf4231e72c",
      },
    ],
    id: "305676132921901634",
    createdAt: {
      "@ts": "2021-07-31T23:32:07.052Z",
    },
    updatedAt: {
      "@ts": "2021-07-31T23:32:07.052Z",
    },
    author: "{0}",
  },
  {
    name: "CARLOS RIVERA munera",
    firstName: "CARLOS",
    lastName: "RIVERA",
    preferredName: "pupo",
    status: "Loa",
    room: "333",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1991-07-08T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-01-08T04:00:00Z",
    },
    id: "306437109068071488",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-09T09:07:30.456Z",
    },
    updatedAt: {
      "@ts": "2021-08-09T09:07:30.456Z",
    },
    author: "[token]",
  },
  {
    name: "Sanyat Ho",
    firstName: "San",
    lastName: "Ho",
    preferredName: "pupo",
    status: "Loa",
    room: "333",
    levelOfCare: "MEMORY",
    ambulation: "CANE",
    birthDate: {
      "@ts": "1991-07-08T04:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-01-08T04:00:00Z",
    },
    id: "306437148539617856",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-09T09:08:08.097Z",
    },
    updatedAt: {
      "@ts": "2021-08-09T09:08:08.097Z",
    },
    author: "[token]",
  },
  {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    room: "122",
    birthDate: {
      "@ts": "1954-09-17T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    levelOfCare: "MEMORY",
    ambulation: "WALKER",
    id: "306474159076016706",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-09T18:56:24.101Z",
    },
    updatedAt: {
      "@ts": "2021-08-09T18:56:24.101Z",
    },
    author: "token",
  },
  {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    room: "122",
    birthDate: {
      "@ts": "1954-09-17T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    levelOfCare: "MEMORY",
    ambulation: "WALKER",
    id: "306474187727307330",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-09T18:56:51.428Z",
    },
    updatedAt: {
      "@ts": "2021-08-09T18:56:51.428Z",
    },
    author: "token",
  },
  {
    name: "John Doe",
    firstName: "John ",
    lastName: "Doe",
    preferredName: "Joee",
    ambulation: "CANE",
    status: "Active",
    room: "405",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "1996-03-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-11T00:00:00Z",
    },
    attendance: [],
    id: "306512486439322178",
    createdAt: {
      "@ts": "2021-08-10T05:05:35.889Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T05:05:35.889Z",
    },
    author: "fc34a6dc-27d7-43b9-8adb-35677d8846a8",
  },
  {
    name: "Ray Johnson",
    firstName: "Ray",
    lastName: "Johnson",
    preferredName: "Jon",
    ambulation: "CANE",
    status: "Active",
    room: "405",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "1998-01-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-11T00:00:00Z",
    },
    attendance: [],
    id: "306520335992226370",
    createdAt: {
      "@ts": "2021-08-10T07:10:21.837Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:10:21.837Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "hallo Johnson",
    firstName: "Hallo",
    lastName: "Johnson",
    preferredName: "Jon",
    ambulation: "CANE",
    status: "Active",
    room: "409",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "1998-01-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-11T00:00:00Z",
    },
    attendance: [],
    id: "306520495837151808",
    createdAt: {
      "@ts": "2021-08-10T07:12:54.276Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:12:54.276Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "Tom Foley",
    firstName: "Tom",
    lastName: "Eoley",
    preferredName: "Tommy",
    ambulation: "CANE",
    status: "Active",
    room: "52",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "2020-01-03T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-02T00:00:00Z",
    },
    attendance: [],
    id: "306520741132632642",
    createdAt: {
      "@ts": "2021-08-10T07:16:48.206Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:16:48.206Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "Tom Foley",
    firstName: "Tom",
    lastName: "Eoley",
    preferredName: "Tommy",
    ambulation: "CANE",
    status: "Active",
    room: "52",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "2020-01-03T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-02T00:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "109",
        author: "0a1af937-6357-43d8-a584-b0a3fa7238c5",
      },
    ],
    id: "306520763295334976",
    createdAt: {
      "@ts": "2021-08-10T07:17:09.345Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:17:09.345Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "Chris harry",
    firstName: "Chris",
    lastName: "Harry",
    preferredName: "Chris",
    ambulation: "NOLIMITATIONS",
    status: "Active",
    room: "65",
    levelOfCare: "INDEPENDENT",
    birthDate: {
      "@ts": "1995-01-03T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-10T00:00:00Z",
    },
    attendance: [],
    id: "306520825740132928",
    createdAt: {
      "@ts": "2021-08-10T07:18:08.897Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:18:08.897Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "Harry STyles",
    firstName: "Harry",
    lastName: "Styles",
    preferredName: "Styles",
    ambulation: "CANE",
    status: "Active",
    room: "801",
    levelOfCare: "ASSISTED",
    birthDate: {
      "@ts": "1986-08-03T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-14T00:00:00Z",
    },
    attendance: [
      {
        status: "Active",
        programId: "214",
        author: "dfaa3248-025e-4160-bfcd-830fc0a4e22a",
      },
    ],
    id: "306521111230677570",
    createdAt: {
      "@ts": "2021-08-10T07:22:41.149Z",
    },
    updatedAt: {
      "@ts": "2021-08-10T07:22:41.149Z",
    },
    author: "4beded0f-5df7-444b-b3d5-40e89e8455e9",
  },
  {
    name: "Sam D",
    firstName: "Sam",
    lastName: "D",
    preferredName: "Arthha",
    ambulation: "NOLIMITATIONS",
    status: "Active",
    room: "007",
    levelOfCare: "INDEPENDENT",
    birthDate: {
      "@ts": "2021-08-03T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-17T00:00:00Z",
    },
    attendance: [],
    id: "307060390992282177",
    createdAt: {
      "@ts": "2021-08-16T06:14:18.414Z",
    },
    updatedAt: {
      "@ts": "2021-08-16T06:14:18.414Z",
    },
    author: "26174d38-39c6-43e3-9562-3ff5cc6e7255",
  },
  {
    id: "307124699473642050",
    name: "Mazi GburuGburu",
    birthDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    updatedAt: {
      "@ts": "2021-08-16T23:16:27.769Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "mazi",
    lastName: "GburuGburu",
    preferredName: "Mazi",
    status: "HERE",
    room: "204",
    attendance: [
      {
        status: "Active",
        programId: "307127907906486849",
        author: "33a674ce-fad6-48cb-9c98-8f10905bf7b4",
      },
    ],
    createdAt: {
      "@ts": "2021-08-16T23:16:27.769Z",
    },
    author: "[token]",
  },
  {
    name: "Stefen Naidu",
    firstName: "Stefen",
    lastName: "Naidu",
    preferredName: "Steve",
    ambulation: "CANE",
    status: true,
    room: "5",
    levelOfCare: "INDEPENDENT",
    birthDate: {
      "@ts": "2005-01-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-19T00:00:00Z",
    },
    attendance: [],
    id: "307251418192937538",
    createdAt: {
      "@ts": "2021-08-18T08:50:36.154Z",
    },
    updatedAt: {
      "@ts": "2021-08-18T08:50:36.154Z",
    },
    author: "c19fe776-8b5b-4c16-8630-5ad2de3ec49b",
  },
  {
    name: "Raghu Me",
    firstName: "Raghu",
    lastName: "Me",
    preferredName: "Rag",
    ambulation: "CANE",
    status: true,
    room: "57",
    levelOfCare: "INDEPENDENT",
    birthDate: {
      "@ts": "2017-01-01T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-21T00:00:00Z",
    },
    attendance: [],
    id: "307252788393411137",
    createdAt: {
      "@ts": "2021-08-18T09:12:22.870Z",
    },
    updatedAt: {
      "@ts": "2021-08-18T09:12:22.870Z",
    },
    author: "c19fe776-8b5b-4c16-8630-5ad2de3ec49b",
  },
  {
    id: "307406113678033473",
    name: "Ronaldo Messi",
    birthDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T01:49:25.154Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "mazi",
    lastName: "GburuGburu",
    preferredName: "Mazi",
    status: "H",
    room: "204",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T01:49:25.154Z",
    },
    author: "[token]",
  },
  {
    id: "307406336832832065",
    name: "Leo Messi",
    birthDate: {
      "@ts": "1974-11-20T07:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T07:00:00Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "mazi",
    lastName: "GburuGburu",
    preferredName: "Mazi",
    status: "H",
    room: "300",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T01:52:58.077Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T01:52:58.077Z",
    },
    author: "[token]",
  },
  {
    id: "307415987178701378",
    name: "Pedro James",
    birthDate: {
      "@ts": "1974-11-20T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T00:00:00Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "mazi",
    lastName: "GburuGburu",
    preferredName: "Mazi",
    status: "H",
    room: "300",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T04:26:21.220Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:26:21.220Z",
    },
    author: "[token]",
  },
  {
    name: "Divine C Okey-Ikeri ",
    birthDate: {
      "@ts": "1997-04-28T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-05T00:00:00Z",
    },
    ambulation: "WHEELCHAIR",
    levelOfCare: "INDEPENDENT",
    firstName: "Divine",
    lastName: "Okey-Ikeri",
    preferredName: "Divine",
    status: "ISOLATION",
    room: "419",
    id: "307416115685884480",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T04:28:23.898Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:28:23.898Z",
    },
    author: "3a20059a-c92f-4d00-a204-28b4508f16d5",
  },
  {
    name: "Aaron James Ramsey ",
    birthDate: {
      "@ts": "2018-06-20T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-18T00:00:00Z",
    },
    ambulation: "NOLIMITATIONS",
    levelOfCare: "LONGTERM",
    firstName: "Aaron",
    lastName: "Ramsey",
    preferredName: "Aaron",
    status: "LOA",
    room: "404",
    id: "307416317847142977",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T04:31:36.696Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:31:36.696Z",
    },
    author: "3a20059a-c92f-4d00-a204-28b4508f16d5",
  },
  {
    name: "Rochas Goalball",
    birthDate: {
      "@ts": "2015-06-09T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2021-08-25T00:00:00Z",
    },
    ambulation: "WALKER",
    levelOfCare: "ASSISTED",
    firstName: "Rochas",
    lastName: "Goalball",
    preferredName: "Rochas",
    status: "HERE",
    room: "999",
    id: "307416495720235584",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T04:34:26.352Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:34:26.352Z",
    },
    author: "3a20059a-c92f-4d00-a204-28b4508f16d5",
  },
  {
    name: "Carlos Del Piero ",
    birthDate: {
      "@ts": "2017-06-20T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2016-06-20T00:00:00Z",
    },
    ambulation: "NOLIMITATIONS",
    levelOfCare: "INDEPENDENT",
    firstName: "carlos",
    lastName: "Piero",
    preferredName: "Aaron",
    status: "LOA",
    room: "999",
    id: "307416678418874944",
    attendance: [
      {
        status: "Active",
        programId: "307127907906486849",
        author: "33a674ce-fad6-48cb-9c98-8f10905bf7b4",
      },
    ],
    createdAt: {
      "@ts": "2021-08-20T04:37:20.586Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:37:20.586Z",
    },
    author: "3a20059a-c92f-4d00-a204-28b4508f16d5",
  },
  {
    id: "307416760713216578",
    name: "dan James",
    birthDate: {
      "@ts": "2022-11-20T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T00:00:00Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "maz",
    lastName: "James",
    preferredName: "Mazi",
    status: "H",
    room: "300",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T04:38:39.072Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T04:38:39.072Z",
    },
    author: "[token]",
  },
  {
    id: "307438358356820546",
    name: "Neymar",
    birthDate: {
      "@ts": "2026-11-20T00:00:00Z",
    },
    moveInDate: {
      "@ts": "2009-09-17T00:00:00Z",
    },
    ambulation: "CANE",
    levelOfCare: "INDEPENDENT",
    firstName: "maz",
    lastName: "James",
    preferredName: "Mazi",
    status: "H",
    room: "300",
    attendance: [],
    createdAt: {
      "@ts": "2021-08-20T10:21:56.158Z",
    },
    updatedAt: {
      "@ts": "2021-08-20T10:21:56.158Z",
    },
    author: "3a20059a-c92f-4d00-a204-28b4508f16d5",
  },
];
