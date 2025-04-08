// import { renderHook, waitFor } from "@testing-library/react";
// import useFetch from "../components/custom-Hooks/useFetch";

// describe("useFetch", () => {
//   const mockData = { squares: ["X", "O", "", "", "X", "", "", "", "O"] };

//   beforeEach(() => {
//     global.fetch = vi.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockData),
//       })
//     ) as jest.Mock;
//   });

//   afterEach(() => {
//     vi.restoreAllMocks();
//   });

//   it("should return loading initially", () => {
//     const { result } = renderHook(() => useFetch<{ squares: string[] }>("https://api.example.com/game-data"));

//     expect(result.current.loading).toBe(true);
//     expect(result.current.data).toBeNull();
//     expect(result.current.error).toBeNull();
//   });

//   it("should fetch and return data successfully", async () => {
//     const { result } = renderHook(() =>
//       useFetch<{ squares: string[] }>("https://api.example.com/game-data")
//     );

//     await waitFor(() => expect(result.current.loading).toBe(false));

//     expect(result.current.data).toEqual(mockData);
//     expect(result.current.error).toBeNull();
//   });

//   it("should handle fetch errors", async () => {
//     (global.fetch as jest.Mock).mockImplementationOnce(() =>
//       Promise.reject(new Error("Failed to fetch"))
//     );

//     const { result } = renderHook(() =>
//       useFetch<{ squares: string[] }>("https://api.example.com/game-data")
//     );

//     await waitFor(() => expect(result.current.loading).toBe(false));

//     expect(result.current.data).toBeNull();
//     expect(result.current.error).toBe("Failed to fetch");
//   });
// });