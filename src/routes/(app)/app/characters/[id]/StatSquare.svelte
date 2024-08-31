<script lang="ts">
	import cx from 'classnames';
	export let value: number = 0;
	export let label: string = '';
	export let labelPosition: 'top' | 'bottom' = 'bottom';

	const topped = labelPosition === 'top';
</script>

<div
	class={cx(
		topped ? 'flex-col-reverse' : 'flex-col',
		'w-full rounded-lg border-2 flex-1 flex text-center',
		'border-inherit'
	)}
>
	<div class={cx('font-extrabold text-xl', topped ? 'mb-2' : 'mt-2')}>{value}</div>
	{#if !!label}
		<div class={cx('bg-black-off w-auto mx-auto px-2 uppercase', topped ? '-mt-3' : '-mb-3')}>
			{label}
		</div>
	{/if}
</div>
