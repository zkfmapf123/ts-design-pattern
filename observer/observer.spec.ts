import { Observers } from "./observe";
import { CityTemp, MountainTemp, SeaTemp } from "./temperature";

describe("observer test", () => {
  const observer = new Observers();

  beforeAll(() => {
    const mountainTemp = new MountainTemp();
    const seaTemp = new SeaTemp();
    const cityTemp = new CityTemp();

    observer.addObserver("mountain", mountainTemp);
    observer.addObserver("sea", seaTemp);
    observer.addObserver("city", cityTemp);
  });
  it("default temperature test", (done) => {
    expect(observer.observerMap.size).toBe(3);
    done();
  });

  it("notify test", (done) => {
    observer.notifiy(10, 10, 10);

    console.log(observer);
    done();
  });
});
