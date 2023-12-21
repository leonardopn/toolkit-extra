import dayjs from "dayjs";
import { vi } from "vitest";

import { sleep, timeoutAsync } from ".";

vi.mock("firebase/auth");
vi.mock("@mapbox/mapbox-sdk/services/geocoding");

export default describe("UNIT - Testando utilitário de Timeout", () => {
	describe("FUNÇÃO - timeoutAsync", () => {
		it("Deve aguardar 2 segundos antes de resolver a promise", async () => {
			const currentDate = dayjs();
			await timeoutAsync(2000);

			expect(dayjs().diff(currentDate, "seconds")).toBe(2);
		});
	});

	describe("FUNÇÃO - sleep", () => {
		it("Deve aguardar 2 segundos antes de iniciar resolver outra promise", async () => {
			const currentDate = dayjs();
			const result = await sleep(2000, () => "foo", []);

			expect(dayjs().diff(currentDate, "seconds")).toBe(2);
			expect(result).toBe("foo");
		});
	});
});
