// Copyright (c) 2024, rahul and contributors
// For license information, please see license.txt

frappe.query_reports["revenue by make"] = {
	"filters": [
		{
			"fieldname": "my_filter",
			"label": "My Filter",
			"fieldtype": "Link",
			"options": "Vehical"
		}

	]
};
