import type { PersistStorage, StorageValue } from 'zustand/middleware';
import { storage } from '@/lib/storage';

export function createMMKVStorage<T>(): PersistStorage<T> {
	return {
		getItem: (key): StorageValue<T> | null => {
			const value = storage.getString(key);
			if (!value) return null;
			return JSON.parse(value) as StorageValue<T>;
		},
		setItem: (key, value: StorageValue<T>): void => {
			storage.set(key, JSON.stringify(value));
		},
		removeItem: (key): void => {
			storage.remove(key);
		},
	};
}
