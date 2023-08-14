import axios from "axios";

export class TestService {
  private static instance = 0;

  constructor() {
    if (TestService.instance > 0) {
      console.log("invalid instace");
      //throw new Error();
    }
    TestService.instance = 1;
  }

  async getTestData(baseurl: string) {
    try {
      const response = await axios.get(`${baseurl}/test`);
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
