export const specialTreatmentRooms = [
        {
            id: 1,
            name: "Operating Room 1",
            beds: [
                { id: 1, isAvailable: true },
            ]
        },
        {
            id: 2,
            name: "Operating Room 2",
            beds: [
                { id: 1, isAvailable: false },  // Bed 1 is now unavailable
            ]
        },
        {
            id: 3,
            name: "Operating Room 3",
            beds: [
                { id: 1, isAvailable: true },
            ]
        },
        {
            id: 4,
            name: "Post-Anesthesia Care Unit (PACU) 1",
            beds: [
                { id: 1, isAvailable: false },  // Bed 1 is now unavailable
                { id: 2, isAvailable: true },
                { id: 3, isAvailable: false },  // Bed 3 is now unavailable
                { id: 4, isAvailable: true },
                { id: 5, isAvailable: true },
                { id: 6, isAvailable: true },
                { id: 7, isAvailable: true },
                { id: 8, isAvailable: false },  // Bed 8 is now unavailable
                { id: 9, isAvailable: true },
                { id: 10, isAvailable: true }
            ]
        },
        {
            id: 5,
            name: "Post-Anesthesia Care Unit (PACU) 2",
            beds: [
                { id: 1, isAvailable: true },
                { id: 2, isAvailable: true },
                { id: 3, isAvailable: true },
                { id: 4, isAvailable: false },  // Bed 4 is now unavailable
                { id: 5, isAvailable: true },
                { id: 6, isAvailable: true },
                { id: 7, isAvailable: true },
                { id: 8, isAvailable: true },
                { id: 9, isAvailable: true },
                { id: 10, isAvailable: false }  // Bed 10 is now unavailable
            ]
        },
        {
            id: 6,
            name: "Intensive Care Unit (ICU) 1",
            beds: [
                { id: 1, isAvailable: true },
                { id: 2, isAvailable: true },
                { id: 3, isAvailable: true },
                { id: 4, isAvailable: false },  // Bed 4 is now unavailable
                { id: 5, isAvailable: true },
                { id: 6, isAvailable: true },
                { id: 7, isAvailable: true },
                { id: 8, isAvailable: true },
                { id: 9, isAvailable: true },
                { id: 10, isAvailable: true },
                { id: 11, isAvailable: true },
                { id: 12, isAvailable: true },
                { id: 13, isAvailable: true },
                { id: 14, isAvailable: true },
                { id: 15, isAvailable: true },
                { id: 16, isAvailable: true },
                { id: 17, isAvailable: true },
                { id: 18, isAvailable: true },
                { id: 19, isAvailable: true },
                { id: 20, isAvailable: true }
            ]
        },
        {
            id: 7,
            name: "Intensive Care Unit (ICU) 2",
            beds: [
                { id: 1, isAvailable: true },
                { id: 2, isAvailable: true },
                { id: 3, isAvailable: true },
                { id: 4, isAvailable: true },
                { id: 5, isAvailable: true },
                { id: 6, isAvailable: true },
                { id: 7, isAvailable: true },
                { id: 8, isAvailable: true },
                { id: 9, isAvailable: false },  // Bed 9 is now unavailable
                { id: 10, isAvailable: true },
                { id: 11, isAvailable: true },
                { id: 12, isAvailable: true },
                { id: 13, isAvailable: true },
                { id: 14, isAvailable: true },
                { id: 15, isAvailable: true },
                { id: 16, isAvailable: true },
                { id: 17, isAvailable: true },
                { id: 18, isAvailable: true },
                { id: 19, isAvailable: true },
                { id: 20, isAvailable: true }
            ]
        },
    {
      id: 10,
      name: "Isolation Room 1",
      beds: [
        { id: 1, isAvailable: true }
      ]
    },
    {
      id: 11,
      name: "Isolation Room 2",
      beds: [
        { id: 1, isAvailable: true }
      ]
    },
    {
      id: 12,
      name: "Burn Unit 1",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true }
      ]
    },
    {
      id: 13,
      name: "Burn Unit 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true }
      ]
    },
    {
      id: 14,
      name: "Neonatal Intensive Care Unit (NICU) 1",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true },
        { id: 11, isAvailable: true },
        { id: 12, isAvailable: true }
      ]
    },
    {
      id: 15,
      name: "Neonatal Intensive Care Unit (NICU) 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true },
        { id: 11, isAvailable: true },
        { id: 12, isAvailable: true }
      ]
    },
    {
      id: 16,
      name: "Dialysis Room 1",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true }
      ]
    },
    {
      id: 17,
      name: "Dialysis Room 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true }
      ]
    },
    {
      id: 18,
      name: "Chemotherapy Suite 1",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true }
      ]
    },
    {
      id: 19,
      name: "Chemotherapy Suite 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true }
      ]
    },
    {
      id: 20,
      name: "Rehabilitation Room 1",
      beds: [
        { id: 1, isAvailable: false },
        { id: 2, isAvailable: false},
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: false},
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true }
      ]
    },
    {
      id: 21,
      name: "Rehabilitation Room 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: false},
        { id: 4, isAvailable: false},
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: false}
      ]
    },
    {
      id: 22,
      name: "Cardiology Unit 1",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true }
      ]
    },
    {
      id: 23,
      name: "Cardiology Unit 2",
      beds: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true }
      ]
    },
    {
        id: 24,
        name: "Emergency Room (ER) 1",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false },
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false },
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: false }
        ]
      },
      {
        id: 25,
        name: "Emergency Room (ER) 2",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: true },
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false },
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: true }
        ]
      },
      {
        id: 26,
        name: "Labor and Delivery (L&D) 1",
        beds: [
          { id: 1, isAvailable: false },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: false },
          { id: 4, isAvailable: true },
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false },
          { id: 8, isAvailable: true }
        ]
      },
      {
        id: 27,
        name: "Labor and Delivery (L&D) 2",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false},
          { id: 5, isAvailable: false},
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false},
          { id: 8, isAvailable: true }
        ]
      },
      {
        id: 28,
        name: "Radiology (RAD) 1",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false},
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false}
        ]
      },
      {
        id: 29,
        name: "Radiology (RAD) 2",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: false},
          { id: 4, isAvailable: false}
        ]
      },
      {
        id: 30,
        name: "Psychiatric Hold (PH) 1",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false},
          { id: 3, isAvailable: false},
          { id: 4, isAvailable: false}
        ]
      },
      {
        id: 31,
        name: "Psychiatric Hold (PH) 2",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false},
          { id: 3, isAvailable: false},
          { id: 4, isAvailable: true }
        ]
      },
      {
        id: 32,
        name: "General Ward 1",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false},
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false},
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: true }
        ]
      },
      {
        id: 33,
        name: "General Ward 2",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: false },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false},
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false },
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: false}
        ]
      },
      {
        id: 34,
        name: "General Ward 3",
        beds: [
          { id: 1, isAvailable: false },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false},
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false},
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: false},
          { id: 10, isAvailable: true }
        ]
      },
      {
        id: 35,
        name: "General Ward 4",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: false },
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: false},
          { id: 8, isAvailable: false },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: true }
        ]
      },
      {
        id: 36,
        name: "General Ward 5",
        beds: [
          { id: 1, isAvailable: true },
          { id: 2, isAvailable: true },
          { id: 3, isAvailable: true },
          { id: 4, isAvailable: true },
          { id: 5, isAvailable: true },
          { id: 6, isAvailable: true },
          { id: 7, isAvailable: true },
          { id: 8, isAvailable: true },
          { id: 9, isAvailable: true },
          { id: 10, isAvailable: true }
        ]
      }
  ];