import { IStore } from "../../common/Interface/IStore";
import { TestService } from "../../services/Test/TestService";

class TestStore implements IStore {
  baseUrl: string;

  constructor(protected testService: TestService) {
    this.baseUrl = "";
  }

  getTestData = async() =>{
    const response  = await this.testService.getTestData(this.baseUrl);
    return response;
  }

}
const testService: TestService = new TestService();
export const testStore: TestStore = new TestStore(testService);
