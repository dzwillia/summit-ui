import { libraries } from '@/constants';

// Simulated async load options function
export const mockLoadOptions = async (query: string) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));

  // Always return the same results regardless of the query
  // In a real-world scenario, you would filter the results based on the query
  // and return only the relevant options.
  return [
    { value: '1', label: `Result 1 for ${query}` },
    { value: '2', label: `Result 2 for ${query}` },
    { value: '3', label: `Result 3 for ${query}` },
  ];
};

// Simulated async search function with real-world filtering
export const mockSearchLibraries = async (query: string) => {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500));

  // Filter libraries based on query
  return libraries.filter(
    lib =>
      lib.label.toLowerCase().includes(query.toLowerCase()) ||
      lib.value.toLowerCase().includes(query.toLowerCase()),
  );
};
