import {faker} from '@faker-js/faker'

const staffList = [
    { 'key': 0,
      'avatar' : faker.image.avatar(),
      'name' : faker.name.firstName(),
      'position' : faker.name.jobTitle() 
    },
    {   'key': 1,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle() 
      },
      { 'key': 2,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle() 
      },
      { 'key': 3,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'position' : faker.name.jobTitle() 
      }
      ,
      {   'key': 4,
          'avatar' : faker.image.avatar(),
          'name' : faker.name.firstName(),
          'position' : faker.name.jobTitle() 
        }
        
    
    
]

export default staffList