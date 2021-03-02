export const createShipment = (body) =>
	fetch("https://api-demo.skydropx.com/v1/shipments", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
		body: JSON.stringify(body),
	});

export const createLabel = (id) =>
	fetch(`https://api-demo.skydropx.com/v1/labels`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
		body: JSON.stringify({
			rate_id: Number(id),
			label_format: "pdf",
		}),
	});

export const readLabel = (id) =>
	fetch(`https://api-demo.skydropx.com/v1/labels/${id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
	});

export const readShipment = (id) =>
	fetch(`https://api-demo.skydropx.com/v1/shipments/${id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
	});
