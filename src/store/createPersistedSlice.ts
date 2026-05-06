import { createMMKV } from 'react-native-mmkv';
import type { PersistStorage, StorageValue } from 'zustand/middleware';

const storage = createMMKV();

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
