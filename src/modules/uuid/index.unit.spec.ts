import { v4 } from ".";
import { deleteDuplicate } from "../Array";

export default describe("UNIT - Testando utilitário de UUID", () => {
	describe("FUNÇÃO - v4", () => {
		it("Deve gerar um UUID v4 válido", () => {
			const isAValidUuidv4 = (uuid: string) =>
				/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);

			let i = 0;
			while (i < 10000) {
				expect(isAValidUuidv4(v4())).toBeTruthy();
				i++;
			}
		});

		it("Deve validar se todos os UUIDs gerados são diferentes", () => {
			const uuids: string[] = [];
			const quantOfUuids = 10000;

			let i = 0;
			while (i < quantOfUuids) {
				uuids.push(v4());
				i++;
			}

			expect(deleteDuplicate(uuids).length).toBe(quantOfUuids);
		});
	});
});
