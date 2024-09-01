<script lang="ts">
	import cx from 'classnames';
	export let value: number = 0;
	export let label: string = '';
	export let labelPosition: 'top' | 'bottom' = 'bottom';
	export let style: 'white' | 'black' | 'red' = 'white';

	const topped = labelPosition === 'top';
</script>

<div
	class={cx(
		topped ? 'flex-col-reverse' : 'flex-col',
		'w-full rounded-lg border-2 flex-1 flex text-center',
		{
			'border-white-off text-white-off': style === 'white',
			'border-black-off text-black-off': style === 'black',
			'border-red-500 text-red-500': style === 'red'
		}
	)}
>
	<div class={cx('font-extrabold text-xl', topped ? 'mb-2' : 'mt-2')}>{value}</div>
	{#if !!label}
		<div
			class={cx('w-auto mx-auto px-2 uppercase', topped ? '-mt-3' : '-mb-3', {
				'bg-black-off': style === 'white' || style === 'red',
				'bg-white-off': style === 'black'
			})}
		>
			{label}
		</div>
	{/if}
</div>
