export interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  birthDate: Date;
}

export interface MonthCount {
  name: string;
  number: number;
  friends: Friend[];
}

export const mockFriends: Friend[] = [
  // January
  {
    id: "1",
    name: "Sarah Jenkins",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADRcr9sHSqqzrLF53uCs4CLdQE3YdysS0MeMbOZV2ZRyvPfhv0NJPp6tKGSWUmKT8XZonzesznR6yiBYvsX70Y-8Ay2g2rbBXM740Hlsm7hKEsJvxe3qMXd6NDlTwV6ArV9qg6Tba-kmrBbfwKB0SBYlOXdzZXGr7exWDk_m_RUSDGg-SvrHkLicpPp3NAvrTFuvkR4H7OS33ESAm8ShZfmNSAa9bWxPculMsuqtQA4msW6RF8iyn0potAsxYrUfvrEjdy8umjfQI1",
    birthDate: new Date(1998, 0, 14),
  },
  {
    id: "2",
    name: "Mike Ross",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAribFWBQAYv5WdvGwvbhulzPGz3KtK22BPrb2RMjTKfGtP_3oGjpSHltIjzZlKna16yC9k41as10B_2VgsK1ORy5-l1KwRkSmb0rYv78LUd58ze8DIM50lX7blHKTttUhLeuTDyIz6eD-ljLrExIDksqiCNynG6fxX9O8Pzb6YzrJY2rK9Jc5DsQTlnd8oPvbQbwXu79e_BVxSY4AnEqBaRtJmbSeANd7FkxyBEGMfBvMwXVP7sUXngiinvNdLWevNUJ6hUsNBvDN8",
    birthDate: new Date(2001, 0, 28),
  },

  // March
  {
    id: "3",
    name: "Jessica Lee",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChPCuimavtPhWwGybFSubjsP-r2ETVaBew6lDzGIyo94N3Y1DWixFZCnJz1M8IrfC9LtWN5iyp2n_zrnNsvy3fp5u3nORoQWA4zIkeUwmy0_kWG9zGxDFkYTeQLYAdD1cs5ZE3iSmu5aq9q6FzGmoMSwibjvqIGmn1ObcR1ekcEG854FEGwkeUAn4SnJvxteJdAL99a7zuVEqMa-sCGZNNEqiuuChjv_uCaUVXJ5m_v3hwbaJ11eUtlEQZPOsVviiE8w-qWhNWJPOD",
    birthDate: new Date(1992, 2, 5),
  },
  {
    id: "4",
    name: "Tom Hiddleston",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKV_1756_B5Jsv7CJEY5jSw8Kni5COuioOQsfIQvHi-erbJounJxwyZ9MMRETMpORMrs58l9epFCB9Wzemcz1ZO8fIfo8XBtT_wF08o58RWs4C3eo6od-vSnKJPBVlr2sP7nroLJeI2Db-EqzG0O-ju-3iBcA9z9FXt80CUxerbKKrthlyyvogCCUWa9E0XnA2HM_a84he16w9K_pLz71wqjxY5AbgP5LWqGoKMOTJx-_rOD08ir0m89hdtpFUJ8abbqPZNY1tuIjM",
    birthDate: new Date(1981, 2, 9),
  },

  // April
  {
    id: "5",
    name: "Alex Turner",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR44pHm-5O8rIGJPlUOrox_kZhcK7Fk3ZaqegmsSVfZTaBf0fJYkg59JfeI-qK53Yl8A-wfXPo43-Pt8_j8uQ_-7O-SrqoNdEWg14Idtsoyx-ptc5UppHK2ae1uOuoDP5yiSs_UIIxeXOT92CT7QMUG4WCuoe74ENR7D5WUF_QTsKovu7OGpCB7AzRh9uGmUtMBgGQsTkGsO_zLotRiMsFuwiJ_VTbZNWr2a3La3NcFKwG7cRxAfxavrCXFbddH_DVmNuriNrqGV_1",
    birthDate: new Date(1986, 3, 6),
  },
  {
    id: "6",
    name: "Emily Blunt",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjYyec7Gwvv0FsrpNB-TyQHSEU4fc3shbCok9UI0sbP1bkmqtNh5T1Sk4aTgg8suOsaN4L5LmdPIEdAnUH2Bv09BrDZFErwq9sNNaM5t4bjjKBJpNWzL87OfIZzl6RpDIqt1l4Y9oncgKFJRJfRwXjCy9o28-0mm7sX1z-ypAbMqW-yZTwX_3S5m-p4nt7NItbm9QG1Ul8-hBBCGEQlH8DDzX64bQI3LzF4dddAM6lgJi7O3cKDB-Eu0ghdwNQWlCl81hmIRYchLcS",
    birthDate: new Date(1983, 3, 23),
  },

  // May
  {
    id: "7",
    name: "Daniel Craig",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjlDTgd1Lzxnmf094sEm25n9-BuKN21d6fq_KFWEHTt8dTd_hVzQfj-q4jQJvCizoYKhoNFdsdkbyMvO4-3pVd6DO1-uUcer8-gMN0s-ICl8fnOImU9YaVcHIp67Yh7NwKX87qnFedqJfO5Bw2vT2Ojf0WAk1yDnKhVRbdpQ179JEOs_Yv7KVFeQMxO0c5INr0cOymfhCywM5DZUL82-GAhtxS6_C8jMYP5gTxBdhRoDQJJG-WiEfkEkewx4MM0dvJockKe858RAmt",
    birthDate: new Date(1968, 4, 2),
  },

  // July
  {
    id: "8",
    name: "Chris Evans",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxrLiQ9MqXU6RS05TWZioxOVM3uxpxLX_jSMkZqNaA1ceD7CxDvxh-pAr-o_0lx3QZckH9PPmT908tM7ANPJqH6449EK69Xu3AAJiNksnCwkg8Bv3X814JIylu_Slma7PyhLdh7JRDDOUi_Mpc0SG5rTNj0eIJxJ0mhrVj59bLhVB6XH7iG0eXOx-pHmOkN4NTLpvyo_CXXJvZ9Zn_4Nfx5rLzQ3Nl6GHP7GdqciGG8Bw7UOJS9n8oM-6XXaTMKPTsde3hbtP8IzTq",
    birthDate: new Date(1981, 6, 13),
  },
  {
    id: "9",
    name: "Margot Robbie",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ocDgY_iau8BkQBqF7ksKm2d8b-DpRV26K8NBP65-U2S6oWk09nKVkEYsQ_AYqOMDwYsVL4SWZlzSuV3ObA1UnYiGLbEdn27Xs4ER6V8vdpv5-XCmN1kWUjwLp7sS7eMPwCOldVQAS0Mb-jI5KD58QLOl3EWqMaqpGxzFHD7P0m440tDz-BW2rHwnuuUS8pU9ZQjBTo6qYCiVfXEqN4j9ABhLxJgToBjzxC6iuVHWItWsQqUGKBSN4hkJRxEtsfbiiwwB2NoKmAew",
    birthDate: new Date(1990, 6, 2),
  },

  // August
  {
    id: "10",
    name: "Leo D.",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAPSaYJb5HsZXEP-88utpXBhqDRiDN5seMy0X6fJcLo_E7c5FPQYZ-zU8uNLaJVWC-Xu-vWuh5V9Q4I417p6_d9n7pnmiobO9pvUJeoTOQPz7oIzIGStNgTlvjO8AdiuymCEEftrZDe4KZ00VTfAi0RAODrOVn25QlHQIx6tZjG1EFR6UZQm1rtzec35QHV1VXRwTe8whrjmpSwu_bF7RuZ6xpMvV0ayPd0p-jtlDN2umkAbr06ylVRrQYV_5_KIrtrMLyNat0Pnf",
    birthDate: new Date(1974, 7, 11),
  },

  // September
  {
    id: "11",
    name: "Zendaya",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZa3UxJEwaSn22qbzEyAXyXx9boRITL72unW9i2QalhyovGxxQ0AoqGCyUXU46LAcyEd977T0I15wmXiebwMpVA4bOvpM86X-09PikIQfox6bbV_f5btLKM_3qKYsUHtfryXJT7bh8Pi6xmSG6QmByq3nH_ioPTVMgGspd7t2Mj2uoXVafyNtYIENOXz5TRpn1WTzfDTV52nJQq-JF2kl0OEbCispOvUiUraMNvlJWXaeAn7i0sHf8UE37F3ZqZf8teeop3Ue_kW4n",
    birthDate: new Date(1996, 8, 1),
  },

  // October
  {
    id: "12",
    name: "Ryan Reynolds",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX3VNTA9EYeuSgob421TP2PfyMwuAW2le1KKXidWFGExIpQrIAh4RdtKrEmRZxgwK_gOuOle4uNnhxxijuG78J3_l9lpynW63I73le8rPxNaOAPm4XUpWi9EQ-RiLPqZRrZ4C1pgQ3WuBgZchmp5hBiuNvt73UTrCf0zMn9Y_fcZXDEV9t3Vwh9onbE52d3zsfOQrh6kf0Fw0oCt2jLI_kTqbBowTMXXknrX1WF7gruWnoUmhRz6pluPlBw2ZatLMbbU2rto8Wh9w1",
    birthDate: new Date(1976, 9, 23),
  },

  // December
  {
    id: "13",
    name: "Taylor Swift",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACNdNQgCC6MGpbBXdU8CKGhpazWEHBUUw21me22D-ObdESu1XK-wOmD_TVvc4n_L32GK7K9R7e1Z3RLXJxnqF5L6gPkxjjbuwJv9SYaAAJwH_mxf_Om6ORtv-GgH9le6rfL9NEIb7SBPUYDm_scoUhRLSlg0ZDxIyT-p1uv3k4pJ1cPaBINVN84RKyh2a5-lfW5ntZ9t3pVzOb648izTT_61dN-ua0uDRlwv8Krd9pnOY5JTKcI1R6cbtF6hCoiwSpVx9HC6PM3kyp",
    birthDate: new Date(2001, 11, 9),
  },
  {
    id: "14",
    name: "Brad Pitt",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB__6s2xxLyNpPM1WHbmfQ9l3sD9zzRITs7LxgYp6p3EhIwEWXAvLvi9L-GPhGFc7Ce-Ojm6mDb7VS-XcNswjb1I6fyWPQG20LMtynxDnr43NvxAxcg0cQvUHWMl4dicPq9nBrLZzCh7nW7mbdhG55FXIrdamLyHZpvhmczzFqPJ8iJSr5oA0oGaSXwT3Gh15rI9jzywI4s_y6XhmMm6ktJGIE1KeGhoimyxtVk04AnSaAf4NtrwGWZooIswvH66TX6dEF9ya46eVpR",
    birthDate: new Date(1963, 11, 18),
  },
];

export const getFriendsByMonth = (month: number): Friend[] => {
  return mockFriends
    .filter((friend) => friend.birthDate.getMonth() === month - 1)
    .sort((a, b) => a.birthDate.getDate() - b.birthDate.getDate());
};

export const getMonthsWithCounts = (): MonthCount[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months.map((name, index) => ({
    name,
    number: index + 1,
    friends: getFriendsByMonth(index + 1),
  }));
};
