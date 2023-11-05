export const ContractAnimalCareABi = [
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "payableContract",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      }
    ],
    "name": "NewAnimal",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "animalToOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "animals",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "fatCount",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "feedCount",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "currentPoints",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "exerciseCount",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "dirty",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "tired",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeBathroomUse",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "needsBathroom",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "canPlay",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "canFeed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "buyPoints",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_contractAddress",
        "type": "address"
      }
    ],
    "name": "changeContractPayable",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "countSharedOwnAnimal",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "createNewAnimal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "doExercise",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      },
      {
        "internalType": "enum AnimalItems.Food",
        "name": "_foodSelected",
        "type": "uint8"
      }
    ],
    "name": "feedAnimal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAnimalsOwner",
    "outputs": [
      {
        "internalType": "uint8[]",
        "name": "",
        "type": "uint8[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum AnimalItems.Food",
        "name": "_foodSelected",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getMeal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getShareAnimal",
    "outputs": [
      {
        "internalType": "uint8[]",
        "name": "",
        "type": "uint8[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "items",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "soap_simple",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "soap_medium",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "soap_premium",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "carrot",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "ownerPoints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "play",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "reduceFatAndTired",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "removeShareAnimal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "shareAnimalWith",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_targetUser",
        "type": "address"
      }
    ],
    "name": "sharedAnimal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "showItems",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "soap_simple",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "soap_medium",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "soap_premium",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "carrot",
            "type": "uint16"
          }
        ],
        "internalType": "struct AnimalItems.Item",
        "name": "item",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "takeABath",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalAnimalOwner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "updatePrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "upgradeLevel",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_animalId",
        "type": "uint256"
      }
    ],
    "name": "useBath",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
  