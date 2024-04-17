const data = req.body; // request data body.

//log.info(data);

//var hasil = [];

await Promise.all(data.map(async (element) => {
  // Access each element in the JSON array
  await entities.testdataexcel.insert({
    "EEID":element.EEID,
    "FullName":element["Full Name"],
    "JobTitle":element["Job Title"],
    "BusinessUnit":element["Business Unit"],
    "Age":element.Age
  });


   // log.info(element.id + ", " + element.body + ", " + element.postId + ", " + element.user.username );
}));


// result = {
//     data: hasil
// };


complete();