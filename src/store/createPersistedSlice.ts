import type { StateStorage } from 'zustand/middleware';
import { storage } from '@/lib/storage';

/**
 * Adapter MMKV → Zustand StateStorage
 */
export const mmkvStorage: StateStorage = {
	getItem: (key) => storage.getString(key) ?? null,
	setItem: (key, value) => storage.set(key, value),
	removeItem: (key) => storage.remove(key),
};
