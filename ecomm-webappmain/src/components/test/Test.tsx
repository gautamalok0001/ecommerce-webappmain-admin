import React, { useEffect, useState } from "react";
import { ITest } from "../../common/interface/test/ITest";
import { testStore } from "../../store/Test/TestStore";

const Test = () => {
  const [test, setTestData] = useState([] as ITest[]);
  useEffect(() => {
    getTestData();
  }, []);

  async function getTestData() {
    testStore.baseUrl = "http://localhost:6007";
    const data: ITest[] = await testStore.getTestData();
    setTestData(data);
  }

  return (
    <>
      {test &&
        test.map((item) => (
          <ul>
            <li>{item.id}</li>
            <li>{item.first_name}</li>
            <li>{item.email}</li>
            <li>{item.gender}</li>
            <li>{item.last_name}</li>
            <li>{item.ip_address}</li>
          </ul>
        ))}
    </>
  );
};

export default Test;
