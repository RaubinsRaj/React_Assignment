function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}
amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sranalyst")
abhishek=new person("abhishek",21,"HTML","08/06/1997","false","jr analyst")
aaradhya=new person("aaradhya",20,"28/09/1998","false","analyst")
var abhishek=Object.create(amithab);
var aaradhya = Object.create(amithab,abhishek);

print=function()
{
    console.log(amithab);
    console.log(abhishek.lname);
    console.log(abhishek.address);
    console.log(aaradhya.lname);
    console.log(aaradhya.skills);
}();