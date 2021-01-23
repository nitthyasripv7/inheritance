// var parent ={
//     value:"parentvalue",
//  obj:{
//      objvalue:"parentobjvalue"
//  },
//  walk:function(){
//      console.log("walking");
//  }
// };
// var child=Object.create(parent);
// console.log(" CHILD _child.value:",child.value);
// console.log("CHILD_child.obj.objvalue:",child.obj.objvalue);
// console.log("PARENT_parent.value:",parent.value);
// console.log("PARENT_parent.obj.objvalue:",parent.obj.objvalue);
// console.log("child :",child);
// console.log("parent :",parent);


// child.value="childvalue";
// child.obj.objvalue="childobjvalue"
// console.log("CHANGED CHILD _child.value:",child.value);
// console.log("CHANGED CHILD_child.obj.objvalue:",child.obj.objvalue);
// console.log("CHILD_child.value",child.value);
// console.log("CHILD_child.obj.objvalue",child.obj.objvalue);
// console.log("PARENT_parent.value:",parent.value);  //it is masked so only originar value is seen
// console.log("PARENT_parent.obj.objvalue:",parent.obj.objvalue);
// console.log("child :",child);
// console.log("parent :",parent);

// console.log("child.obj===parent.obj ?",child.obj===parent.obj);

// var grandchild=Object.create(child);
// console.log("grandchild",grandchild);
// grandchild.walk();

function dog(name){
    this.name=name;
    console.log("this is",this);

}
var mydog=new dog("max");
console.log("my dog",mydog);

dog("max2");