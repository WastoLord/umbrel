import {trpcReact} from '@/trpc/trpc'

export function useBattery() {
	const batteryQ = trpcReact.system.batteryLevel.useQuery(undefined, {
		retry: false,
		refetchInterval: 10_000,
	})

	return {
		level: batteryQ.data?.level,
		status: batteryQ.data?.status,
		isLoading: batteryQ.isLoading,
		error: batteryQ.error,
	}
}
