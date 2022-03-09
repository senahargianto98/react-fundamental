import React, { useEffect } from "react";

export default function JavascriptDasar() {
  useEffect(() => {
    const PushData = () => {
      const array = ["satu", "dua", "tiga"];
      console.log("array sebelum push = " + array);
      array.push("empat");
      console.log("array sesudah push = " + array);
      console.log("");
    };
    const PopData = () => {
      const array = ["satu", "dua", "tiga"];
      console.log("array sebelum pop = " + array);
      array.pop();
      console.log("array sesudah pop = " + array);
      console.log("");
    };
    const UnshiftData = () => {
      const array = ["satu", "dua", "tiga"];
      console.log("array sebelum unshift = " + array);
      array.unshift("empat");
      console.log("array sesudah unshift = " + array);
      console.log("");
    };
    const Indexof = () => {
      const array = ["satu", "dua", "tiga"];
      console.log(
        "cari index tiga di " + array + " indexnya = " + array.indexOf("tiga")
      );
      console.log("");
    };
    const Splice = () => {
      const array = ["satu", "dua", "tiga"];
      console.log("array sebelum splice = " + array);
      console.log("hapus tiga");
      const index = array.indexOf("tiga");
      array.splice(index, 1);
      console.log("hasilnya = " + array);
      console.log("");
    };
    const LogicalStatement = () => {
      console.log("not logical");
      let a = true;
      let b = false;
      let nottrue = !a;
      let notfalse = !b;
      console.log("harusnya true " + nottrue);
      console.log("harusnya false " + notfalse);
      let c = 1;
      console.log("OR and AND");
      console.log("c > 2 || c < 2");
      console.log("OR");
      console.log(c > 2 || c < 2);
      console.log("AND");
      console.log(c > 2 && c < 2);
      console.log("");
    };
    const StringMethod = () => {
      console.log("string method");
      const text = "febrisena hargianto";
      console.log("length/panjang text = " + text.length);
      console.log("slice = " + text.slice(0, 9));
      console.log("substring = " + text.substring(0, 9));
      console.log(
        "replace febrisena menjadi febrisens = " +
          text.replace("febrisena", "febrisens")
      );
      console.log("");
    };
    const ArrayIterator = () => {
      console.log("array iterator");
      const array = [
        { id: 1, nama: "febri" },
        { id: 1, nama: "sena" },
        { id: 2, nama: "hargianto" },
      ];
      for (let x in array) {
        console.log("extract array pake for loop biasa = " + array[x]["nama"]);
      }
      array.forEach((element) => {
        console.log("extract array pake foreach = " + element["nama"]);
      });
      array.map((element) =>
        console.log("extract array pake map = " + element["nama"])
      );
      const filterid = array.filter(function (element) {
        return element["id"] === 1;
      });
      filterid.map((element) =>
        console.log("filter berdasarkan id = 1, " + element["nama"])
      );
      console.log("reduce");
      const total = array.reduce(function (acc, currentitem) {
        return (acc += currentitem.id);
      }, 10);
      console.log(total);
      console.log("");
    };
    PushData();
    PopData();
    UnshiftData();
    Indexof();
    Splice();
    LogicalStatement();
    StringMethod();
    ArrayIterator();
  }, []);
  return (
    <div>
      <h1>Lihat di console</h1>
    </div>
  );
}
