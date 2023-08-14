import React, { useEffect, useState } from "react";
import { ITest } from "../../common/interface/Test/ITest";
import { testStore } from "../../store/Test/TestStore";
import {useErrorBoundary } from "react-error-boundary";

const Test = () => {
  const [test, setTestData] = useState([] as ITest[]);
  const { showBoundary } = useErrorBoundary ();
  useEffect(() => {
    getTestData();
  }, []);

  async function getTestData() {
    testStore.baseUrl = "http://localhost:6006";
    const data: ITest[] = await testStore.getTestData();
    setTestData(data);
    showBoundary('fsdhfks');
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
