import uuid from 'uuid';
import moment from 'moment';

class Redflag {

   constructor() {
     this.redflags = [];
   }

   create(data) {
     const newRedflag = {
      id: uuid.v4(),
      comment: data.comment,
      createdOn: moment.now()
     };
     this.redflags.push(newRedflag);
     return newRedflag
   }
}

export default new Redflag();