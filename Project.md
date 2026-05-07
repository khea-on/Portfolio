Project 1: Sales Order API
Create a portfolio project card for a Sales Order API built with ASP.NET Web API, C#, Entity Framework, and SQL Server.

Project details:
This project provides API endpoints for retrieving and managing sales order data. It supports pagination, filtering, date range search, DTO mapping, and clean response models. The API is designed for ERP sales modules and can be used by web or mobile applications.

Tech stack:
C#, ASP.NET Web API, Entity Framework, SQL Server, LINQ, DTO, REST API

Features:
- Get all sale orders
- Filter by sale order number
- Filter by date range
- Pagination with limit and offset
- DTO response mapping
- Clean API structure
- ERP sales module integration
Project 2: Sale Shipment API
Create a portfolio project card for a Sale Shipment API.

Project details:
This project manages sale shipment header and item data. It joins shipment header and item records, maps them to DTO classes, and returns structured API responses for ERP shipment workflows.

Tech stack:
C#, ASP.NET Web API, Entity Framework, SQL Server, LINQ

Features:
- Shipment header DTO
- Shipment item DTO
- Filter shipment records
- Join header and item data
- Return clean JSON response
- Support ERP delivery/shipment process
Project 3: Customer Master Excel Upload
Create a detailed portfolio project for a Customer Master Excel Upload system.

Project details:
This project allows users to upload Excel files and import customer master data into the ERP database. The system supports template-based mapping, validation, batch upload numbers, error logging, and create/update customer logic.

Tech stack:
C#, ASP.NET MVC, Entity Framework, SQL Server, Excel import, DevExpress MVC

Features:
- Upload Excel customer data
- Read Excel into DataTable
- Map Excel columns to database fields
- Support customer create and update
- Generate upload batch number
- Save upload status
- Log upload errors
- Support customer sales information
- Template-based upload mapping
Project 4: Payment Collection API
Create a portfolio project for a Payment Collection API.

Project details:
This project retrieves customer invoice data and supports payment collection workflows. It includes overdue invoice logic, payment term calculation, COD filtering, customer/salesman security filtering, and API response DTOs.

Tech stack:
C#, ASP.NET Web API, Entity Framework, SQL Server, LINQ

Features:
- Get overdue invoices
- Include or exclude COD invoices
- Calculate due date by payment term
- Filter by salesman
- Return invoice DTOs
- Support AR payment collection workflow
Project 5: Audit Plan Module
Create a portfolio project for an Audit Plan Management module.

Project details:
This project manages audit plans and audit plan detail records. It includes database table design, API structure, customer visit planning, salesperson assignment, province/district/commune data, and audit tracking.

Tech stack:
C#, ASP.NET Web API, SQL Server, Entity Framework

Features:
- Create audit plan table
- Create audit plan detail table
- Assign salesperson
- Store customer visit location
- Manage province, district, commune
- Track created and changed users
- Support audit planning workflow
Project 6: Inventory Balance by Warehouse
Create a portfolio project card for an Inventory Balance by Warehouse feature.

Project details:
This project retrieves stock balance by warehouse using user access rules. It filters warehouse data by company, salesperson, site, available quantity, and user warehouse permission.

Tech stack:
C#, Entity Framework Core, LINQ, SQL Server, ASP.NET API

Features:
- Get stock by warehouse
- Filter by company/plant
- Filter by user warehouse permission
- Show available stock quantity
- Support pagination
- Map data to DTO
- ERP inventory module support
Project 7: Background Integration Service
Create a portfolio project for an ERP Background Integration Service.

Project details:
This project runs scheduled background jobs to post ERP transactions to external systems. It includes cron scheduling, API authentication, token handling, integration logs, success/fail status, and retry-friendly logging.

Tech stack:
C#, .NET Background Service, Quartz Scheduler, SQL Server, REST API Integration

Features:
- Scheduled background job
- Cron schedule support
- API token authentication
- Post ERP transaction data
- Save success/fail logs
- Store request/response JSON
- Integration monitoring dashboard